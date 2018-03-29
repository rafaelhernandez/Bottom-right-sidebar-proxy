/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application strings into before sending it to the client.
 */
const env = require('./environment.js');

module.exports.render = body => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Chompy!</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <div id="navbar"></div>
      <div class="titlestyle">
        <div id="app"></div>
      </div>
      <div class="mapsstyle">
        <div id='MapAndImages'></div>
      </div>
      <div class="bottom-half">
        <span class="left">
          <div id="highlights"></div>
          <div id="reviews-module"></div>
        </span>
        <span class="right">
        <div class="related">
          <div id="right_bottom_sidebar">${body}</div>
        </div>
      </div>
      <!-- navbar 
      <script src="http://${env.navbarHost}:${env.navbarPort}/bundle.js"></script>
      -->
      <!-- highlights v  
      <script src="http://${env.highlightsHost}:${env.highlightsHost}/bundle.js"></script>
      -->
      <!-- bottom right sidebar v -->
      <script src="http://${env.sidebarHost}:${env.sidebarPort}/bundle.js"></script>
      <!-- reviews v 
      <script src="http://${env.reviewsHost}:${env.reviewsPort}/bundle.js"></script>
      -->
      <!-- maps image v
      <script src="http://${env.mapHost}:${env.mapPort}/bundle.js"></script>
      -->
      <!-- title -->
      <!--script src="http://52.8.109.246/bundle.js"></script -->
    </body>
  </html>
`;
