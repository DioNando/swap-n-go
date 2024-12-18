import { type UserInterface } from "~/interfaces/user/user.interface";

interface UserPayloadInterface {
  email: string;
  password: string;
}

interface AccessTokenInterface {
  access_token: string;
  status?: string;
}

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    authenticated: false,
    loading: false,
    error: null as string | null,
    user: null as UserInterface | null,
  }),
  actions: {
    // LOGIN
    async authenticateUser(user: UserPayloadInterface) {
      const config = useRuntimeConfig();

      if (!user.email || !user.password) {
        this.error = "L'email et le mot de passe sont requis.";
        return;
      }

      try {
        this.loading = true;
        this.error = null;

        const data = await $fetch<AccessTokenInterface>(
          `${config.public.apiUrl}/login`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: {
              email: user.email,
              password: user.password,
            },
          }
        );

        if (data?.access_token) {
          const access_token = useCookie("access_token", {
            httpOnly: false,
            maxAge: 3600, // Expire après 1 heure
            secure: process.env.NODE_ENV === "production",
          });
          access_token.value = data.access_token;

          console.log("Token reçu :", data.access_token);
          this.authenticated = true;
        } else {
          this.error = "Email ou mot de passe incorrect.";
        }
      } catch (error: any) {
        if (error?.response?.status === 401) {
          this.error = "Email ou mot de passe incorrect.";
        } else {
          this.error = "Une erreur est survenue. Veuillez réessayer plus tard.";
        }
        console.error("Authentication failed:", error);
      } finally {
        this.loading = false;
      }
    },
    // LOGOUT
    async logUserOut() {
      const token = useCookie("access_token");
      const config = useRuntimeConfig();

      if (!token.value) {
        console.warn("Aucun token trouvé pour déconnexion.");
        return;
      }

      try {
        const res: any = await $fetch(`${config.public.apiUrl}/logout`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.value}`,
          },
        });

        if (res && res.message) {
          console.log(res.message); // Affiche "Successfully logged out" ou autre
        }

        // Réinitialisation de l'état utilisateur
        this.authenticated = false;
        this.user = null;
        token.value = null;

        // Redirection vers la page de connexion
        navigateTo("/login");
      } catch (error) {
        console.error("Erreur lors de la déconnexion :", error);
      }
    },
    // INITIALISATION DU STORE
    initializeStore() {
      const access_token = useCookie("access_token").value;

      if (access_token) {
        try {
          // Logique supplémentaire pour valider le token côté client si nécessaire
          console.log("Token détecté :", access_token);

          this.authenticated = true;
          // Vous pouvez ajouter un appel à l'API pour valider le token
          // Exemple : const user = await fetchUserData(access_token);
          // this.user = user;
        } catch (error) {
          console.error("Erreur lors de l'initialisation du store :", error);
          this.authenticated = false;
        }
      } else {
        console.warn("Aucun token détecté.");
        this.authenticated = false;
      }
    },
  },
});
