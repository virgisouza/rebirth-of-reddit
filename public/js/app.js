// When the page loads we need to have the application go out to the API endpoint of your choosing to pull in the current feed via AJAX.


// Interaction, Loading Data
// when "My Boards" is clicked
// create an xhr get request to http://www.reddit.com/r/MY_FAVORITE_SUBBREDDIT.json


let myBoardsMenu = document.getElementById('myBoards');
myBoardsMenu.addEventListener('click', function (e) {
  var myBoardsXHR = new XMLHttpRequest();
  myBoardsXHR.addEventListener('load', function () {
  var myBoardsObj = JSON.parse(this.responseText);
  for (var i = 0; i < myBoardsObj.length; i++) {
    console.log(myBoardsObj[i]);
  }


  let myBoardsContent = document.getElementById('innerContent').innerHTML = myBoardsObj;

  });
  myBoardsXHR.open("GET", "http://www.reddit.com/r/Futurology.json");
  myBoardsXHR.send();

});


// when "Random" is clicked
// create an xhr get request to http://www.reddit.com/r/ANOTHER_SUBBREDDIT.json



// when "Get the app" is clicked
// create an xhr get request to http://www.reddit.com/r/ANOTHER_SUBBREDDIT.json