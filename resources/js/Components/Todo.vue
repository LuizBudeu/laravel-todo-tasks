<template>
    <div>
        <input type="text" v-model="newTodo" placeholder="Enter a new todo" />
        <button style="padding-left: 10px" @click="addTodo">Add Todo</button>

        <ul>
            <li v-for="todo in todos" :key="todo">{{ todo }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTodo: "",
            todos: [],
        };
    },
    methods: {
        addTodo() {
            this.todos.push(this.newTodo);
            this.newTodo = "";
        },
    },
};
</script>
