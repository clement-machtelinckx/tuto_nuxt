<script setup>
    const { data: productCount, pending, refresh } = await useLazyAsyncData("products", () =>
    $fetch("api/products_count")
    );
</script>

<template>
    <div>
        <p>{{ pending ? "loading" : productCount }}</p>
        <button class="border" @click="refresh">Refresh</button>
    </div>
</template>

<style></style>