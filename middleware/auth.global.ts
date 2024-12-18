export default defineNuxtRouteMiddleware(async (to) => {
  const { authenticated } = storeToRefs(useAuthStore()); // Reactive store state
  const { initializeStore } = useAuthStore();

  await initializeStore();

  // Redirect authenticated users from /login to /
  if (authenticated.value && to?.name === "login") {
    return navigateTo("/");
  }

  // Redirect unauthenticated users to /login
  if (!authenticated.value && to?.name !== "login") {
    abortNavigation(); // Prevent further navigation
    return navigateTo("/login");
  }
});
