export default {
    props: ['text', 'isDone'],
    name: 'TodoItem',
    methods: {
      toggleDone: function () {
        this.isDone = !this.isDone;
      }
    }
  }