<template>
  <div class="d-flex flex-column ga-6">
    <v-card class="pa-6 bg-transparent" flat>
      <TextTitle :title="'Connectez-vous ou créez votre compte'" />
      <div class="d-flex flex-column ga-3">
        <v-text-field
          v-model="user.email"
          label="Email"
          prepend-icon="mdi-account"
          variant="outlined"
          :rules="emailRules"
        ></v-text-field>
        <v-text-field
          v-model="user.password"
          label="Mot de passe"
          prepend-icon="mdi-key"
          variant="outlined"
          :type="showPassword ? 'text' : 'password'"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="showPassword = !showPassword"
          :rules="passwordRules"
        ></v-text-field>
        <div class="d-flex justify-end ga-3">
          <v-btn
            append-icon="mdi-login"
            text="Sign In"
            color="primary"
            @click="login"
            :loading="loading"
            >Se connecter</v-btn
          >
        </div>
      </div>
      <v-alert v-if="error" :text="error" type="error" dismissible class="mt-6"></v-alert>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const themeStore = useThemeStore();

const router = useRouter();
const showPassword = ref(false);

const emailRules = [
  (v: any) => !!v || "L'email est requis",
  (v: any) => /.+@.+\..+/.test(v) || "L'email doit être valide",
];

const passwordRules = [
  (v: any) => !!v || "Le mot de passe est requis",
  (v: any) =>
    v.length >= 6 || "Le mot de passe doit comporter au moins 6 caractères",
];

import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/stores/auth"; // import the auth store we just created

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated, loading, error } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
  email: "admin@project.net",
  password: "password",
});

const login = async () => {
  await authenticateUser(user.value);
  if (authenticated) {
    router.push("/");
  }
};
</script>
