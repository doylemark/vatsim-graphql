# vatsim-hermes

Hermes is a GraphQL API for VATSIM. Clone and `npm run dev` to open start the server and GraphQL playground to see available schema.

Example query:

```gql
query {
    pilots {
      name
      callsign
      flight_plan {
        aircraft
        route
        departureAirport {
          icao
          lat
          lon
        }
        arrivalAirport {
          icao
          lat
          lon
        }
      }
    }
  }
```
