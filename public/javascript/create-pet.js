// cleanup to match our code

// functionality to allow creation of new post
async function newPetHandler(event) {
    event.preventDefault();
  
    const petName = document.querySelector('input[name="petName"]').value;
    const petAge = document.querySelector('input[name="age"]').value;
    const petGender = document.querySelector('input[name="gender"]').value;
    const petBreed = document.querySelector('input[name="breed"]').value;
    const petBio = document.querySelector('input[name="description"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        petName,
        petAge,
        petGender,
        petBreed,
        petBio,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      document.location.replace("/pet");
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.login-form').addEventListener('submit', newPetHandler);