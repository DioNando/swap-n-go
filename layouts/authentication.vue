<template>
  <v-app id="app">
    <v-app-bar
      app
      :elevation="3"
      class="d-flex align-center justify-end"
    >
    <img src="/assets/img/swap_1.svg" class="nav__logo" />
    <v-spacer></v-spacer>
      <ButtonTheme class="mr-4" />
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
.nav__logo {
  width: 15rem;
}

body {
  overflow: auto; /* Maintient le défilement */
  scrollbar-width: none;  /* Masque la scrollbar pour Firefox */
  -ms-overflow-style: none; /* Masque la scrollbar pour Internet Explorer et Edge Legacy */
}

body::-webkit-scrollbar {
  display: none; /* Masque la scrollbar pour Chrome, Safari et les navigateurs basés sur WebKit */
}
</style>
