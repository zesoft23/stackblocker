/*
This file contains the actual blocking elements of stackblocker.
It simply removes the elements that are the specified types.
*/

// Log any errors
function onError(error) {
    console.log(`Error: ${error}`);
}

function onGot(item) {

    // These return the elements themselves
    var leftside = document.getElementById("left-sidebar");
    if (item.storedValues.leftChecked && leftside != null) {
        // Setting to hidden to the page not center
        leftside.style.visibility = 'hidden';
    }

    var hot_network = document.getElementById("hot-network-questions");
    if (item.storedValues.hotChecked && hot_network != null) {
        hot_network.parentNode.removeChild(hot_network);
    }

    var newsletter = document.getElementById("newsletter-ad");
    if (item.storedValues.newsChecked && newsletter != null) {
        newsletter.parentNode.removeChild(newsletter);
    }

    var feed = document.getElementById("feed-link");
    if (item.storedValues.feedChecked && feed != null) {
        feed.parentNode.removeChild(feed);
    }

    var jobs = document.getElementById("hireme");
    if (item.storedValues.jobsChecked && jobs != null) {
        jobs.parentNode.removeChild(jobs);
    }

    // These return node lists
    var linked = document.querySelectorAll('.sidebar-linked');
    if (item.storedValues.linkedChecked && linked.length) {
        linked[0].parentNode.removeChild(linked[0]);
    }

    var related = document.querySelectorAll('.sidebar-related');
    if (item.storedValues.relatedChecked && related.length) {
        related[0].parentNode.removeChild(related[0]);
    }

    var featured = document.querySelectorAll('.s-sidebarwidget__yellow');
    if (item.storedValues.featuredChecked && featured.length) {
        featured[0].parentNode.removeChild(featured[0]);
    }

}

// Get the stored values via lazy evaluation
let getting = browser.storage.sync.get("storedValues");
getting.then(onGot, onError);