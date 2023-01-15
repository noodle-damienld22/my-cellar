# my-cellar

my application to manage my wine cellar

## To do

- [BACK] Dockerize the backend
- [BACK] Create a docker-compose and "start.sh" and stop.sh" which includes the back and a database (MongoDB)
- [BACK] CRUD to manage cellar
  - GET /bottles?category='wine' (Get all bottles, with query parameter to filter)
  - GET /bottles/:id (Get one bottle only)
  - POST /bottles (To create a new bottle)
  - PUT /bottles/:id (To edit a bottle)
  - DELETE /bottles/:id (To delete a bottle)
- [BACK] Add linter and formater
