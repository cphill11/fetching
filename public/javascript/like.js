// cleanup to match our code
// set up button click for like button

// define function
async function likeClickHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
  
    const response = await fetch("/api/posts/like", {
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
    .querySelector(".like-btn")
    .addEventListener("click", likeClickHandler);
  