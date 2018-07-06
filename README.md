# Restaurants Reviews

The **Restaurant Reviews** project is the 6th project of the Front-End Web Development Nanodegree Program of Udacity.

## Specification

The students have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all.

## Requirments

* **Make the provided site fully responsive.** All of the page elements should be usable and visible in any viewport, including desktop, tablet, and mobile displays. Images shouldn't overlap, and page elements should wrap when the viewport is too small to display them side by side.

*Bootstrap and other CSS frameworks should not be used; all responsiveness should be done with CSS.*

* **Make the site accessible.** Convert the design to be accessible for screen reader use.

* **Cache the static site for offline use.** Using Cache API and a ServiceWorker, cache the data for the website so that any page (including images) that has been visited is accessible offline.

## Installation

1.Clone the repository;

2.From inside the new directory, launch a local client server using Python from your terminal:
If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
In a terminal, check the version of Python you have: `python -V`.
Python 2: python -m SimpleHTTPServer 8000 (or some other port, if port 8000 is already in use.)
or
Python 3: python3 -m http.server 8000

3.Visit the site in your browser at `http://localhost:8000`.

## Leaflet.js and Mapbox

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.