# Blog Post Application

## Project Description

This application uses `Firebase` to handle basic `CRUD` operations to the API. `Parcel` is being used to handle Components.

### How To Run

- `firebase serve` will spin up a local server at port `5000`that has the ability to talk to the logged in Firebase database

### How To Modify

- If any changes are made... `npm run build` will update the project's public folder to prep for deploy
- customize the database that is connected in `.firebaserc` or through running `firebase use --add` in the command line
- This database has 2 customized fields, `title` and `content`
