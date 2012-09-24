window.fbAsyncInit = function() {
	FB.init({
		appId      : '418666514860177', // App ID
		channelUrl : '//sultry-spire-1174.herokuapp.com/channel.php', // Channel File
		status     : true, // check login status
		cookie     : true, // enable cookies to allow the server to access the session
		frictionlessRequests : true, // enable frictionless requests		
		xfbml      : true  // parse XFBML
	});

	// Additional initialization code here

	//Next, find out if the user is logged in
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
			var uid = response.authResponse.userID;
			accessToken = response.authResponse.accessToken;
			
			FB.api('/me', function(info) {
				console.log(info);
  			  	console.log(first_name);
			});


		} else if (response.status === 'not_authorized') {
			//User is logged into Facebook, but not your App


			  var oauth_url = 'https://www.facebook.com/dialog/oauth/';
			  oauth_url += '?client_id=401236519908500'; //Your Client ID
			  oauth_url += '&redirect_uri=' + 'https://apps.facebook.com/muinfoapp/'; //Send them here if they're not logged in
			  oauth_url += '&scope=user_about_me,email,user_location,user_photos,publish_actions,user_birthday,user_likes';
		
			  window.top.location = oauth_url;


		} else {
			// User is not logged into Facebook at all
			window.top.location ='https://www.facebook.com/index.php';
		} //response.status
	}); //getLoginStatus
}; //fbAsyncInit

// Load the SDK Asynchronously
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));
 
