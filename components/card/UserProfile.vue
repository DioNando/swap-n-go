<template>
  <v-card flat class="bg-transparent">
    <div class="profil d-flex flex-column ga-4 align-end justify-center">
      <div v-if="props.user.profilePictureUrl" class="profile__img">
        <img src="/assets/img/landscape.png" />
      </div>
      <div v-else class="profile__initial">
        <img src="/assets/img/landscape.png" />
        <div class="initial__text">
          {{ getNameInitials(props.user.name) }}
        </div>
      </div>
      <div class="text-right d-flex flex-column ga-3 align-end">
        <p class="text-h4 font-weight-medium">{{ props.user.name }}</p>
        <p class="text-h5 text-grey">{{ props.user.email }}</p>
        <p class="text-h5">{{ props.user.phoneNumber }}</p>
        <v-rating
          readonly
          half-increments
          :length="5"
          :size="32"
          :model-value="props.user.rating"
          active-color="secondary"
        />
        <p class="text-h5">{{ props.user.numberOfReviews }}</p>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts" setup>
import type { UserInterface } from "~/interfaces/user/user.interface";

const props = defineProps<{
  user: UserInterface;
}>();
</script>

<style lang="scss" scoped>
.profile__img, .profile__initial {
  position: relative;
  height: 12rem;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 50%;
    object-fit: cover;
    height: 100%;
  }
}

.initial__text {
    position: absolute;
    font-weight: 500;
    font-size: 5rem;
    color: $light;
  }
</style>
