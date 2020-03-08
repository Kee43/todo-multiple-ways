<template>
  <div id="todo-list">
    <ul>
      <li v-for="item in todoList" :key="item.text">
        <TodoItem v-bind:text="item.text" v-bind:isDone="item.isDone" />
      </li>
    </ul>
    <input type="text" v-model="newItem"/>
    <button v-on:click="addItem">Add Item</button>
  </div>
</template>

<script src="./TodoList.js"></script>
