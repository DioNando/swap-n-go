<template>
  <div>
    <v-card class="ps-4 bg-transparent d-flex flex-column" flat>
      <TextTitle :value="'Informations du compte'" class="mb-4" />
      <v-row>
        <!-- Informations utilisateur -->
        <v-col cols="12">
          <v-text-field
            v-model="props.user.name"
            label="Nom complet"
            prepend-icon="mdi-account"
            variant="outlined"
            :rules="nameRules"
            :readonly="!isEditMode"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="props.user.email"
            label="Email"
            prepend-icon="mdi-email"
            variant="outlined"
            :rules="emailRules"
            :readonly="!isEditMode"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="props.user.phoneNumber"
            label="Numéro de téléphone"
            prepend-icon="mdi-phone"
            variant="outlined"
            :rules="phoneRules"
            :readonly="!isEditMode"
          ></v-text-field>
        </v-col>

        <!-- Mot de passe (affiché uniquement en mode édition) -->
        <v-col v-if="isEditMode">
          <v-text-field
            v-model="props.user.password"
            label="Mot de passe"
            prepend-icon="mdi-key"
            variant="outlined"
            :type="showPassword ? 'text' : 'password'"
            :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="showPassword = !showPassword"
            :rules="passwordRules"
          ></v-text-field>
        </v-col>
        <v-col v-if="isEditMode">
          <v-text-field
            v-model="props.user.passwordConfirmation"
            label="Confirmer le mot de passe"
            prepend-icon="mdi-key"
            variant="outlined"
            :type="showPassword ? 'text' : 'password'"
            :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="showPassword = !showPassword"
            :rules="passwordConfirmationRules(props.user.password || '')"
          ></v-text-field>
        </v-col>
      </v-row>

      <!-- Adresse -->
      <TextTitle :value="'Coordonnées'" class="mb-4" />
      <v-row>
        <v-col cols="12" md="5">
          <v-text-field
            v-model="props.address.street"
            label="Rue"
            prepend-icon="mdi-road"
            variant="outlined"
            :readonly="!isEditMode"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="props.address.houseNumber"
            label="Numéro de maison"
            prepend-icon="mdi-home"
            variant="outlined"
            :readonly="!isEditMode"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
            v-model="props.address.zipCode"
            label="Code postal"
            prepend-icon="mdi-map-marker"
            variant="outlined"
            :readonly="!isEditMode"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="props.address.city"
            label="Ville"
            prepend-icon="mdi-city"
            variant="outlined"
            :readonly="!isEditMode"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="props.address.country"
            label="Pays"
            prepend-icon="mdi-earth"
            variant="outlined"
            :readonly="!isEditMode"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="text-end">
          <v-btn
            flat
            append-icon="mdi-account-edit"
            color="warning"
            @click="switchEditMode"
          >
            {{ isEditMode ? "Annuler" : "Modifier" }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import type { UserInterface } from "~/interfaces/user/user.interface";
import type { AddressInterface } from "~/interfaces/user/address.interface";

const props = defineProps<{
  user: UserInterface;
  address: AddressInterface;
}>();

const showPassword = ref(false);
const isEditMode = ref(false);

// Fonction pour basculer entre lecture et édition
const switchEditMode = () => {
  isEditMode.value = !isEditMode.value;

  // Si on annule, réinitialiser les champs de mot de passe
  if (!isEditMode.value) {
    props.user.password = "";
    props.user.passwordConfirmation = "";
  }
};
</script>
