$(function () {
    describe('RSS Feeds', function () {
        /* Test that the allFeeds variable has been populated
         * with feeds and is not empty.
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Loop through all feeds and ensujre a URL has been
         * defined and that URL is not empty.
         */
        it('has URL', function () {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined,
                    expect(feed.url.constructor).toBe(String),
                    expect(feed.url.length).not.toBe(0);
            }

        });

        /* Loop through all feeds and ensujre a name has been
         * defined and that name is not empty.
         */
        it('has name', function () {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined(),
                    expect(feed.name.constructor).toBe(String),
                    expect(feed.name.length).not.toBe(0);
            }

        });
    });

    describe('The menu', function () {
        /* Test that the slide menu is hidden by default when page
         * loads.
         */
        it('menu hidden', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* Test if the slide menu is visible or hidden when the
         * menu icon is clicked.
         */
        it('menu visible or hidden when clicked', function () {
            let menu = document.querySelector('a.menu-icon-link');
            menu.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menu.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function () {
        /* Test that the loadfeed function has completed running
         * and that the feed container is not empty.
         */
        beforeEach(function (done) {
            loadFeed(1, done);
        });

        it('adds entries to feed container', function () {
            let entries = document.querySelectorAll('article.entry')
            expect(entries.length).not.toBe(0);
        });
    });

    describe('New Feed Selection', function () {
        /* Checks that a different set of feeds are loaded each time.
         */

        let feed1, feed2;

        beforeEach(function (done) {
            loadFeed(1, function () {
                feed1 = document.querySelector('div.feed').innerHTML;
                loadFeed(2, function () {
                    feed2 = document.querySelector('div.feed').innerHTML;
                    done();
                });
            });
        });

        it('loads new feeds', function () {
            expect(feed1).not.toBe(feed2);
        });
    });

}());
