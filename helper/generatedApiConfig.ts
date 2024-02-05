import { Configuration } from "../openapi/runtime";
import { getAccessToken } from "./authHelper";
export async function intitializeConfiguration(): Promise<Configuration> {
  const accessToken = await getAccessToken();
  return new Configuration({
    basePath: process.env.API_BASE,
    accessToken: accessToken,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
