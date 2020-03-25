/*
This file contains the javascript for the options menu within
stackblocker.
*/

// The current html check elements
var featured = document.getElementById("featured");
var hotnetwork = document.getElementById("hotnetwork");
var linked = document.getElementById("linked");
var related = document.getElementById("related");
var newsletter = document.getElementById("newsletter");
var feed = document.getElementById("feed");
var jobs = document.getElementById("jobs");
var left = document.getElementById("left");

// Get the current html elements for the check
function getCheckElements() {
    var storedElements = {
        left: document.getElementById("left"),
        featured: document.getElementById("featured"),
        hotnetwork: document.getElementById("hotnetwork"),
        linked: document.getElementById("linked"),
        related: document.getElementById("related"),
        newsletter: document.getElementById("newsletter"),
        feed: document.getElementById("feed"),
        jobs: document.getElementById("jobs")
    };

    return storedElements;
}

// Get the current value of check marks on options.html
function getCheckElementStatus() {
    var varStoredChecks = {
        featuredChecked: document.getElementById("featured").checked,
        hotChecked: document.getElementById("hotnetwork").checked,
        linkedChecked: document.getElementById("linked").checked,
        relatedChecked: document.getElementById("related").checked,
        newsChecked: document.getElementById("newsletter").checked,
        feedChecked: document.getElementById("feed").checked,
        jobsChecked: document.getElementById("jobs").checked,
        leftChecked: document.getElementById("left").checked
    };

    return varStoredChecks;
}

// Save checked options to storage
function saveOptions(e) {
    e.preventDefault();
    myvar = getCheckElementStatus();

    browser.storage.sync.set({
        storedValues: myvar
    });
}

// Set the checked options to visibly match their stored values
function restoreOptions() {

    function setCurrentChoice(result) {
        checkObjects = getCheckElements();
        // Set the checks to their stored values
        checkObjects.featured.checked = result.storedValues.featuredChecked;
        checkObjects.hotnetwork.checked = result.storedValues.hotChecked;
        checkObjects.linked.checked = result.storedValues.linkedChecked;
        checkObjects.related.checked = result.storedValues.relatedChecked;
        checkObjects.newsletter.checked = result.storedValues.newsChecked;
        checkObjects.feed.checked = result.storedValues.feedChecked;
        checkObjects.jobs.checked = result.storedValues.jobsChecked;
        checkObjects.left.checked = result.storedValues.leftChecked;

    }

    // Log any errors
    function onError(error) {
        console.log(`Error: ${error}`);
    }

    let currentCheckedValues = browser.storage.sync.get("storedValues");
    currentCheckedValues.then(setCurrentChoice, onError);
}

// Reload options when opening the menu
document.addEventListener("DOMContentLoaded", restoreOptions);
// Save options whenever any box is checked
featured.addEventListener("change", saveOptions);
hotnetwork.addEventListener("change", saveOptions);
linked.addEventListener("change", saveOptions);
related.addEventListener("change", saveOptions);
newsletter.addEventListener("change", saveOptions);
feed.addEventListener("change", saveOptions);
jobs.addEventListener("change", saveOptions);
left.addEventListener("change", saveOptions);
