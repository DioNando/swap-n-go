<template>
  <div class="pa-6">
    <v-form>
      <v-row>
        <!-- Title -->
        <v-col cols="12">
          <v-text-field 
            v-model="listing.title" 
            :rules="[rules.required, rules.maxLength(100)]" 
            label="Titre" 
            required
            variant="outlined"
          ></v-text-field>
        </v-col>

        <!-- Description -->
        <v-col cols="12">
          <v-textarea 
            v-model="listing.description" 
            :rules="[rules.required, rules.maxLength(500)]" 
            label="Description"
            variant="outlined"
          ></v-textarea>
        </v-col>

        <!-- Category -->
        <v-col cols="12">
          <v-select 
            v-model="listing.category" 
            :items="categories" 
            :rules="[rules.required]" 
            label="Catégorie"
            variant="outlined"
          ></v-select>
        </v-col>

        <!-- Price -->
        <v-col cols="12">
          <v-text-field 
            v-model="listing.price" 
            :rules="[rules.required, rules.positiveNumber]" 
            label="Prix" 
            required
            variant="outlined" 
            type="number"
          ></v-text-field>
        </v-col>

        <!-- Is Exchangeable -->
        <v-col cols="12">
          <v-switch 
            v-model="listing.isExchangeable" 
            label="Échangeable"
          ></v-switch>
        </v-col>

        <!-- Location -->
        <v-col cols="12">
          <v-text-field 
            v-model="listing.location" 
            :rules="[rules.required]" 
            label="Localisation"
            variant="outlined"
          ></v-text-field>
        </v-col>

        <!-- Condition -->
        <v-col cols="12">
          <v-select 
            v-model="listing.condition" 
            :items="['NEW', 'USED']" 
            :rules="[rules.required]" 
            label="État"
            variant="outlined"
          ></v-select>
        </v-col>

        <!-- Status -->
        <v-col cols="12">
          <v-select 
            v-model="listing.status" 
            :items="['ACTIVE', 'SOLD', 'REMOVED']" 
            :rules="[rules.required]" 
            label="Statut"
            variant="outlined"
          ></v-select>
        </v-col>

        <!-- Images -->
        <v-col cols="12">
          <v-file-input
            multiple
            prepend-icon="mdi-image"
            label="Images"
            variant="outlined"
            @change="handleFileChange"
            :clearable="false"
          >
            <template v-slot:selection="{ fileNames }">
              <template v-for="fileName in fileNames" :key="fileName">
                <v-chip class="me-1" color="primary" size="small" label>
                  {{ fileName }}
                </v-chip>
              </template>
            </template>
          </v-file-input>
        </v-col>

        <!-- Image Previews -->
        <v-col v-if="previews.length" cols="12" class="preview--container">
          <img
            v-for="(preview, index) in previews"
            :key="index"
            :src="preview"
            class="preview--image"
          />
        </v-col>

        <!-- Buttons -->
        <v-col>
          <div class="d-flex flex-column flex-lg-row justify-end ga-3">
            <v-btn class="" variant="flat" @click="resetValidation">
              Effacer
            </v-btn>
            <v-btn class="" color="primary" append-icon="mdi-archive" @click="addListing">
              Ajouter
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ListingInterface, ListingImgInterface } from "~/interfaces/listing/listing.interface";
import categories from "~/data/categories.json";

const listing = ref<ListingInterface>({
  id: "",
  userId: "",
  title: "",
  description: "",
  category: "",
  price: 0,
  isExchangeable: false,
  location: "",
  condition: "NEW",
  status: "ACTIVE",
  createdAt: undefined,
  updatedAt: undefined,
});

const previews = ref<string[]>([]);

const rules = {
  required: (v: any) => !!v || "Ce champ est requis",
  maxLength: (length: number) => (v: string) => !v || v.length <= length || `Maximum ${length} caractères`,
  positiveNumber: (v: number) => v > 0 || "Le nombre doit être positif",
};

const resetValidation = () => {
  previews.value = [];
  listing.value = {
    id: "",
    userId: "",
    title: "",
    description: "",
    category: "",
    price: 0,
    isExchangeable: false,
    location: "",
    condition: "NEW",
    status: "ACTIVE",
    createdAt: undefined,
    updatedAt: undefined,
  };
};

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (!input.files) return;

  previews.value = [];
  for (let i = 0; i < input.files.length; i++) {
    const file = input.files[i];
    const reader = new FileReader();

    reader.onload = (e) => {
      const result = e.target?.result as string;
      previews.value.push(result);
    };

    reader.readAsDataURL(file);
  }
};

const addListing = () => {
  console.log("Listing ajouté :", listing.value);
};
</script>

<style lang="scss" scoped>
.preview--container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  .preview--image {
    width: 10rem;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    flex: auto;
    border-radius: 0.5rem;
    background-color: white;
  }
}
</style>
