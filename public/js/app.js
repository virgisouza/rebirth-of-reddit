// When the page loads we need to have the application go out to the API endpoint of your choosing to pull in the current feed via AJAX.


// Interaction, Loading Data
// when "My Boards" is clicked
// create an xhr get request to http://www.reddit.com/r/MY_FAVORITE_SUBBREDDIT.json

//get 'My Boards' menu item
let myBoardsMenu = document.getElementById('myBoards');

//click event listener added to 'My Boards' menu item
myBoardsMenu.addEventListener('click', function (e) {
  //new xhr load request initiated on 'click'
  let myBoardsReq = new XMLHttpRequest();
  myBoardsReq.addEventListener('load', function () {
    //gets object data
    let myBoardsObj = JSON.parse(this.responseText);
    //create new variable to access data.children
    let myBoardsObjData = myBoardsObj.data.children;


    for (var i = 0; i < myBoardsObjData.length; i++) {


      console.log(myBoardsObjData[i]);

      let myBoardsContent = document.getElementById('innerContent');
      myBoardsContent.innerHTML = myBoardsObj[i];
    }
  });
  myBoardsReq.open("GET", "http://www.reddit.com/r/Futurology.json");
  myBoardsReq.send();
});


// when "Random" is clicked
// create an xhr get request to http://www.reddit.com/r/ANOTHER_SUBBREDDIT.json



// when "Get the app" is clicked
// create an xhr get request to http://www.reddit.com/r/ANOTHER_SUBBREDDIT.json