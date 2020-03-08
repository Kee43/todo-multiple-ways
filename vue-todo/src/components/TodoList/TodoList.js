import TodoItem from '../TodoItem/TodoItem.vue';

export default {
  data: function () {
    return {
      todoList: [],
      newItem: ''
    }
  },
  name: 'TodoList',
  components: {
    TodoItem
  },
  methods: {
    addItem: function () {
      this.todoList.push({"text": this.newItem, "isDone": false});
      this.newItem = '';
    }
  }
}