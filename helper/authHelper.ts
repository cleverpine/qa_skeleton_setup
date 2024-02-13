import axios, { AxiosResponse } from "axios";
import dotenv from "dotenv";

dotenv.config({ path: "./.env.default" });

export async function getAccessToken(): Promise<string> {
  const tokenEndpoint = process.env.KC_TOKEN_URL;
  const grantType = process.env.KC_GRANT_TYPE;
  const clientId = process.env.KC_CLIENT_ID;
  const clientSecret = process.env.KC_CLIENT_SECRET;
  const username = process.env.KC_USER;
  const password = process.env.KC_PASSWORD;
  
  // Check if any environment variable is undefined.
  if (!tokenEndpoint || !grantType || !clientId || !clientSecret || !username || !password) {
    console.error("One or more environment variables are missing.");
    return "";
  }
  const formData = new URLSearchParams({
    grant_type: grantType,
    client_id: clientId,
    client_secret: clientSecret,
    username: username,
    password: password
  });

  try {
    const response: AxiosResponse<{ access_token: string }> = await axios.post(
      tokenEndpoint,
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data.access_token;
  } catch (error: any) {
    console.log("Error obtaining access token ");
    throw error;
  }
}
