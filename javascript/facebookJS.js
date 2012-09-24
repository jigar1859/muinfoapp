<!-- To bring in Facebook SDK-->
window.fbAsyncInit = function() {
    FB.init({
      appId      : '418666514860177', // App ID
	  frictionlessRequests : true,
      channelUrl : '//sultry-spire-1174.herokuapp.com/channel.php', // Channel File
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true  // parse XFBML
    });

    // Additional initialization code here
  };

  // Load the SDK Asynchronously
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));


/*
   Check the login staus of the user and authentication status of our app with respect to the user
	Authorized implies we can access requested user data
 */
FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    // the user is logged in and has authenticated your
    // app, and response.authResponse supplies
    // the user's ID, a valid access token, a signed
    // request, and the time the access token 
    // and signed request each expire
    var uid = response.authResponse.userID;
    var accessToken = response.authResponse.accessToken;
	
/* Implies User is logged in and has authorised the app to //access his data then do as desired in this section
*/
	
	//we will user uid fetch the data and display on to the //console
	
	FB.api(uid, function(info){
		console.log(info);
	});
	
	
  } else if (response.status === 'not_authorized') {
    // the user is logged in to Facebook, 
    // but has not authenticated your app
	<!-- If user has not authorised us then redirect to the autho page -->
    var oauth_url = 'https://www.facebook.com/dialog/oauth/';
    oauth_url += '?client_id=418666514860177';
    oauth_url += '&redirect_uri=' + encodeURIComponent('https://apps.facebook.com/YOUR_APP_NAMESPACE/');
    oauth_url += '&scope=COMMA_SEPARATED_LIST_OF_PERMISSION_NAMES'

  window.top.location = oauth_url;
	
  } else {
    // the user isn't logged in to Facebook, redirect user to facebook login page
	window.top.location="http://www.facebook.com/index.php";
  }
 });
 
 
