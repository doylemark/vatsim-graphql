import { gql } from "apollo-server-express";

const metar = gql`
  type Metar {
    meta: Meta
    altimeter: Representation
    clouds: [Cloud]
    flight_rules: String
    sanitized: String
    visibility: Representation
    wind_direction: Representation
    wind_speed: Representation
    wind_gust: Representation
    wx_codes: RepresentationOmitSpoken
    raw: String
    station: String
    time: Time
    remarks: String
    dewpoint: Representation
    remarks_info: Remarks
    temperature: Representation
  }

  type Meta {
    timestamp: String
  }

  type Time {
    repr: String
      dt: String
  }

  type Remarks {
    dewpoint_decimal: Representation
    temperature_decimal: Representation
  }

  type Representation {
    repr: String
    value: String
    spoken: String
  }

  type RepresentationOmitSpoken{
    repr: String
    value: String
  }

  type  Cloud {
    repr: String
    type: String
    altitude: Int
  }
`;

export default metar;
