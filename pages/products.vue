<script setup>
const { pending, data: products, refresh } = useFetch('https://fakestoreapi.com/products', {
  lazy: false,
  transform: (products) => {
      return products.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
      }));
  }
});

</script> 

<template>
    <div>



      <div v-if="pending">
        Loading ...
      </div>
      <div v-else>
        <div><button @click="refresh">refresh page</button></div>
        <table class="table-auto border-2">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">title</th>
              <!-- <th scope="col">description</th> -->
              <th scope="col">price</th>
              <!-- <th scope="col">category</th> -->
              <!-- <th scope="col">rating</th> -->
              <!-- <th scope="col">avis</th> -->
              <th scope="col">image_url</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.name">
              <td class="border border-slate-300">{{ product.id }}</td>
              <td class="border border-slate-300">{{ product.title }}</td>
              <!-- <td class="border border-slate-300">{{ product.description }}</td> -->
              <td class="border border-slate-300">{{ product.price }}</td>
              <!-- <td class="border border-slate-300">{{ product.category }}</td> -->
              <!-- <td class="border border-slate-300">{{ product.rating.rate }}/5 </td> -->
              <!-- <td class="border border-slate-300">{{ product.rating.count }} </td> -->
              <td class="border border-slate-300 "><img :src="product.image" alt="Product Image"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>




<style lang="scss">
img,
video {
  max-width: 50%;
  height: auto;
}
</style>