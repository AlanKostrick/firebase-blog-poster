import Header from "./src/components/Header";
import Home from "./src/components/Home";
import Posts from "./src/components/Posts";
import Post from "./src/components/Post";
import Footer from "./src/components/Footer";
import PostUpdate from "./src/components/PostUpdate";
import "./css/style.css";

pageBuild();

function pageBuild() {
  header();
  navHome();
  navPosts();
  footer();
}

function header() {
  const header = document.querySelector("#header");
  header.innerHTML = Header(); //send component into our html
}

function footer() {
  const footer = document.querySelector("#footer");
  footer.innerHTML = Footer();
}

function navHome() {
  const homeButton = document.querySelector(".nav-list__home");
  homeButton.addEventListener("click", function() {
    getAppContext().innerHTML = Home();
  });
}

function navPosts() {
  //get request
  const postsButton = document.querySelector(".nav-list__posts");
  postsButton.addEventListener("click", function() {
    const postsRef = getDatabaseCollectionContext();
    postsRef.get().then(posts => {
      getAppContext().innerHTML = Posts(posts);
    });

    focusOnSingularPost();
  });

  //post request
  getAppContext().addEventListener("click", function() {
    const postsRef = getDatabaseCollectionContext();
    if (event.target.classList.contains("add-post__submit")) {
      const postTitle = event.target.parentElement.querySelector(
        ".add-post__postTitle"
      ).value;
      const postContent = event.target.parentElement.querySelector(
        ".add-post__postBody"
      ).value;

      postsRef.add({
        title: postTitle,
        content: postContent
      });

      document.querySelector("#app").innerHTML = PostUpdate();
      setTimeout(function() {
        postsRef.get().then(posts => {
          document.querySelector("#app").innerHTML = Posts(posts);
        });
      }, 3000);
    }
  });

  //delete request
  getAppContext().addEventListener("click", function() {
    const postsRef = getDatabaseCollectionContext();
    if (event.target.classList.contains("delete-post__submit")) {
      const postId = event.target.parentElement.querySelector(
        ".delete-post__id"
      ).value;
      console.log(postId);

      postsRef.doc(postId).delete();
      postsRef.get().then(posts => {
        getAppContext().innerHTML = Posts(posts);
      });
    }
  });

  //update request
  getAppContext().addEventListener("click", function() {
    if (event.target.classList.contains("update-post__submit")) {
      const postId = event.target.parentElement.querySelector(
        ".update-post__id"
      ).value;
      const postTitle = event.target.parentElement.querySelector(
        ".update-post__postTitle"
      ).value;
      const postContent = event.target.parentElement.querySelector(
        ".update-post__postBody"
      ).value;

      const postsRef = getDatabaseItemContext(postId);
      postsRef.update({
        title: postTitle,
        content: postContent
      });

      postsRef.get().then(post => {
        getAppContext().innerHTML = Post(post);
      });
    }
  });
}

//allows for focus on the single post
function focusOnSingularPost() {
  getAppContext().addEventListener("click", function() {
    if (event.target.classList.contains("edit-post__submit")) {
      const postId = event.target.parentElement.querySelector(
        ".delete-post__id"
      ).value;
      console.log(postId);
      const postsRef = getDatabaseItemContext(postId);
      postsRef.get().then(post => {
        getAppContext().innerHTML = Post(post);
      });
    }
  });
}

function getDatabaseCollectionContext() {
  const db = firebase.firestore();
  const postsRef = db.collection("posts");
  return postsRef;
}

function getDatabaseItemContext(id) {
  const db = firebase.firestore();
  const postsRef = db.collection("posts").doc(id);
  return postsRef;
}

function getAppContext() {
  const app = document.querySelector("#app");
  return app;
}
