# CraftCarsCollaboration-ReactJS-WebProject2023

The project is deployed in this domain

        https://react-projectcraftcars-oct2023.web.app/

This is a React JS project named Craft Cars Collaboration.

It was created for student purposes. All images/videos are copyrighted by the car companies.

The purpose of the site is for each of its users to create posts and (in the future) order cars.

Description:
Any user without an account can view cars and posts.
Any user with an account can create, edit and delete posts
+ has the right to order a car (in the future)

Header
There are the navigation links (click on the burger icon)

Home
Contains a carousel with some cars and its description. Each car has a specific ID button that changes every few seconds it is set to.

Under home we see two sections with 4 most expensive cars and 4 most recent post from users.

Footer - no explanation needed

Site
From drop down menu we can see about page with information and us location.
It's time for the posts and the cars.
If you have an account - you can create a post by logging into your profile page.
Your profile page contains only your created posts and if you want to see all the posts from another user - you need to go to the posts page via the drop down menu.

Any logged in user can comment on their own and other posts. For each comment, it shows when it was created and by who it was created.
The post contains information about the location and when it was published.

For now every user can view the cars detailed, but CANNOT purchase and customize them.

In your profile is displayed all information about you and how many posts you have created.

In the car catalog has search bar and every user can look quickly the car which they want to buy.


Short information to run the project

    Server
    1
    node .\server.js
    App
    2
    npm run build
    3
    npm run dev

The server has some seeded user like a:

    email: peter@abv.bg
    password: 123456
    &
    email: george@abv.bg
    password: 123456

If you want to create a account - you should know that:

1 - use new email and username (first and last name, because it displayed in post).

2 - crete a strong password -
With minimum of 5 characters, that have one digit, one uppercase and one lowercase letter.
