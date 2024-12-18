<template>
  <v-card class="pa-6">
    <div class="text-h5 mb-4">
        Retrouver son mot de passe
    </div>
    <v-row>
      <v-col cols="12">
        <v-text-field
          label="Email"
          prepend-icon="mdi-email"
          required
          variant="outlined"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn color="secondary" text="Reinitialiser"></v-btn>
  </v-card>
</template>
