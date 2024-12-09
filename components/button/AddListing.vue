<template>
  <div class="text-center pa-4">
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          prepend-icon="mdi-tag-plus"
          class="text-none"
          color="secondary"
          v-bind="activatorProps"
          >Créer une annonce</v-btn
        >
      </template>

      <FormAddListing />
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    };
  },
};
</script>
