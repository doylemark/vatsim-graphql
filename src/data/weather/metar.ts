import fetch from "node-fetch";

import Metar from "../../types/metar";

const getMetar = async (icao: string): Promise<Metar | null> => {
  const response = await fetch(`https://avwx.rest/api/metar/${icao}`, {
    headers: {
      Authorization: process.env.AVWX_TOKEN || "",
    },
  });

  if (!response.ok) {
    return null;
  }

  const data: Metar = await response.json();
  return data;
};

export default getMetar;
