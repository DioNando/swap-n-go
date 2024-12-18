import type {
  ListingInterface,
  ListingImgInterface,
} from "~/interfaces/listing/listing.interface";

export const getListings = async (): Promise<ListingInterface> => {
  try {
    const config = useRuntimeConfig();
    const token = useCookie("token");

    const response = await $fetch<ListingInterface>(
      `${config.public.apiUrl}/listings`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
      }
    );

    return response as ListingInterface;
  } catch (err) {
    console.error("Erreur lors de la requête.", err);
    throw err;
  }
};

export const getListing = async (id: number): Promise<ListingInterface> => {
  try {
    const config = useRuntimeConfig();
    const token = useCookie("token");

    const response = await $fetch<any>(
      `${config.public.apiUrl}/listings/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
      }
    );

    return response.data as ListingInterface;
  } catch (err) {
    console.error("Erreur lors de la requête.", err);
    throw err;
  }
};

export const addListing = async (
  data: ListingInterface,
): Promise<ListingInterface> => {
  try {
    const config = useRuntimeConfig();
    const token = useCookie("token");

    const response = await $fetch<any>(`${config.public.apiUrl}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
      body: {
        description: data.description,
        // Attributs listing
      },
    });

    return response.data as ListingInterface;
  } catch (err) {
    console.error("Erreur lors de la requête.", err);
    throw err;
  }
};

export const editListing = async (
  data: ListingInterface,
): Promise<ListingInterface> => {
  try {
    const config = useRuntimeConfig();
    const token = useCookie("token");

    const response = await $fetch<any>(
      `${config.public.apiUrl}/listings/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          description: data.description,
          // Attributs listing
        },
      }
    );

    return response.data as ListingInterface;
  } catch (err) {
    console.error("Erreur lors de la requête.", err);
    throw err;
  }
};

export const deleteListing = async (id: number): Promise<ListingInterface> => {
  try {
    const config = useRuntimeConfig();
    const token = useCookie("token");

    const response = await $fetch<any>(
      `${config.public.apiUrl}/listings/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
      }
    );

    return response.data as ListingInterface;
  } catch (err) {
    console.error("Erreur lors de la requête.", err);
    throw err;
  }
};
