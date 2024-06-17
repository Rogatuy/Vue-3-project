<script setup>
  import { useRoute } from 'vue-router';
  import Header from '@/components/Common/header/header.vue';
  import Footer from '@/components/Common/footer/footer.vue';
  import Main from '@/views/Main/Main.vue';
  import CatalogClothes from '@/views/Catalog/catalog-clothes/CatalogClothes.vue';
  import CatalogShoes from '@/views/Catalog/catalog-shoes/CatalogShoes.vue';
  import CatalogEquipment from '@/views/Catalog/catalog-equipment/CatalogEquipment.vue';

  const route = useRoute();
</script>

<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<style></style>
