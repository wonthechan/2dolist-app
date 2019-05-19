<template>
  <div>
    <edit-task-modal @fechar="notifyEvent"/>
    <div v-bind:key="todo.uid" v-for="todo in todos">
      <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo)" v-on:edit-todo="$modal.show('edit-task', todo)" />
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
import EditTaskModal from './EditTaskModal.vue'
export default {
  name: "Todos",
  components: {
    TodoItem,
    EditTaskModal,
  },
  props: ["todos"],
  methods: {
    notifyEvent(targetTodo) {
      this.$emit('edit-todo', targetTodo);
    }
  }
}
</script>

<style scoped>

</style>

