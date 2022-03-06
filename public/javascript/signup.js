// listen for submit event in the form
function signupFormHandler(event) {
  event.preventDefault();
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  // POST method for user interaction to go from form to our server
  // use conditional to make sure all fields have values before making the POST request
  if (username && email && password) {
    const response = await fetch("/api/user", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // check the response status
    if (response.ok) {
<<<<<<< HEAD
      document.location.replace('/login');
=======
      console.log("success");
>>>>>>> 7f63e352850971ff0b87372a72ff553c5e490f7c
    } else {
      alert(response.statusText);
    }
  }
}

<<<<<<< HEAD
document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);
=======
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
>>>>>>> 7f63e352850971ff0b87372a72ff553c5e490f7c
