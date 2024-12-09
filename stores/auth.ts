import {
    type UserInterface,
    type UserWithTokenInterface,
  } from "~/interfaces/user/user.interface";
  
  import { destr, safeDestr } from "destr";
  
  interface UserPayloadInterface {
    email: string;
    password: string;
  }
  
  export const useAuthStore = defineStore("authStore", {
    state: () => ({
      authenticated: false,
      loading: false,
      error: null as string | null,
      user: null as UserInterface | null,
    }),
    actions: {
      async authenticateUser({ email, password }: UserPayloadInterface) {
        const config = useRuntimeConfig();
        try {
          this.loading = true;
          this.error = null;
          const data = await $fetch<UserWithTokenInterface>(
            `${config.public.apiUrl}/login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: {
                email,
                password,
              },
            }
          );
  
          if (data && data.token) {
            const token = useCookie("token");
            token.value = data.token;
  
            const userCookie = useCookie("user");
            userCookie.value = JSON.stringify(data.user);
  
            this.user = data.user;
            this.authenticated = true;
          } else {
            this.error = "Email or Password incorrect"; // Set error message
          }
        } catch (error) {
          this.error = "Something's wrong, email or password incorrect";
          console.error("Authentication failed:", error);
        } finally {
          this.loading = false;
        }
      },
      async logUserOut() {
        const token = useCookie("token");
        const userCookie = useCookie("user");
        const config = useRuntimeConfig();
  
        try {
          const res: any = await $fetch(`${config.public.apiUrl}/logout`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token.value}`,
            },
          });
  
          if (res) {
            this.authenticated = false;
            this.user = null;
            token.value = null;
            userCookie.value = null;
            navigateTo("/login");
          }
        } catch (error) {
          console.error("Erreur lors de la deconnexion.", error);
        }
      },
      initializeStore() {
        const token = useCookie("token").value;
        const userCookie = useCookie("user").value;
  
        if (token && userCookie) {
          try {
            this.user = destr(userCookie);
            this.authenticated = true;
          } catch (e) {
            console.error("Error parsing user cookie:", e);
            this.user = null;
            this.authenticated = false;
          }
        }
      },
    },
  });
  