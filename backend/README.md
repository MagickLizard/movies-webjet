### Webjet code challenge

This a code challenge which uses multiple routes to fetch the results and return them to the user.

### Important Notes!

node version: `8.12.0`

Please have backend running before starting frontend for this to work.

I have whitelisted in /routes/api.js the port I am using. Change the port to what the frontend will be running at to bi-pass CORS.
e.g. in:
`origin: "http://localhost:3001"`


## Available Scripts:

### `yarn start`

### `yarn test`

### `yarn lint .`



#Further improvements I would make:

I had trouble with displaying the images as it said they where blocked by Cloudfront.
Add a config for easier use.
Implement a better timeout for the promise handling.
Changed passing the first response body through from the frontend in query to be more split up.
Added a failure component on the frontend and also store the previous state of the card component, so on refresh something is still there.
Add more test cases.

Cheers!