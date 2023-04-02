# my-cellar

An application to manage my wine / whiskies cellar.

## Development

### Prerequis

To launch mobile application (front), you need to have `@ionic/cli` package.

```bash
npm i -g @ionic/cli
```

### Start project

**To launch backend part :**

```bash
./start.sh
```

**To launch mobile application :**

```bash
cd ./front && npm run dev
```

### Stop project

```bash
./stop.sh
```

That will stop backend and database.

## To do

### Backend part

- Adapt routes to allow user to add picture on bottle entries
- Add filter about query parameters
- Create an ORM
- Add unit tests (mongo memory server)
- Add authentication

### Frontend part

- Add Prettier
- Create some Wireframes of the application
- Define colors and theme for the application
- Add Icons on the application
- Add splashscreen
- Try to build the application on mobile device

## Deploy

- Clone repository on Raspberry
- Build Docker image
- Launch docker-compose
