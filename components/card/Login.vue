<template>
  <div class="card" :class="theme.isDark ? 'dark' : 'light'">
    <!-- <div class="card__header d-none d-sm-block"> -->
    <div class="card__header">
      <NuxtImg :src="props.data.source" />
    </div>
  </div>
</template>

<script setup lang="ts">
const theme = useThemeStore();

const props = defineProps<{
  data: any;
}>();
</script>

<style lang="scss" scoped>
.light {
  background-color: color.adjust($light, $lightness: -5%);

  &:hover {
    background-color: color.adjust($light, $lightness: -10%);
  }
}

.dark {
  background-image: linear-gradient(-45deg, $dark, $surface);

  &:hover {
    background-color: color.adjust($surface, $lightness: 10%);
  }
}

.card {
  flex: 1;
  min-width: 80%;
  overflow: hidden;
  border-radius: 0.25rem;
  height: auto;
  // padding: 0.25rem;
  transition: 1s ease-in-out;

  display: flex;
  flex-direction: column;

  &:hover {
    min-width: 100%;
  }

  .card__header {
    height: 30vh;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      display: block;
    }
  }

  .card__content {
    padding: 0.5rem;

    .card__title {
      font-size: small;
      // font-weight: bold;
      // color: $secondary;
      @include paragraph-overflow-hidden(1);
    }

    .card__subtitle {
      font-size: small;
      margin-bottom: 0.5rem;
    }

    .card__description {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
  }

  @media only screen and (min-width: 600px) {
    .card__header {
      height: auto;
    }
  }
}
</style>
