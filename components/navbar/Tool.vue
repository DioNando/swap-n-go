<template>
  <div class="d-flex align-center">
    <NuxtLink v-for="l in links" :key="l.title" :to="l.link">
      <v-btn
        :prepend-icon="l.icon"
        variant="plain"
        stacked
        size="small"
        class="text-none"
        :ripple="false"
      >
        {{ l.title }}
      </v-btn>
    </NuxtLink>
    <v-btn
      prepend-icon="mdi-logout"
      variant="plain"
      stacked
      size="small"
      class="text-none"
      :ripple="false"
      @click="logUserOut"
    >
      Deconnexion
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import links from "~/data/links.json";
import { useAuthStore } from "~/stores/auth"; // import the auth store we just created

const { logUserOut } = useAuthStore();
</script>

<style lang="scss" scoped></style>
