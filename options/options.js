var left = document.getElementById("left");
var featured = document.getElementById("featured");
var hotnetwork = document.getElementById("hotnetwork");
var linked = document.getElementById("linked");
var related = document.getElementById("related");
var newsletter = document.getElementById("newsletter");
var feed = document.getElementById("feed");
var right = document.getElementById("right");
var jobs = document.getElementById("jobs");

function getCheckElements() {

    var storedElements = {
        left: document.getElementById("left"),
        featured: document.getElementById("featured"),
        hotnetwork: document.getElementById("hotnetwork"),
        linked: document.getElementById("linked"),
        related: document.getElementById("related"),
        newsletter: document.getElementById("newsletter"),
        feed: document.getElementById("feed"),
        right: document.getElementById("right"),
        jobs: document.getElementById("jobs")
    };

    return storedElements;
}

function getCheckElementStatus() {

    var varStoredChecks = {

        leftstored: document.getElementById("left").checked,
        featuredstored: document.getElementById("featured").checked,
        hotnetworkstored: document.getElementById("hotnetwork").checked,
        linkedstored: document.getElementById("linked").checked,
        relatedstored: document.getElementById("related").checked,
        newsletterstored: document.getElementById("newsletter").checked,
        feedstored: document.getElementById("feed").checked,
        rightstored: document.getElementById("right").checked,
        jobsstored: document.getElementById("jobs").checked

    };

    return varStoredChecks;
}


function saveOptions(e) {
    e.preventDefault();
    myvar = getCheckElementStatus();

    browser.storage.sync.set({
        storedValues: myvar
    });
}

function restoreOptions() {

    function setCurrentChoice(result) {

        checkObjects = getCheckElements();

        checkObjects.left.checked = result.storedValues.leftstored;
        checkObjects.featured.checked = result.storedValues.featuredstored;
        checkObjects.hotnetwork.checked = result.storedValues.hotnetworkstored;
        checkObjects.linked.checked = result.storedValues.linkedstored;
        checkObjects.related.checked = result.storedValues.relatedstored;
        checkObjects.newsletter.checked = result.storedValues.newsletterstored;
        checkObjects.feed.checked = result.storedValues.feedstored;
        checkObjects.right.checked = result.storedValues.rightstored;
        checkObjects.jobs.checked = result.storedValues.jobsstored;

    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    let gettingstoredValues = browser.storage.sync.get("storedValues");
    gettingstoredValues.then(setCurrentChoice, onError);


}


document.addEventListener("DOMContentLoaded", restoreOptions);
// var checkElements = getCheckElements();
// console.log(checkElements);
// for (var checks in checkElements) {
//     console.log(checks);
//     console.log(Object.keys(checks))
//     debugger;
//     checks.addEventListener("change", saveOptions);
// }
left.addEventListener("change", saveOptions);
featured.addEventListener("change", saveOptions);
hotnetwork.addEventListener("change", saveOptions);
linked.addEventListener("change", saveOptions);
related.addEventListener("change", saveOptions);
newsletter.addEventListener("change", saveOptions);
feed.addEventListener("change", saveOptions);
right.addEventListener("change", saveOptions);
jobs.addEventListener("change", saveOptions);

