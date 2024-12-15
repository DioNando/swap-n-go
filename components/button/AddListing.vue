<template>
  <div class="text-center pa-4">
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" :persistent="true">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          prepend-icon="mdi-tag-plus"
          class="text-none"
          color="secondary"
          v-bind="activatorProps"
          >Créer une annonce</v-btn
        >
      </template>

      <v-card>
        <v-toolbar color="secondary">
          <v-btn icon="mdi-close" @click="dialog = false"></v-btn>

          <v-toolbar-title>Settings</v-toolbar-title>
        </v-toolbar>
        <FormAddListing />
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup lang="ts">
const dialog = ref(false);
const notifications = ref(false);
const sound = ref(true);
const widgets = ref(false);
</script>
