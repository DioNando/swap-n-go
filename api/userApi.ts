import type { AddressInterface } from "~/interfaces/user/address.interface";
import type { UserInterface } from "~/interfaces/user/user.interface";

interface UserWithAddressInterface {
  user: UserInterface;
  address: AddressInterface;
}

export const getUsers = async (page: number = 1): Promise<UserInterface> => {
  try {
    const config = useRuntimeConfig();
    const access_token = useCookie("access_token");

    const response = await $fetch<UserInterface>(
      `${config.public.apiUrl}/users`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token.value}`,
        },
      }
    );

    return response as UserInterface;
  } catch (err) {
    console.error("Erreur lors de la requête.", err);
    throw err;
  }
};

export const getUser = async (id: string): Promise<UserWithAddressInterface> => {
  try {
    const config = useRuntimeConfig();
    const access_token = useCookie("access_token");

    const response = await $fetch<UserWithAddressInterface>(
      `${config.public.apiUrl}/users/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token.value}`,
        },
      }
    );

    return response;
  } catch (err) {
    console.error("Erreur lors de la requête.", err);
    throw err;
  }
};

export const addUser = async (data: UserInterface): Promise<UserInterface> => {
  try {
    const config = useRuntimeConfig();
    const access_token = useCookie("access_token");

    const response = await $fetch<UserInterface>(
      `${config.public.apiUrl}/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token.value}`,
        },
        body: {
          name: data.name,
          email: data.email,
          password: data.password,
          phoneNumber: data.phoneNumber,
        },
      }
    );

    return response as UserInterface;
  } catch (err) {
    console.error("Erreur lors de la requête.", err);
    throw err;
  }
};

export const editUser = async (data: UserInterface): Promise<UserInterface> => {
  try {
    const config = useRuntimeConfig();
    const access_token = useCookie("access_token");

    const response = await $fetch<any>(
      `${config.public.apiUrl}/users/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token.value}`,
        },
        body: {
          name: data.name,
          email: data.email,
          password: data.password,
          phoneNumber: data.phoneNumber,
        },
      }
    );

    return response.data as UserInterface;
  } catch (err) {
    console.error("Erreur lors de la requête.", err);
    throw err;
  }
};

export const deleteUser = async (id: number): Promise<UserInterface> => {
  try {
    const config = useRuntimeConfig();
    const access_token = useCookie("access_token");

    const response = await $fetch<any>(
      `${config.public.apiUrl}/users/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token.value}`,
        },
      }
    );

    return response.data as UserInterface;
  } catch (err) {
    console.error("Erreur lors de la requête.", err);
    throw err;
  }
};
