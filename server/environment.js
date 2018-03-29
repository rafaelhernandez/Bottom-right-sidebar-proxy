let navbarHost = process.env.NAVBAR_SERVICE_HOST || 'localhost';
let navbarPort = process.env.NAVBAR_SERVICE_PORT || '3001';

let highlightsHost = process.env.HIGHLIGHTS_SERVICE_HOST || 'localhost';
let highlightsPort = process.env.HIGHLIGHTS_SERVICE_PORT || '3002';

let reviewsHost = process.env.REVIEWS_SERVICE_HOST || 'localhost';
let reviewsPort = process.env.REVIEWS_SERVICE_PORT || '3004';

let sidebarHost = process.env.SIDEBAR_SERVICE_HOST || 'localhost';
let sidebarPort = process.env.SIDEBAR_SERVICE_PORT || '3010';

let mapHost = process.env.MAP_SERVICE_HOST || 'localhost';
let mapPort = process.env.MAP_SERVICE_PORT || '3006';

module.exports = {
  navbarHost: navbarHost,
  navbarPort: navbarPort,
  highlightsHost: highlightsHost,
  highlightsPort: highlightsPort,
  sidebarHost: sidebarHost,
  sidebarPort: sidebarPort,
  reviewsHost: reviewsHost,
  reviewsPort: reviewsPort,
  mapHost: mapHost,
  mapPort: mapPort
};