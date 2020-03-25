function onError(error) {
    console.log(`Error: ${error}`);
}

function onGot(item) {

    console.log(item);

    var leftside = document.getElementById("left-sidebar");
    if (item.storedValues.leftstored && leftside != null) {
        console.log("left!");
        leftside.parentNode.removeChild(leftside);
    }

    var hot_network = document.getElementById("hot-network-questions");
    if (item.storedValues.hotnetworkstored && hot_network != null) {
        console.log("hot!");
        hot_network.parentNode.removeChild(hot_network);
    }

    var newsletter = document.getElementById("newsletter-ad");
    if (item.storedValues.newsletterstored && newsletter != null) {
        console.log("news!");
        newsletter.parentNode.removeChild(newsletter);
    }

    var feed = document.getElementById("feed-link");
    if (item.storedValues.feedstored && feed != null) {
        console.log("feed!");
        feed.parentNode.removeChild(feed);
    }

    var jobs = document.getElementById("hireme");
    if (item.storedValues.jobsstored && jobs != null) {
        console.log("jobs!");
        jobs.parentNode.removeChild(jobs);
    }

    var linked = document.querySelectorAll('.sidebar-linked');
    if (item.storedValues.linkedstored && linked.length) {
        console.log("linked!");
        linked[0].parentNode.removeChild(linked[0]);
    }

    var related = document.querySelectorAll('.sidebar-related');
    if (item.storedValues.relatedstored && related.length) {
        console.log("related!");
        related[0].parentNode.removeChild(related[0]);
    }

    var featured = document.querySelectorAll('.s-sidebarwidget__yellow');
    if (item.storedValues.featuredstored && featured.length) {
        console.log("blog!");
        featured[0].parentNode.removeChild(featured[0]);
    }

    var right = document.getElementById("sidebar");
    if (item.storedValues.rightstored && right != null) {
        console.log("feed!");
        right.parentNode.removeChild(right);
    }

}

let getting = browser.storage.sync.get("storedValues");
getting.then(onGot, onError);