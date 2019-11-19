import axios from "axios";

export async function getMember() {
  try {
    const uri = process.env.INFOIMAGE_PD_BACKEND_URI || "http://localhost:8080";
    const response = await axios.get(`${uri}/members`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
