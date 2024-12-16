<template>
  <section>
    <div>
      <TextTitle :value="'Dernières annonces'" />
    </div>
    <div class="text-end">
      <v-btn
        variant="text"
        append-icon="mdi-chevron-right"
        class="text-none"
        :ripple="false"
      >
        Voir plus d'annonces
      </v-btn>
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
  flex-wrap: wrap;
//   overflow: auto;
  justify-content: flex-start;
  gap: 1rem;

  .listing--card {
    flex: auto;
    width: 256px;
    border-radius: 0.5rem;
  }
}
</style>
