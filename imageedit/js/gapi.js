// in order for this to work properly these two script tags needed to be included at the end of the html
//   <script src='gapi.js'></script>
//   <script src="https://apis.google.com/js/client.js?onload=checkAuth"></script>



// Your Client ID can be retrieved from your project in the Google
// Developer Console, https://console.developers.google.com
var CLIENT_ID = '15045010927-hg7s0bh32kr4cgpaqf33bi6kf694f11g.apps.googleusercontent.com';

// This is the ID number for the specific sheet document
var SHEET_ID = '1aV6BSAFb5ysi5DhC8F9jKy13fZPf6uccJsBOqhqEics';

// put in the cell range you want to select
var RANGE = 'treasurehunt!A1';

var SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

// doStuffWithData is whatever you want to do with the data you get from the sheet
// I am currently giving it a function that is defined in a script tag in my html file
var doStuffWithData = function(data) {
//   body.innerHTML = data;
};
// note: I assume you don't need to use the full response [headers, status]
//       so I'm only passing the array of data to the function and then for reference I'm console logging the full result




function getData() {
  gapi.client.sheets.spreadsheets.values.get({
  spreadsheetId: SHEET_ID,
  range: RANGE,
}).then(function(response) {
    // do something
    doStuffWithData(response.result.values); // assuming on average you only want the data
    console.log('full response from api call: ', response);
  }
), function(response) {
		   console.log(response);
   };
}




function sendData(range, data) {
  gapi.client.sheets.spreadsheets.values.update({
    spreadsheetId: SHEET_ID,
    range: range,
    valueInputOption: 'USER_ENTERED'},
      {
        "values": data
// 				[
// 						["2", "sausage"],
// 		        ["3", "pepperoni"]
// 	     	]
      }
  ).then(function(response) {
    console.log("response: ", response);
  });		  
}



















// the checkAuth, handleAuthResult, and loadSheetsApi all run on page load 
// by default loadSheetsApi also runs the getData() function once it sets up the api



/**
* Check if current user has authorized this application.
*/
function checkAuth() {
	gapi.auth.authorize(
	{
		'client_id': CLIENT_ID,
		'scope': SCOPES.join(' '),
		'immediate': true
	}, handleAuthResult);
}

/**
* Handle response from authorization server.
*
* @param {Object} authResult Authorization result.
*/
function handleAuthResult(authResult) {
	if (authResult && !authResult.error) {
		loadSheetsApi();
	} else {
    console.log('authorization error');
	}
}

/**
* Load Sheets API client library.
*/
function loadSheetsApi() {
	var discoveryUrl = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

	gapi.client.load(discoveryUrl).then(getData);
}
