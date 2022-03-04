// cleanup to match our code
// set up button click for upvote button

// define function
async function upvoteClickHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
  
    const response = await fetch("/api/posts/upvote", {
      method: "PUT",
      body: JSON.stringify({
        post_id: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  
  // query fxn
  document
    .querySelector(".upvote-btn")
    .addEventListener("click", upvoteClickHandler);
  