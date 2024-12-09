<template>
  <div class="login d-flex">
    <div class="d-flex align-center justify-center flex-column">
      <div class="form-container">
        <!-- <v-btn
          class="text-none"
          variant="text"
          :ripple="false"
          color="primary"
          @click="toggleForm"
        >
          {{
            showRegister
              ? "Vous avez déjà un compte ? Connectez-vous"
              : "Pas encore inscrit ? Créez un compte"
          }}
        </v-btn> -->
        <v-btn
          v-if="!showRegister"
          class="text-none ms-2"
          variant="text"
          :ripple="false"
          @click="toggleForm"
        >
          Pas encore inscrit ? Créez un compte
        </v-btn>
        <v-btn v-else @click="toggleForm" flat variant="text" :ripple="false" prepend-icon="mdi-chevron-left" class="text-none ms-2">Se connecter </v-btn>
        <FormLogin v-if="!showRegister" />
        <FormRegister v-else />
      </div>
    </div>
    <div class="px-5">
      <UiAside />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Variable pour gérer l'état du formulaire affiché
const showRegister = ref(false);

// Fonction pour basculer entre login et register
const toggleForm = () => {
  showRegister.value = !showRegister.value;
};

definePageMeta({
  layout: "authentication",
});
</script>

<style lang="scss" scoped>
.login {
  // height: 100%;
  // overflow: hidden;

  div {
    flex: 1;
  }
}

.form-container {
  width: 100%;
  max-width: 528px;
  margin-top: 5rem;
}
</style>
