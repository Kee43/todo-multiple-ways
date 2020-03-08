<template>
  <div id="app">
    <h1>Todo App Vue</h1>
    <TodoList/>
  </div>
</template>

<script>
import TodoList from './components/TodoList/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
