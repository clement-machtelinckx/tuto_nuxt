<script setup>
// const counter = useCounter();
// const color = useColor();

// import { useCounterStore } from "~/stores/myStore";
// const store = useCounterStore();
// console.log(store);

// const hello = await $fetch('/api/hello');
// console.log(hello);

const { data: products } = await useFetch('/api/products', {
  transform: (_products) => _products.data,
});

// console.log(toRaw(products.value));
</script>

<template>
  <div>
    <h1>tkt c'est pas un black sceen loul</h1>
    <div v-if="pending">
      Loading ...
    </div>
    <div v-else>
      <table class="table-auto border-2">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">price</th>
            <th scope="col">description</th>
            <th scope="col">image_url</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.name">
            <td class="border border-slate-300">{{ product.name }}</td>
            <td class="border border-slate-300">{{ product.price }}</td>
            <td class="border border-slate-300">{{ product.description }}</td>
            <td class="border border-slate-300"><img :src="product.image_url" alt="Product Image"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

