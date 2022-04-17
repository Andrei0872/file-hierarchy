# File hierarchy

## Getting started

After having the dependencies installed for both `client` and `server`:

1. Set up the environment variables:

```bash
cd server && cp .env.example .env
```

2. Start the `postgres` container

```bash
docker-compose -f docker-compose.yml --env-file ./server/.env up
```

3. Start the `server`

*Note: it is assumed you're in the `server` directory.*

```bash
npm run start

# Additionally, you can use the `watch` mode
npm run start -- --watch
```

4. Start the `client`

*Note: it is assumed you're in the `clint` directory.*

```bash
ng s -o
```

---

## Further improvements

* prevent a folder from having multiple child nodes with the same name
* error handling, both on the FE and the BE
* automatically focus the `input` fields as they appear(e.g. when creating/updating file nodes)
* make the UI look more decent