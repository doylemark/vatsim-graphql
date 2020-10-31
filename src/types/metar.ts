/*
 * Missing Following Until Types can be determined
 *  "runway_visibility": [],
 *  "wind_variable_direction": [],
 *  "other": [],
 */

export default interface Metar {
  meta: {
    timestamp: string;
  }
  altimeter: Representation;
  clouds: Cloud[];
  flight_rules: string;
  sanitized: string;
  visibility: Representation;
  wind_direction: Representation;
  wind_speed: Representation;
  wind_gust: Representation;
  wx_codes: Omit<Representation, "spoken">[];
  raw: string;
  station: string;
  time: {
    repr: string;
    dt: string;
  }
  remarks: string;
  dewpoint: Representation;
  remarks_info: {
    dewpoint_decimal: Representation;
    temperature_decimal: Representation;
  }
  temperature: Representation;
}

interface Cloud {
  repr: string;
  type: string;
  altitude: number;
  modifier: null;
  direction: null;
}

interface Representation {
  repr: string;
  value: string
  spoken: string;
}
