<script setup>
// const { sayGB } = useUtils();
// sayGB();
const { $proHello } = useNuxtApp();
// console.log(useNuxtApp());
$proHello("clement");
</script>

<template>
<div class="container py-3 mx-auto Main">
    <h1 class="text-teal-500">profile vue </h1>
    <Compteur />
</div>
</template>