<template>
  <div class="form mx-auto d-flex flex-column ga-6">
    <v-card class="pa-6 bg-transparent" flat>
      <TextTitle :value="'Créer un compte'" />
      <div class="d-flex flex-column ga-3">
        <!-- Informations utilisateur -->
        <v-text-field
          v-model="user.name"
          label="Nom complet"
          prepend-icon="mdi-account"
          variant="outlined"
          :rules="nameRules"
        ></v-text-field>
        <v-text-field
          v-model="user.email"
          label="Email"
          prepend-icon="mdi-email"
          variant="outlined"
          :rules="emailRules"
        ></v-text-field>
        <v-text-field
          v-model="user.phoneNumber"
          label="Numéro de téléphone"
          prepend-icon="mdi-phone"
          variant="outlined"
          :rules="phoneRules"
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
            append-icon="mdi-account-plus"
            text="Register"
            color="primary"
            @click="register"
            :loading="loading"
            >S'inscrire</v-btn
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
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";
import { useThemeStore } from "~/stores/theme";

const themeStore = useThemeStore();

const router = useRouter();

const showPassword = ref(false);

// Validation rules
const nameRules = [(v: any) => !!v || "Le nom est requis"];
const emailRules = [
  (v: any) => !!v || "L'email est requis",
  (v: any) => /.+@.+\..+/.test(v) || "L'email doit être valide",
];
const phoneRules = [(v: any) => !!v || "Le numéro de téléphone est requis"];
const passwordRules = [
  (v: any) => !!v || "Le mot de passe est requis",
  (v: any) =>
    v.length >= 6 || "Le mot de passe doit comporter au moins 6 caractères",
];

// const { registerUser } = useAuthStore(); // Fonction pour enregistrer un utilisateur
const { authenticated, loading, error } = storeToRefs(useAuthStore());

// Utilisateur et adresse
const user = ref({
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
});

// Fonction d'enregistrement
const register = async () => {
  const payload = {
    user: user.value,
  };
  // await registerUser(payload);
  if (authenticated.value) {
    router.push("/dashboard"); // Redirection après inscription réussie
  }
};
</script>
