import axios from "axios";

const axiosConf = (signal = {}) =>
  axios.create({
    baseURL: "https://reqres.in/api/",
    signal: signal,
    headers: {
      "Content-Type": "application/json",
    },
  });

const genericRequest = async ({
  requestType,
  url,
  data,
  signal,
  params = {},
}) => {
  try {
    const httpClient = axiosConf(signal);
    const response = await httpClient[requestType](url, data, params);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(error.response);
      return {
        message: error.response.data.error,
        status: error.response.status,
      };
    } else {
      throw new Error("UnknownError");
    }
  }
};

export async function post({ url, data, signal }) {
  return genericRequest({ requestType: "post", url, data, signal });
}

export async function get({ url, signal }) {
  return genericRequest({ requestType: "get", url, signal });
}
