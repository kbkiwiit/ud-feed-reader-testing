# Project Overview

This project was used to help me learn how to use Jasmine and TDD. It is a feed reader web application that loads feeds from 4 
different feed sites: 'Udacity Blog', 'CSS Tricks', 'HTML5 Rocks', 'Linear Digressions'.


## How to run this application

Clone or download this repository and open the index.html file. Jasmine is already inclued so it will also be loaded and will
 run the test suites.

Open the spec/feedreader.js file in an editor and make changes to the code to see the tests fail.

## What is tested?

The following tests are performed using Jasmine:

1. Test that the allFeeds variable has been populated with feeds and is not empty.
2. Ensure a URL has been defined and is not empty.
3. Ensure a name has been defined and is not empty.
4. Test that the side menu is hidden by default on page load.
5. Test that the side menu is visibile or hidden when the burger is clicked.
6. Test that the laodfeed function is populating the feeds in the HTML container.
7. Check that new feeds are loaded each time the page loads.
