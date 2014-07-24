# A Simple CRud App Using Angular on Lineman

This is a simple app that I used to understand Angular. I created a simple Go api server for this app to work with.

# Instructions

1. `git clone <this repo>`
2. `cd lineman_angular_app`
3. `sudo npm install -g lineman`
4. `npm install`
5. `lineman run`
6. open your web browser to localhost:8000

# Running Tests

Full tests have not been implemented

# Building a static site for deployment

1. `lineman build`
2. upload the build from the 'dist' directory

# deploy to heroku

1. heroku create --stack cedar --buildpack http://github.com/linemanjs/heroku-buildpack-lineman.git
2. git push heroku master

you can see it live on heroku at http://warm-oasis-8062.herokuapp.com/
