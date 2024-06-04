<template>
    <div>
        <input type="text" v-model="newTodo" placeholder="Enter a new todo" />
        <PrimaryButton class="ml-3" @click="addTodo">Add Todo</PrimaryButton>

        <SecondaryButton class="ml-3" @click="modal.value.show = true"
            >Modal</SecondaryButton
        >

        <Checkbox
            :checked="false"
            class="ml-5"
            @update:checked="addDefaultTodo"
        />

        <Modal title="Todos" v-model="modal">
            <template #body>
                <ul>
                    <li v-for="todo in todos" :key="todo">{{ todo }}</li>
                </ul>
            </template>
        </Modal>

        <ul>
            <li v-for="todo in todos" :key="todo">{{ todo }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from "vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import InputLabel from "@/Components/InputLabel.vue";
import Modal from "@/Components/Modal.vue";
import Checkbox from "@/Components/Checkbox.vue";

const newTodo = ref("");
const todos = ref([]);

const modal = ref(null);

const addTodo = () => {
    todos.value.push(newTodo.value);
    newTodo.value = "";
};

const addDefaultTodo = (checked) => {
    if (checked) {
        todos.value.push("Default todo");
    }
};
</script>
