<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}" >
    <p>
      <label class="container">
        <input type="checkbox" v-on:change="markComplete">
        <span class="checkmark"></span>
      </label>
      <label class="title">{{todo.title}}</label>
      
      <button @click="$emit('del-todo', todo)" class="del">x</button>
      <button @click="$emit('edit-todo', todo)" class="edit">i</button>
      <span class="priority-box" :priority="todo.priority">{{todo.priority.toUpperCase()}}</span>
      <label v-if="todo.myDate != null" class="date">{{todo.myDate}}</label>
      <img v-if="todo.myDate != null" src="../assets/small-calendar.png"/>
      <span v-if="todo.overDue" class="overdue-notify-span">OVERDUE! -></span>

    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
}
</script>

<style scoped>

  .overdue-notify-span {
    margin-right: 10px;
    float: right;
    color: red;
    font-style: italic;
    font-size: 15px;
  }
  .priority-box[priority="low"] {
    display: inline-block;
    width: 80px;
    background: #f4f4f4;
    text-align: center;
    border: 2px solid #45ad58;
    border-radius: 5px;
    padding: 1px;
    color: #45ad58;
    font-size: 13px;
    font-family: "Open Sans", sans-serif;
    float: right;
    transition: border-color 0.4s;
    transition: color 0.4s;
    transition: background 0.4s;
  }
  .priority-box[priority="normal"] {
    display: inline-block;
    width: 80px;
    background: #f4f4f4;
    text-align: center;
    border: 2px solid #2196F3;
    border-radius: 5px;
    padding: 1px;
    color: #2196F3;
    font-size: 13px;
    font-family: "Open Sans", sans-serif;
    float: right;
    transition: border-color 0.4s;
    transition: color 0.4s;
    transition: background 0.4s;
  }
  .priority-box[priority="high"] {
    display: inline-block;
    width: 80px;
    background: #f4f4f4;
    text-align: center;
    border: 2px solid #f44248;
    border-radius: 5px;
    padding: 1px;
    color: #f44248;
    font-size: 13px;
    font-family: "Open Sans", sans-serif;
    float: right;
    transition: border-color 0.4s;
    transition: color 0.4s;
    transition: background 0.4s;
  }
  img {
    width: 20px;
    height: auto;
    float: right;
    margin-right: 5px;
    vertical-align: middle;
  }
  .date {
    float: right;
    font-size: 15px;
    text-align: center;
    margin-right: 10px;
  }
  .todo-item{
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
    transition: background 0.4s;
  }

  .title {
    margin-left: 40px;
    font-size: 22px;
    transition: color 0.4s;
  }

  .is-complete {
    background: #dbdbdb;
    color: #848484;
    text-decoration: line-through;
  }

  .is-complete .priority-box {
    background: #dbdbdb;
    border-color: #939393;
    color: #939393;
  }

  .del {
    display: none;
    background: #f6ced8;
    color: #fff;
    border: none;
    padding: 9px 13px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
    margin-left: 10px;
  }

  .edit {
    display: none;
    background: #fffef2;
    color: #000;
    border: 1px solid #d8d8d8;
    padding: 9px 16px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
    margin-left: 10px;
  }
  .del:hover {
    background: #ff0000;
  }

  .edit:hover {
    background: #ffff00;
  }

  .todo-item:hover .del,
  .todo-item:hover .edit {
    display: block;
  }

  /* Customize the label (the container) */
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  input:hover ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  input:checked ~ .checkmark {
    background-color: #2196F3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>

