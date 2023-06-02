# How to create guess the card game 

## Step 1
### Read the documentation of an API

In the documentation we have read that we can call the api using various different links and paths

Since we want to get 3 random car we will use the following link

`https://deckofcardsapi.com/api/deck/new/draw/?count=3`

The api will return 3 random cards with their **name, code, value, suit and image**

We are only interested in the image which will be retrieved as a link

`https://deckofcardsapi.com/static/img/6H.png`

and since the api returns array of objects we will be accessing the card as follows

````
response[cardNumberInArray].image
````

## Step 2
### Create basic HTML

