import fetch from "node-fetch";
import * as sentry from "@sentry/node";

import Stream from "../../types/stream";

import fetchToken, { isExpired } from "./auth";

interface TwitchResponse {
  data: Stream[]
}

const getStreams = async () => {
  let token = process.env.TWITCH_ACCESS_TOKEN;
  if (!token || isExpired()) {
    token = await fetchToken();
  }

  try {
    const response = await fetch(
      "https://api.twitch.tv/helix/streams?game_id=7193&first=5",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Client-Id": process.env.TWITCH_CLIENT_ID || "",
        },
      },
    );

    const { data }: TwitchResponse = await response.json();
    return data;
  } catch (error) {
    sentry.captureException(error);
  }
  return [];
};

export default getStreams;
