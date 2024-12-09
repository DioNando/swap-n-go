<template>
  <div class="categories-container">
    <div v-for="(category, index) in categories" :key="index" class="category">
      <h3 class="category__title">{{ category.title }}</h3>
      <ul class="category__list">
        <li
          v-for="(subCategory, i) in category.subCategories"
          :key="i"
          class="category__item"
        >
          <a href="#" class="category__link">{{ subCategory }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          title: "Emploi",
          subCategories: ["Offres d'emploi", "Formations professionnelles"],
        },
        {
          title: "Véhicules",
          subCategories: [
            "Voitures",
            "Motos",
            "Caravaning",
            "Utilitaires",
            "Camions",
            "Nautisme",
            "Équipement auto",
            "Équipement moto",
            "Équipement caravaning",
            "Équipement nautisme",
          ],
        },
        {
          title: "Immobilier",
          subCategories: ["Ventes immobilières", "Locations", "Colocations"],
        },
        // Ajoute d'autres catégories ici
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.categories-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
  background-color: #f8f9fa;
  color: #333;

  .category {
    &__title {
      font-weight: bold;
      text-transform: uppercase;
      font-size: 1.125rem;
      border-bottom: 2px solid #e5e7eb;
      padding-bottom: 0.5rem;
    }

    &__list {
      list-style: none;
      margin: 0;
      padding: 0;

      &__item {
        font-size: 0.875rem;

        &__link {
          color: #2563eb;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
