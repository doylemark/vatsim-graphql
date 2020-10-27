# vatsim-hermes

Hermes is a GraphQL API for VATSIM. Clone and `npm run dev` to open start the server and GraphQL playground to see available schema.

Example query:

```gql
query {
  airport(icao: "EIDW") {
    lat
    lon
    iata
  }
  pilots {
    name
    callsign
    flight_plan {
      aircraft
      route
    }
  }
}
```
