<template>
  <div class="d-flex align-center">
    <NuxtLink v-for="l in links" :key="l.title" :to="l.link">
      <v-btn :prepend-icon="l.icon" variant="plain" stacked size="small" class="text-none" :ripple="false">
        {{ l.title }}
      </v-btn>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import links from "~/data/links.json";
</script>

<style lang="scss" scoped></style>
