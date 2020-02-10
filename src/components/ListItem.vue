<template>
<div class="">

<input type="checkbox" v-on:change="markComplete"/>
    <p v-bind:class="{'is-complete':todo.completed}">{{todo.title}}</p>
    <router-link :id="todo.id" :to="`/todo/${String(todo.id)}`">{{todo.title}}</router-link>
    <h3 @click="$emit('del-todo', todo.id)">x</h3>
</div>
</template>

<script>
export default {
    name: 'ListItem',
    props: ['todo'],
    methods: {
        markComplete() {
          this.todo.completed = !this.todo.completed;
        }
    }
}
</script>

<style lang="scss" scoped>
    .is-complete {
        text-decoration: line-through;
    }
</style>