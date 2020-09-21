import fetch from "node-fetch";

import Auth from "../types/auth";

const fetchToken = async () => {
  const ID = process.env.TWITCH_CLIENT_ID;
  const SECRET = process.env.TWITCH_CLIENT_SECRET;
  const URL = `https://id.twitch.tv/oauth2/token?client_id=${ID}&client_secret=${SECRET}&grant_type=client_credentials`;

  const response = await fetch(URL, { method: "POST" });

  const data: Auth = await response.json();

  process.env.TWITCH_ACCESS_TOKEN = data.access_token;
  process.env.TWITCH_ACCESS_TOKEN_EXPIRY = data.expires_in.toString();

  return data.access_token;
};

export const isExpired = () => {
  const expiryIn = process.env.TWITCH_ACCESS_TOKEN_EXPIRY;
  const expiryDate = new Date(Date.now()).setSeconds(Number(expiryIn));
  return new Date(expiryDate) < new Date(Date.now());
};

export default fetchToken;
