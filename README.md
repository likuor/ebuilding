<!-- GETTING STARTED -->
## Getting Started

I'll send you my environmental variables for mongoDB and Strapi through email in case if you don't have them due to considering the security.

### Backend setup
1. Please make .env file at the root back directory and paste the environmental variable of Strapi at it.

* npm
  ```sh
  cd back
  npm install
  npm run develop
  ```
2. Automatically Strapi will show up using localhost://1337   
3. Register your info on Strapi admin page.  
4. Please add at least one record comes with required data such as name, description, price, and image at House filed at Content Manager. After that, please save and publish it.    
5. Go to Settings > USERS & PERMISSIONS PLUGIN > Roles > Public > please check find, findOne at House Permission and save.    

### Frontend setup
At the root front directory, please add the environmental variable of MongoDB at it.

* npm
  ```sh
  cd front
  npm install
  npm run dev
  ```
You can see this project at your local. Thank you for reading and have a fun!
