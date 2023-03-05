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

- CRUD to manage cellar
  - GET /bottles?category='wine' (Get all bottles, with query parameter to filter)
  - GET /bottles/:id (Get one bottle only)
  - POST /bottles (To create a new bottle)
  - PUT /bottles/:id (To edit a bottle)
  - DELETE /bottles/:id (To delete a bottle)
- Add the files storage (pictures of bottles)
- Adapt routes to allow user to add picture on bottle entries
- Add linter and formater

### Frontend part

- Add Prettier
- Create some Wireframes of the application
- Define colors and theme for the application
- Add Icons on the application
- Add splashscreen
- Try to build the application on mobile device
