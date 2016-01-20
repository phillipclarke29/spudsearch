# Flickr Feed Tech Test for Potato

## Installation

Fork this repo and then run npm and bower

## Getting Started

From doc root run "gulp dev" and then "http-server"

## Design

Built as a single page app using Angular, Bootstrap, Bootstrap UI and a simple http-server.  The app connects to the flickr feed using a jsonp call.  Data is retrieved as posts, displayed in Angular with a modal for more detailed information.

Stylus is used to compile css with a gulp task to watch for changes in gulp/css.js and pipe to assets/app.css

Gulp is also used to watch and pipe minified js from /ng to assets/js.  Sourcemaps provide information for debugging.

### Ongoing Development

This site is only 80% complete.  The following areas need further work.
* Tags to links - linky?
* Karma testing of http backend
* Protractor e2e tests
* Tidying up of CSS across devices
