<template>
  <div class="d-flex flex-column align-start">
    <NuxtLink v-for="l in links" :key="l.title" :to="l.link">
      <v-btn
        :prepend-icon="l.icon"
        variant="plain"
        size="large"
        class="text-none"
        :ripple="false"
      >
        {{ l.title }}
      </v-btn>
    </NuxtLink>
  </div>
  <v-divider class="my-2"></v-divider>
  <div class="d-flex flex-column align-start">
    <v-btn
      v-for="category in parentCategories"
      :key="category.id"
      :ripple="false"
      class="text-none"
      flat
      variant="text"
    >
      {{ category.name }}
      <v-menu
        activator="parent"
        location="right"
        transition="fade-transition"
        :open-on-hover="true"
      >
        <CardCategory
          :title="category.name"
          :children="childrenByParent[category.id]"
          class="mt-4"
        />
      </v-menu>
    </v-btn>
  </div>
  <v-divider class="my-2"></v-divider>
</template>

<script lang="ts" setup>
import links from "~/data/links.json";
import categories from "~/data/categories.json";

// Extraire les catégories parentes (parentCategoryId === null)
const parentCategories = categories.filter(
  (category) => category.parentCategoryId === null
);

// Regrouper les enfants par parentCategoryId
const childrenByParent = categories.reduce((acc, category) => {
  if (category.parentCategoryId) {
    if (!acc[category.parentCategoryId]) {
      acc[category.parentCategoryId] = [];
    }
    acc[category.parentCategoryId].push(category);
  }
  return acc;
}, {} as Record<number, Array<{ id: number; name: string; parentCategoryId: number | null }>>);
</script>
