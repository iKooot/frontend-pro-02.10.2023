import axios from "axios";

const axiosConfig = (signal) =>
  axios.create({
    baseURL: "https://reqres.in/api/",
    signal: signal,
    headers: {
      "Content-Type": "application/json",
    },
  });

const genericRequest = async ({ requestType, url, data, signal }) => {
  try {
    const httpClient = axiosConfig(signal);
    const response = await httpClient[requestType](url, data);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(error.response);
    } else {
      throw new Error("UnknownError");
    }
  }
};

export async function get(url, signal) {
  return genericRequest({ requestType: "get", url, signal });
}

export async function post(url, data, signal) {
  return genericRequest({ requestType: "post", url, signal, data });
}
