<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <CardUserProfile :user="user" />
      </v-col>
      <v-col class="ps-0 ps-md-6">
        <FormRegisterAdresse :user="user" :address="address" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import type { UserInterface } from "~/interfaces/user/user.interface";
import { getUser } from "~/api/userApi";

const userId = useRoute().params.userId as string;

// Utilisateur
const user = ref<UserInterface>({
  id: "",
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
  rating: 0,
  numberOfReviews: 0,
});
// Adrresse
const address = ref({
  id: "",
  userId: "",
  houseNumber: "",
  street: "",
  zipCode: "",
  city: "",
  country: "",
});

const fetchUserData = async (userId: string) => {
  try {
    const data = await getUser(userId);
    user.value = data.user;
    address.value = data.address;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
};

onMounted(() => fetchUserData(userId));
</script>
