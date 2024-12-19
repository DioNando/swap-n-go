<template>
  <div class="cta">
    <img src="/assets/img/landscape.png" alt="Illustration de vente" class="cta__image" />
    <div class="cta__content">
      <div class="cta__text text-white">
        C'est le moment de vendre
      </div>
      <ButtonAddListing />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cta {
  position: relative;
  height: 15rem;

  &__image {
    border-radius: 0.5rem;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  &__text {
    font-size: 2.5rem; /* Ajuste la taille selon la typographie globale */
    font-weight: 500;
  }
}
</style>
