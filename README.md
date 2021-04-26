


 **Sommsips**: Through the use of this app users will have the ability to save tasting notes on on specific wines that they have tasted to the database. They will be able to add picures of the label to the database as well. In addition to saving their own tasting notes to the database so that they can review them later they will be able to update their own current notes, and delete thier notes. All of this information will be rendered via the front end on specific pages depending on what functionality they are trying to us at the moment. The app will access this database via user, wine, and tasting notes  rails tables. The app will be styled using flexbox and grid .


<br>

## MVP
### Planning
- _Have a thoroughly developed README.md file._

### Server (Back End)
- _Have a RESTful JSON API._
- _Build a database with at least 3 tables_
- _Utilize Rails to define models for interacting with the database._
- _Implement working generic controller actions for Full CRUD (index, show, create, update, delete) between your non-User tables_

### Client (Front End)
- _Have a working, interactive React app, built using npx create-react-app._
- _Have at least 8 separate, rendered components in an organized and understandable React file structure._
- _Utilize functional or class React components appropriately._
- _Utilize state and props in components efficiently._
- _Use only React for DOM Manipulation._
- _Consume data from Ruby on Rails API, and render that data in components._
- _Utilize React Router, for client-side routing._
- _Demonstrate Full CRUD actions ( index, show, create, update, and delete ) on the front end._

### Styling
- _Be styled with CSS._
- _Use Flexbox or Grid in your layout design._
- _Implement 2 media queries for responsive design on 3 screen sizes (including desktop)._

### Linting
- _Indent properly._
- _Utilize high-quality, semantic variable names._
- _Follow camelCase, snake_case, and kebab-case convention._
- _Remove unnecessary boilerplate React files and code._
- _Remove all console.log()s and commented out code (functional notes and comments are okay)._

### Deployment
- _Deploy the fully functional front-end via Surge or Netlify._
- _Deploy the back-end via Heroku._

### Procedural
- _Initialize a git repo on Github, with a link to your hosted project._
- _Have frequent commits, making a robust commit history at least every day. (75 commits minimum)_
- _Use effective and safe branching and merging processes._


<br>

### Goals

- _Build a Ruby on rails server that will have endpoints to view all wines, users wines, users tasting notes, add wines, create tasting notes, edit tasting notes, and delete tasting notes_
- _Use three rails tables: wines(one to many), users(one to many x2), tasting_notes(one to many)_

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                                        |
| :--------------: | :----------------------------------------------------------------- |
|      React       | _Will be used to create front end interface._                      |
| React Router Dom | _Will be used to handling routing to specified pages._             |
|    Bootstrap     | _Will be used to create some CSS components._                      |
|     Express      | _Will be used to process requested information and handle routes._ |
|       Bcrypt     | _Will be used to hash users passwords._                            |
|       Cors       | _Will define which browser the server will run on._                |
|       Axios      | _Will be used to get, create, update, or delete data._             |




<br>

### Client (Front End)

#### Wireframes
  ### Desktop
![image](https://user-images.githubusercontent.com/78566150/116117998-bef25580-a671-11eb-8251-b780e8ae7e2b.png)

### Mobile
![image](https://user-images.githubusercontent.com/78566150/116117721-6ae77100-a671-11eb-86a3-be4a287dcc23.png)



#### Component Tree


[Component Tree ](https://drive.google.com/file/d/13465PQ7AFwMsAPjJ5oHjWSrw6RmFEU1d/view?usp=sharing)

#### Component Architecture

``` structure

app/
|__ app.js
 |__ client/
  |__ src/
      |__ containers/
                   |__ MainContainer.jsx/
      |__ components/ 
                  |__ Home/
                        |__ Home.jsx
                        |__ Home.css
                  |__ Nav/
                        |__ Nav.jsx
                        |__ Nav.css
                  |__ Layout/
                        |__ Layout.jsx
                        |__ Layout.css
                  |__ Wines/
                        |__ Wines.jsx
                        |__ Wines.css
                  |__ WineDetails/
                        |__ WineDetails.jsx
                        |__ WineDetails.css
                  |__ AddWine/
                        |__ AddWine.jsx
                        |__ AddWine.css
                  |__ EditWine/
                        |__ EditWine.jsx
                        |__ EditWine.css
                  |__ Userwines/
                        |__ UserWines.jsx
                        |__ UserWines.css
                  |__ SignUp/
                        |__ SignUp.jsx
                        |__ SignUp.css
                  |__ SignIn/
                        |__ SignIn.jsx
                        |__ SignIn.css
                  |__ SignOut/
                        |__ SignOut.jsx
                        
                   
|__ controllers/
      |__ users_controller.rb
      |__ wines_controller.rb
      |__ tasting_notes_controller.rb
|__ models/
      |__ user.rb
      |__ wine.rb
      |__ tasting_notes.rb
config/
|__ routes/
|__ services/
      |__ api_helper.js
      |__ auth.js
      |__ wines.js
      |__ tasting_notes.js
      |__ users.js
db/
|__ migrate/
|__ schema.rb
|__ seeds.rb    
      

```

#### Time Estimates

| Task                                   | Priority | Estimated Time | Time Invested | Actual Time |
|----------------------------------------|----------|----------------|---------------|-------------|
| Set up models/controllers/seeding      | H        | 3 hrs          |               |             |
| Build models/controllers functionality | H        |  3 hrs         |               |             |
| Build CRUD functionality backend       | H        |  3 hrs         |               |             |
| Test backend functionality             | H        |  1 hrs         |               |             |
| Set up directories frontend            | H        |  1 hrs         |               |             |
| Build directories functionality        | H        |  3 hrs         |               |             |
| Build CRUD functionality frontend      | H        |  3 hrs         |               |             |
| Test frontend functionality            | H        |  3 hrs         |               |             |
| Initial CSS Styling using flexbox/grid | M        |  3 hrs         |               |             |
| Clean-up/Format code                   | M        |  1 hrs         |               |             |
| Post MVP                               | L        |  6 hrs         |               |             |
| Final CSS Styling using components     | H        |  3 hrs         |               |             |
| Total:                                 |          | 33 hrs         |               |             |



<br>

### Server (Back End)

#### ERD Model

[ERD](https://drive.google.com/file/d/1lALxFHqq4db-riDitEjsH60qxUjq1OUq/view?usp=sharing)
<br>

***

## Post-MVP

> Use a external api to render more information 
> Set up search fuctionality
> Hamburger menu for mobile
> Use Authentication 

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
