$(function() {
    describe('RSS Feeds', function() {
        /* Test that the allFeeds variable has been populated
         * with feeds and is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Loop through all feeds and ensujre a URL has been
         * defined and that URL is not empty.
         */
        it('has URL', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined,
                expect(feed.url.constructor).toBe(String),
                expect(feed.url.length).not.toBe(0);
            }
            
        });

        /* Loop through all feeds and ensujre a name has been
         * defined and that name is not empty.
         */
        it('has name', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined(),
                expect(feed.name.constructor).toBe(String),
                expect(feed.name.length).not.toBe(0);
            }
            
        });
    });

    describe('The menu', function() { 
        /* Test that the slide menu is hidden by default when page
         * loads.
         */
        it('menu hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* Test if the slide menu is visible or hidden when the
          * menu icon is clicked.
          */
         it('menu visible or hidden when clicked', function() {
             let menu = document.querySelector('a.menu-icon-link');
             menu.click();
             expect($('body').hasClass('menu-hidden')).toBe(false);
             menu.click();
             expect($('body').hasClass('menu-hidden')).toBe(true);
         });
    });


    describe('Initial Entries', function() { 
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('menu hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
    });

    

    describe('New Feed Selection', function() { 
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('menu hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
    });

}());
