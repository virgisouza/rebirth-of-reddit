// When the page loads we need to have the application go out to the API endpoint of your choosing to pull in the current feed via AJAX.


// Interaction, Loading Data
// when "My Boards" is clicked
// create an xhr get request to http://www.reddit.com/r/MY_FAVORITE_SUBBREDDIT.json

//get 'My Boards' menu item
let myBoardsMenu = document.getElementById('myBoards');

  let myBoardsReq = new XMLHttpRequest();
  myBoardsReq.addEventListener('load', function () {
    let myBoardsObj = JSON.parse(this.responseText);
    let myBoardsObjData = myBoardsObj.data.children;

    for (var i = 0; i < myBoardsObjData.length; i++) {

      //create content box element
      let parent = contentBox();

      //creates elements with data in them
      let imgElem = imageBox(myBoardsObjData[i].data.url);
      let titleElem = titleBox(myBoardsObjData[i].data.title);
      let detailsElem = detailsBox(myBoardsObjData[i].data.author);
      let text = textSnip(myBoardsObjData[i].data.permalink);

      //append elements
      parent.appendChild(imgElem);
      parent.appendChild(titleElem);
      parent.appendChild(detailsElem);
      parent.appendChild(text);

      //appends parent elem to page
      document.getElementById('content').appendChild(parent);

    }
  });
  myBoardsReq.open("GET", "http://www.reddit.com/r/Turtles.json");
  myBoardsReq.send();


//make content box card function
function contentBox () {
  let contentBox = document.createElement('div');
  contentBox.setAttribute('class', 'contentBox');
  return contentBox;
}


//create image box function
function imageBox (url) {
  let imageBox = document.createElement('img');
  imageBox.setAttribute('id', 'imageBox');
  imageBox.src = url;
  imageBox.style.height = 400 + 'px';

  return imageBox;
};

//article Title box function
function titleBox (title) {
  let articleTitleBox = document.createElement('div');
  articleTitleBox.setAttribute('id', 'articleTitleBox');
  articleTitleBox.innerHTML = title;
  return articleTitleBox;
};

//details Box function
function detailsBox (author, years, views) {
  let detailsBox = document.createElement('div');
  detailsBox.setAttribute('id', 'detailsBox');
  detailsBox.innerHTML = "by " + author;
  return detailsBox;
};

//text snippet box function
function textSnip (permalink) {
  let textSnipBox = document.createElement('div');
  textSnipBox.setAttribute('id', 'textSnipBox');
  textSnipBox.innerHTML = 'http://www.reddit.com' + permalink;
  return textSnipBox;
};




// when "Random" is clicked
// create an xhr get request to http://www.reddit.com/r/ANOTHER_SUBBREDDIT.json



// when "Get the app" is clicked
// create an xhr get request to http://www.reddit.com/r/ANOTHER_SUBBREDDIT.json











////////////////////////////ed's version/////////////////////////////////

// let query = { url: "http://www.reddit.com/r/videos.json" };

// function request(query, cb) {
//   // argument validation
//   query = query || {};
//   query.method = query.method || 'GET';
//   if (!query.url) { return cb(); }

//   // making xhr request
//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", cb);
//   oReq.open(query.method, query.url);
//   oReq.send(); // send request
// }

// // subreddit is just the name of the subreddit
// function buildSubreddit(subreddit) {
//   // variables
//   let parent = document.getElementById('root');

//   // get subreddit data
//   let query = { url: `http://www.reddit.com/r/${subreddit}.json` };
//   request(query, function() {
//     // get posts from response
//     let response = JSON.parse(this.responseText)
//     let posts = response.data.children;

//     // replace root div with children posts
//     parent.innerHTML = '';
//     posts.forEach((post) => {
//       parent.appendChild(buildPost(post.data));
//     });
//   });
// }

// function buildPost(post) {
//   // create a top level post element
//   let postElement = document.createElement('div');
//   postElement.style = "text-align: center; padding-bottom: 20px;";
//   postElement.appendChild(buildThumbnail(post));
//   return postElement;
// }

// function buildThumbnail(post) {
//   // create a link to the link
//   let postLink = document.createElement('a');
//   postLink.href = post.url;

//   // create a thumbnail for the postLink
//   let thumbnail = document.createElement('img');
//   thumbnail.src = post.thumbnail;
//   thumbnail.addEventListener('error', function() {
//     thumbnail.src = 'http://placebeard.it/200/200';
//   });

//   // append thumbnail
//   postLink.appendChild(thumbnail);
//   return postLink;
// }

// // setup random subreddit
// let randomButton = document.getElementById('random');
// randomButton.addEventListener('click', function() {
//   // build random subreddit
//   buildSubreddit('videos');
// });