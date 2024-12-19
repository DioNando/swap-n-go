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
    <NuxtLink :to="`/users/${user?.id}`">
      <v-btn
        prepend-icon="mdi-account"
        variant="plain"
        stacked
        size="small"
        class="text-none"
        :ripple="false"
      >
        {{ user?.name }}
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
import { useAuthStore } from "~/stores/auth"; 

const { user } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const { logUserOut } = useAuthStore();
</script>

<style lang="scss" scoped></style>
