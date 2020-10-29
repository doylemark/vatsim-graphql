# vatsim-graphql

GraphQL API for VATSIM. Written in TypeScript with Express & Apollo
Copyright (C) 2020  Mark Doyle

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License v2 as published by
the Free Software Foundation;

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.


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

## Developers

Clone and start dev server

```
git clone https://github.com/doylemark/vatsim-graphql && cd vatsim-graphl
npm start
```

Run Jest tests suite
```
npm run test
```
