import axios from "axios";
import urlJoin from "url-join";
import config from "../config";

/**
 * Get all drinks
 */
export async function getDrinks() {
  const { data } = await axios.get(urlJoin(config.API_BASE_URL, "drinks"));
  return data;
}

/**
 * Get drink item from his ID
 * @param {string} id ID of the drink
 * @returns Drink item
 */
export async function getOneDrink(id) {
  const { data } = await axios.get(urlJoin(config.API_BASE_URL, "drinks", id));
  return data;
}

/**
 * Create a new drink item in database
 * @param {object} body Drink form
 */
export async function createDrink(body) {
  const { data } = await axios.post(
    urlJoin(config.API_BASE_URL, "drinks"),
    body,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return data;
}

/**
 * Replace all properties of a drink
 * @param {string} id ID of the drink we want to replace
 * @param {object} body New properties of the drink
 * @returns ID of the updated drink
 */
export async function replaceDrink(id, body) {
  const { data } = await axios.put(
    urlJoin(config.API_BASE_URL, "drinks", id),
    body,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return data;
}

/**
 * Edit some properties of a drink
 * @param {string} id ID of the drink we want to edit
 * @param {object} body Properties we want to update (other are ignored)
 * @returns ID of the updated drink
 */
export async function editDrink(id, body) {
  const { data } = await axios.patch(
    urlJoin(config.API_BASE_URL, "drinks", id),
    body,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return data;
}

/**
 * Delete a drink from his ID
 * @param {string} id ID the of the drink we want to delete
 */
export async function deleteDrink(id) {
  return axios.delete(urlJoin(config.API_BASE_URL, "drinks", id));
}

/**
 * Upload a new picture
 * @param {object} picture Image (type File) to upload
 * @returns Path of the file in backend. Can be used in Drink creation
 */
export async function uploadPicture(picture) {
  const formData = new FormData();
  formData.append("file", picture);

  const { data } = await axios.post(
    urlJoin(config.API_BASE_URL, "images"),
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data.filePath;
}
