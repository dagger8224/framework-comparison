<template>
    <p>
        <RouterLink to="/new" class="btn btn-success"> Add new </RouterLink>
    </p>
    <div>
        <!--<PostItem v-for="post of postList" :key="post.id" :post="post" />-->
        <PostItem v-for="post of postList" :key="post.id" :post="post" @delete="onDelete" />
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import PostItem from "../components/PostItem.vue";
// import { useStore } from "vuex";

// const store = useStore();

// const postList = computed(() => store.state.posts);
const postList = ref([]);
onMounted(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(posts => {
        postList.value = posts;
    });
});

function onDelete(post) {
    postList.value = postList.value.filter(p => p.id !== post.id);
}
</script>

<style></style>
