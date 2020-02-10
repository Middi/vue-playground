<template>
    <div class="list">
        <div class="list-item" v-bind:key="todo.id" v-for="todo in todos">
            <ListItem v-bind:todo="todo" v-on:del-todo="deleteTodo" />
        </div>
    </div>
</template>


<script>
import ListItem from "@/components/ListItem";

export default {
    name: 'List',
    data() {
        return {
        todos: []
        }
    },
    components: {
        ListItem
    },
    methods: {
    callApi() {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', { method: 'get' })
        .then(res => res.json())
        .then(res => this.todos = res)
        .catch(function(err) {
          console.log(err);
        });
    },
    deleteTodo(id) {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(this.todos = this.todos.filter(todo => todo.id !== id))
            .catch(function(err) {
                console.log(err);
            });
    }
  },
  created() {
    this.callApi();
  }
}
</script>