<template>
  <div id="app">
    <notifications position="top left" group="foo" />
    <notifications position="top center" group="err" />
    <Header v-on:add-todo="addTodo" v-on:change-toggle="changeOverdueState" />
    <NoTodoStatus v-if="!todos.length" />
    <ExistTodoStatus v-bind:todos="todos" v-if="todos.length" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" v-on:edit-todo="editTodo" />
  </div>
</template>

<script>
import moment from 'moment';  
import Header from './components/layout/Header';
import Todos from './components/Todos';
import NoTodoStatus from './components/NoTodoStatus';
import ExistTodoStatus from './components/ExistTodoStatus';
//import axios from 'axios';

export default {
  name: 'app',
  components: {
    Header,
    Todos,
    NoTodoStatus,
    ExistTodoStatus,
  },
  data() {
    return {
      todos: [],
      timerID : null,
    }
  },
  methods: {
    editTodo(targetTodo) {
      var index = this.todos.findIndex(x => x.uid === targetTodo.uid);
      this.todos.splice(index,1,targetTodo);
      this.editNoti();
    },
    deleteTodo(targetTodo) {
      this.todos.splice(this.todos.indexOf(targetTodo), 1);
      this.deleteNoti();
    },
    addTodo(newTodo) {
      this.todos.push(newTodo);
      this.addNoti();
    },
    addNoti(){
      this.$notify({
        group: 'foo',
        type: 'success',
        title: 'Notification',
        text: 'New Todo has been added succefully!'
      });
    },
    deleteNoti(){
      this.$notify({
        group: 'foo',
        type: 'success',
        title: 'Notification',
        text: 'The Todo has been removed succefully!'
      });
    },
    editNoti(){
      this.$notify({
        group: 'foo',
        type: 'success',
        title: 'Notification',
        text: 'The Todo has been edited succefully!'
      });
    },
    dueDateNoti(overCnt){
      this.$notify({
        group: 'err',
        type: 'error',
        title: 'Notification',
        text: overCnt + ' Todo(s) are overdue now!'
      });
    },
    checkDueDate(){
      var cnt = 0;
      var currTime = moment().format('YYYY-MM-DD');
      for(var i = 0; i < this.todos.length; i++){
        if(this.todos[i].completed == false){
          var dayDiff = moment(this.todos[i].myDate, 'D MMM YYYY').diff(currTime, 'day');
          if(dayDiff <= 0){
            cnt++;
            this.todos[i].overDue = true;
          }
        }
      }
      if(cnt > 0){
        this.dueDateNoti(cnt);
      }
    },
    changeOverdueState(toggleValue){
      if(toggleValue){
        this.timerID = setInterval(this.checkDueDate, 5000);
      } else{
        if(this.timerID != null){
          clearInterval(this.timerID);
        }
      }
    }
  },
  created() {
    if (localStorage.getItem('todos')) this.todos = JSON.parse(localStorage.getItem('todos'));
  },
  watch: {
    todos: {
      handler() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      },
      deep: true,
    },
  },
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666;
  }
</style>
