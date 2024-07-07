import axios from "axios";

export const getProfile = async (profile: any) => {
  try {
    const response = await axios.get("getProfile");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
