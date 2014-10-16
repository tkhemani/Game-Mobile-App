
// Check if a new cache is available on page load.
window.addEventListener('load', function (e) {
    var appCache = window.applicationCache;
    appCache.addEventListener('updateready', function (e) {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
            // Browser downloaded a new app cache.
            if (confirm('A new version of this site is available. Load it?')) {
                window.location.reload();
            }
        } else {
            // Manifest didn't changed. Nothing new to server.
        }
    }, false);    
    // Fired after the first cache of the manifest.
    appCache.addEventListener('cached', function(e) {
        alert("first cache of the manifest  complete");
    }, false);
    
    // An update was found. The browser is fetching resources.
    appCache.addEventListener('downloading', function (e) {
        alert("An update was found. The browser is fetching resources");
    }, false);

    // The first download of the manifest,
    // or the manifest changed while the download was in progress.
    appCache.addEventListener('error', function (e) {
        alert("first download of the manifest");
    }, false);

    // Fired after the first download of the manifest.
    appCache.addEventListener('noupdate', function (e) {
        alert("first download of the manifest");
    }, false);

    // Fired if the manifest file returns a 404 or 410.
    // This results in the application cache being deleted.
    appCache.addEventListener('obsolete', function (e) {
        alert("application cache was deleted");
    }, false);

    // Fired for each resource listed in the manifest as it is being fetched.
    appCache.addEventListener('progress', function (e) {
        alert("resource listed in the manifest is being fetched.");
    }, false);

    // Fired when the manifest resources have been newly redownloaded.
    appCache.addEventListener('updateready', function (e) {
        alert("he manifest resources have been newly redownloaded.");
    }, false);
   
    statusalert(appCache);

}, false);


window.onload = function () {
   
    appCache.update();
    if (appCache.status == window.applicationCache.UPDATEREADY) {
        appCache.swapCache();  // The fetch was successful, swap in the new cache.
    }

};

function statusalert(appCache) {
    switch (appCache.status) {
        case appCache.UNCACHED: // UNCACHED == 0
            alert('UNCACHED');
            break;
        case appCache.IDLE: // IDLE == 1
            alert('IDLE');
            break;
        case appCache.CHECKING: // CHECKING == 2
            alert('CHECKING');
            break;
        case appCache.DOWNLOADING: // DOWNLOADING == 3
            alert('DOWNLOADING');
            break;
        case appCache.UPDATEREADY:  // UPDATEREADY == 4
            alert('UPDATEREADY');
            break;
        case appCache.OBSOLETE: // OBSOLETE == 5
            alert('OBSOLETE');
            break;
        default:
            alert('UKNOWN CACHE STATUS');
            break;
    };
}

//$(function () { });