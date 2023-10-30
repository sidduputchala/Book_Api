I have deployed the backend using vercel and here is the url : https://book-api-kappa-six.vercel.app/ 

# API endpoints and their usage :

### /viewallbooks  (get request)
 -> This endpoint is used to get the list of all books.

### /viewbook/:id  (get request)
 -> This endpoint is used to view the details of book with the given id.
 -> If we give the id of a non-existent book , it gives a error message : "Book with this id is not found" .

### /addbook       (post request)
 -> This endpoint is used to add a book.
 -> If we try to add a new book with the same title as of any other book present in the database it gives a error message : "Book with this title already exists" .

### /updatebook/:id     (put request)
 -> This endpoint is used to update the details of the book with given id.
 -> If we give the id of a non-existent book, it gives a error message : "Book with this id is not found".

### /deletebook/:id     (delete request)
 -> This endpoint is used to delete a book with the given id.
 -> If we give the id of a non-existent book, it gives a error message : "Book with this id is not found".



# Instructions to set up and run the application locally :
 Run the following commands one by one :
 
 # npm i
   -> To install all dependencies

 # npm start
   -> To start the server

 -> Now the server listens at port 3000.


# Any decisions or assumptions you made during the development process

 -> I have added a .env file to hide the mongo uri

 -> When we try to add a new book with the same title of any other book , i didn't add it and rendered a error message.


# Deployment process

 -> Push to code into github (version control)

 -> Sign up for vercel and log in 

 ->  Add a vercel.json file :

     In our project directory,we need to add a vercel.json configuration file that describes how to deploy your API.
     This configuration specifies that it's a Vercel 2.0 project, and it uses the @vercel/node builder for JavaScript files in the api directory.
 
 -> The we need to create a project in the vercel and then link our backend project to it using github.

 -> Then we need to add environmental variables if present , in our case we need to add the mongo uri.

 -> Then select domain and deploy.

 -> Here is the url of our deployed project :    https://book-api-kappa-six.vercel.app/  