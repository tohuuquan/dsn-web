function getUserInfo(sessionID, userId, callbackSuccess, callbackError) {
	$.ajax({
		type: "GET",
		url: "http://dreamyday.tk:80/user?session_id=" + sessionID + "&user_id=" + userId,
		success: function(data, textStatus, jqXHR){
			// Check if callbackSuccess is a function
			if (typeof(callbackSuccess) == "function") {
				callbackSuccess(data, textStatus, jqXHR);
			}
		},
		error: function(xhRequest, ErrorText, thrownError) {
			// Check if callbackError is a function
			if (typeof(callbackError) == "function") {
				callbackError(xhRequest, ErrorText, thrownError);
			}
		}
	})
	.done(function(msg){
		console.log("requested");
	});
}

function getSessionInfo(sessionID,callbackSuccess,callbackError) {

	$.ajax({
		type: "GET",
		url: "http://dreamyday.tk:80/session?session_id="+sessionID,
		success: function (data,textStatus,jqXHR){
			// Check if callbackSuccess is a function
			if (typeof(callbackSuccess) == "function") {
				callbackSuccess(data, textStatus, jqXHR);
			}
		},
		error: function(xhRequest, ErrorText, thrownError) {
			// Check if callbackError is a function
			if (typeof(callbackError) == "function") {
				callbackError(xhRequest, ErrorText, thrownError);
			}
		}
	})
	.done(function(msg){
		console.log("requested");
	});
}


function getUserDream(sessionID,userID,callbackSuccess,callbackError){

	$.ajax({
		type: "GET",
		url: "http://dreamyday.tk:80/user/dreams?session_id="+sessionID+"&userId="+userID,
		success: function (data,textStatus,jqXHR){
			if (typeof(callbackSuccess) == "function") {
				callbackSuccess(data, textStatus, jqXHR);
			}
		},
		error: function(xhRequest, ErrorText, thrownError) {
			// Check if callbackError is a function
			if (typeof(callbackError) == "function") {
				callbackError(xhRequest, ErrorText, thrownError);
			}
		}		
	})
	.done(function(msg){
		console.log("requested");
	});
}