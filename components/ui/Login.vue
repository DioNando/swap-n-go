<template>
  <section>
    <div class="cards">
      <CardLogin
        v-for="(item, index) in selectedPhotos"
        :key="index"
        :data="item"
        class="card__element"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import photos from "~/data/photos.json";

const store_elements = useElementStore();

const selectedPhotos = store_elements.getRandomElements(photos, photos.length);

import anime from "animejs";
const { $anime } = useNuxtApp();

onMounted(() => {
  $anime({
    targets: ".card__element",
    opacity: [0, 1],
    // translateY: [200, 0],
    delay: anime.stagger(1000, { easing: "easeOutQuad", from: "first" }),
  });
});
</script>

<style lang="scss" scoped>
section {
  @extend %section-accueil;
}

.cards {
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  overflow-y: hidden;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  .card__element {
    scroll-snap-align: center;
  }

  @media only screen and (min-width: 600px) {
    display: block;
    columns: 3;
    column-gap: 1.25rem;
    break-inside: avoid;

    @media only screen and (min-width: 1200px) {
      columns: 4;
    }

    .card__element {
      margin-bottom: 1rem;
      // transform: translateY(-270);
      opacity: 0;
    }
  }
}

// .cards {
//     columns: 2;
//     column-gap: 1rem;
//     break-inside: avoid;

//     @media only screen and (min-width: 600px) {
//         columns: 3;
//     }

//     @media only screen and (min-width: 1200px) {
//         columns: 4;
//     }

//     .card__element {
//         margin-bottom: 1rem;
//     }
// }
</style>
