//// JavaScript source code
//$.getScript("//platform.linkedin.com/in.js", function () {
//    IN.init({
//        api_key: linkedin_api_key,
//        authorize: false,
//        lang: linkedinLang
//    });
//});
function opensocialwindow(vURL, Flag) {
    if (Flag == '1') {
        shareFb(vURL);
        //openCenteredWindow(vURL, 'Share', 500, 300, "location=No,scrollbars=Yes,toolbar=No,resizable=No,directories=No,status=No,menubar=No,hotkeys=No,center=Yes", false);
    }
    else {
        shareTwitter(vURL);
    }   
}
window.fbAsyncInit = function () {
    FB.init({
        appId: '403134569883251',
        xfbml: false,
        version: 'v2.4'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function shareFb(shareUrl) {
    FB.ui(
      {
          method: 'share',
          href: shareUrl
      }
    );
}

function shareTwitter(shareUrl) {
    window.open(shareUrl, 'tweet', 'width=900,height=500,left=400, top=200');
}

function shareLinkedIn(shareUrl) {
    IN.UI.Share().params({
        url: shareUrl
    }).place();
}
function opensocialwindow(vURL, Flag) {
    if (Flag == '1') {
        shareFb(vURL);
    }
    else {
        shareTwitter(vURL);
    }  
}