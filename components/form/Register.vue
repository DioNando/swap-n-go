<template>
  <div class="form mx-auto d-flex flex-column ga-6">
    <v-card class="pa-6 bg-transparent" flat>
      <TextTitle :value="'Créer un compte'" class="mb-3" />
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
        <v-text-field
          v-model="user.passwordConfirmation"
          label="Confirmer le mot de passe"
          prepend-icon="mdi-key"
          variant="outlined"
          :type="showPassword ? 'text' : 'password'"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="showPassword = !showPassword"
          :rules="passwordConfirmationRules(user.password || '')"
        ></v-text-field>
        <div class="d-flex justify-end ga-3">
          <v-btn
            append-icon="mdi-account-plus"
            color="primary"
            @click="register"
            >S'inscrire</v-btn
          >
        </div>
      </div>
      <v-alert
        v-if="error"
        :text="error"
        type="error"
        dismissible
        class="mt-6"
      ></v-alert>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { addUser } from "~/api/userApi";
import type {
  UserInterface,
  UserPayloadInterface,
} from "~/interfaces/user/user.interface";

const showPassword = ref(false);

// Utilisateur
const user = ref<UserInterface>({
  id: "",
  name: "",
  email: "user@example.com",
  phoneNumber: "",
  password: "password123",
  passwordConfirmation: "",
  rating: 0,
  numberOfReviews: 0,
});

const userPayload = computed<UserPayloadInterface>(() => ({
  email: user.value.email,
  password: user.value.password || "",
}));

const { authenticateUser } = useAuthStore();
const error = ref<string | null>(null);

// Fonction d'enregistrement
const register = async () => {
  try {
    const response = await addUser(user.value);
    if (response) {
      await authenticateUser(userPayload.value);
      console.log("Utilisateur enregistré avec succès");
      error.value = null;
    }
  } catch (err: any) {
    error.value =
      err?.response?.data?.message ||
      "Une erreur est survenue. Veuillez réessayer.";
  }
};
</script>
