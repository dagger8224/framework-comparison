<template>
    <div>
        <pre>{{ model }}</pre>
        <form @submit.prevent="onSubmit">
            <h1>{{ model.id ? 'Edit Post' : 'Create new Post' }}</h1>
            <div class="mb-3">
                <input
                    type="text"
                    class="form-control"
                    v-model="model.title"
                    placeholder="Post Title"
                >
            </div>
            <div class="mb-3">
                <textarea
                    type="text"
                    class="form-control"
                    v-model="model.body"
                    placeholder="Post Body">
                </textarea>
            </div>
            <p>
                <button
                    :disabled="!model.title || !model.body"
                    class="btn btn-success"
                    type="submit">
                    Submit
                </button>
            </p>
        </form>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const model = ref({
    id: '',
    title: '',
    body: ''
});

onMounted(() => {
    if (!route.params.id) {
        return;
    }
    fetch(`https://jsonplaceholder.typicode.com/posts/${ route.params.id }`).then(res => res.json()).then(post => {
        model.value = post;
    });
});

</script>

<style>
</style>
