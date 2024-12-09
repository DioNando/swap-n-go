<template>
  <div>
    <p class="text" :class="themeStore.isDark ? 'dark' : 'light'">
      {{ props.value }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: string;
}>();

const themeStore = useThemeStore();
</script>

<style lang="scss" scoped>
.text {
  font-family: "Ubuntu", sans-serif;
  font-size: clamp(1rem, 7vw, 2rem);
  font-weight: 900;
  background-size: 100%;
  background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

.light {
  background-image: linear-gradient(
    45deg,
    $secondary,
    $primary,
    $primary,
    $primary
  );
}

.dark {
  background-image: linear-gradient(
    45deg,
    $primary,
    $secondary,
    $secondary,
    $secondary
  );
}
</style>
