<template>
  <div>
    <form>
      <span id="ent">Total: {{todos.length}} Completed: <span id="ww">{{todos.filter(x => x.completed == true).length}}</span></span>
    </form>
  </div>
</template>

<script>
export default {
  name: "ExistTodoStatus",
  data() {
    return {
    }
  },
  props: ["todos"],
}
</script>

<style scoped>
  form {
    display: flex;
  }
  #ent {
    flex: 10;
    padding: 5px;    
    border-top: 3px double #8b8c8d;
    border-bottom: 3px double #8b8c8d;
    text-align: center;
    word-spacing: 20px;
  }
  #ww {
    font-weight: 600;
    color: red;
  }
</style>


