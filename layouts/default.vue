<template>
  <v-app id="app">
    <v-navigation-drawer
      v-if="isMobile"
      v-model="drawer"
      :width="400"
      :mobile="true"
    >
      <!-- Contenu du drawer -->
      <div class="drawer__content">
        <div class="d-flex align-center justify-space-between pa-4">
          <!-- Bouton pour fermer le drawer -->
          <img src="/assets/img/swap_1.svg" class="nav__menu" />
          <v-btn
            @click="drawer = false"
            variant="flat"
            icon="mdi-close"
            class="drawer__btn--close"
          ></v-btn>
        </div>
        <NavbarSideBar />
      </div>
    </v-navigation-drawer>
    <div v-if="isMobile" class="navigation__mobile">
      <div class="pa-4">
        <div class="d-flex align-center justify-center mb-4">
          <v-btn
            @click="drawer = !drawer"
            variant="flat"
            icon="mdi-menu"
            class="drawer__btn--open ms-4"
          ></v-btn>
          <NuxtLink to="/" class="d-flex align-center justify-end">
            <img src="/assets/img/swap_1.svg" class="nav__logo" />
          </NuxtLink>
        </div>
        <FormSearchListing class="flex-1-1" />
      </div>
    </div>
    <TheHeader v-else class="navigation__desktop" />
    <v-main class="pt-6">
      <slot />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";

const drawer = ref(false);

// Utilisation du service Vuetify pour détecter la taille de l'écran
const { mdAndDown } = useDisplay(); // `mdAndDown` est vrai pour les écrans de taille "medium" et inférieure

const isMobile = mdAndDown;
</script>

<style lang="scss" scoped>
.nav__logo {
  width: 15rem;
}

.nav__menu {
  width: 10rem;
}

.navigation__mobile {
  position: relative;

  .drawer__btn--open {
    position: absolute;
    left: 0;
  }
}
</style>
