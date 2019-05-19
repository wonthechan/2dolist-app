<template>
  <div>
    <form>
      <span>There are no todos now.</span>
    </form>
  </div>
</template>

<script>
export default {
  name: "NoTodoStatus",
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }
  span {
    flex: 10;
    padding: 5px;    
    border-top: 3px double #8b8c8d;
    border-bottom: 3px double #8b8c8d;
    text-align: center;
    color: #8b8c8d;
  }
</style>


