<template>
  <header class="header">
    <add-task-modal @fechar="notifyEvent"/>
    <h1>2-Do List!</h1>
    <p >made by Yechan Lim</p>
    <div id="nav" >
      <div clss="dummy-left"/>
      <div class="btn-area">
        <button componente
          class="newBtn"
          @click="$modal.show('add-task')">
          New Todo
        </button>
      </div>
      <div class="toggle-area">
        <label>Overdue Notification (every 5 sec) </label>
        <toggle-button :value="false" :labels="true" @change="onChangeToggle" />
      </div>
    </div>
  </header>
</template>

<script>
import AddTaskModal from '../AddTaskModal.vue'
export default {
  name: "Header",
  data() {
    return {
    }
  },
  components: {
    AddTaskModal
  },
  methods: {
    notifyEvent(newTodo) {
      // Send up to parent
      this.$emit('add-todo', newTodo);
    },
    onChangeToggle(event) {
      this.$emit('change-toggle', event.value);
    }
  }
}
</script>

<style scoped>

  h1 {
    font-size: 35px;
  }
  p {
    margin-top: -10px;
    font-size: 13px;
  }

  #nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 10px;

  }

  .dummy-left {

  }
  .btn-area {
    text-align: center;
  }

  .toggle-area {
    text-align: right;
    margin-right: 10px;
  }
  .header {
    display: inline;
    font-family: 'Times New Roman';
    background: #fff;
    color: #000;
    text-align: center;
    padding: 20px;
  }

  .header label {
    color: #000;
    padding-right: 5px;
    text-decoration: none;
  }

  .newBtn {
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .newBtn:hover {
    background: #666;
  }
</style>