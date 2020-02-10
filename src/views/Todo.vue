<template>
  <div class="about">
    <h1>This is a todo page</h1>
    <h3>{{todo.title}}</h3>
  </div>
</template>


<script>
export default {
    name: "Todo",
    data() {
        return {
            todo: {}
        }
    },
    props: ['id'],
    watch: {
        '$route.params.id': {
            handler: 'callApi',
            immediate: true
        }
    },
    methods: {
        callApi() {
        fetch(`https://jsonplaceholder.typicode.com/todos/${this.id}`)
            .then(res => res.json())
            .then(res => this.todo = res)
            .catch(function(err) {
                console.log(err);
            });
        }
    }
}
</script>
