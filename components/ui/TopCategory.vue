<template>
  <section>
    <div>
      <TextTitle :value="'Top catégories'" />
    </div>
    <div class="listing--container py-4">
      <CardListing v-for="listing in listings" :key="listing.id" class="listing--card" />
      <CardListing v-for="listing in listings" :key="listing.id" class="listing--card" />
      <CardListing v-for="listing in listings" :key="listing.id" class="listing--card" />
      <CardListing v-for="listing in listings" :key="listing.id" class="listing--card" />
      <CardListing v-for="listing in listings" :key="listing.id" class="listing--card" />
      <CardListing v-for="listing in listings" :key="listing.id" class="listing--card" />
      <CardListing v-for="listing in listings" :key="listing.id" class="listing--card" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import listings from "~/data/listings.json";
</script>

<style lang="scss" scoped>
.listing--container {
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  justify-content: flex-start;
  gap: 1rem;

  .listing--card {
    flex: auto;
    min-width: 256px;
    border-radius: 0.5rem;
  }
}
</style>
