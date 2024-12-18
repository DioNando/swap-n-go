export default defineNuxtRouteMiddleware(async (to) => {
  const { authenticated } = storeToRefs(useAuthStore()); // Reactive store state
  const token = useCookie('access_token'); // Get token from cookies

  if (token.value) {
    // Verify token validity (optional)
    try {
      const config = useRuntimeConfig();
      await $fetch(`${config.public.apiUrl}/verify-token`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });
      authenticated.value = true; // Token is valid
    } catch (error) {
      console.error('Invalid token:', error);
      authenticated.value = false;
      token.value = null;
      return navigateTo('/login');
    }
  }

  // Redirect authenticated users from /login to /
  if (authenticated.value && to?.name === 'login') {
    return navigateTo('/');
  }

  // Redirect unauthenticated users to /login
  if (!authenticated.value && to?.name !== 'login') {
    abortNavigation(); // Prevent further navigation
    return navigateTo('/login');
  }
});
