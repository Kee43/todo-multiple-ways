<template>
  <div id="todo-item">
      {{ text }}
      <input type="checkbox" v-bind:value="isDone">
  </div>
</template>

<script src="./TodoItem.js"></script>
