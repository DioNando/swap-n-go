<template>
  <div class="d-flex justify-space-between text-center">
    <v-btn
      v-for="category in parentCategories"
      :key="category.id"
      :ripple="false"
      class="text-none"
      flat
      variant="text"
      rounded
    >
      {{ category.name }}
      <v-menu
        activator="parent"
        location="bottom center"
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
</template>

<script setup lang="ts">
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
