# Authenticated Apps w/Auth0 and Gatsby

This app was built as part of the _Learn With Jason_ livestream series.

- [Watch this app get built live!](https://www.youtube.com/watch?v=j-vuF2PYHmU&index=2&list=PLz8Iz-Fnk_eTpvd49Sa77NiF8Uqq5Iykx)
- [Learn about upcoming livestreams](https://twitch.tv/jlengstorf) — make sure to click “follow” to get notified when streams go live

# Auth0 Application Settings

To use this example, certain application settings must
be set correctly, otherwise unexpected behavior will occur.

Set the following fields to the values shown below, where {portNumber} is whatever port number you are using (e.g., port 8000 in development mode):

- **Allowed Callback URLs**
  `http://localhost:{portNumber}/callback`

- **Allowed Web Origins**
  `http://localhost:{portNumber}`

- **Allowed Logout URLs**
  `http://localhost:{portNumber}`

Make sure that there is no trailing '/' after the port number in the **Allowed Web Origins** and **Allowed Logout URLs** fields.

# Environment Variables

The environment variables listed in `.env.EXAMPLE` need to be set for development and production contexts. For example, to expose these variables when running `gatsby develop`, there must be a `.env.development` file in the root of your project containing the values found in your Auth0 application settings. To set the environment variables when running `gatsby build`, refer to the livestream at [1:34:05](https://youtu.be/j-vuF2PYHmU?t=5645).

See https://www.gatsbyjs.org/docs/environment-variables/ for a deeper dive into using environment variables with Gatsby.
