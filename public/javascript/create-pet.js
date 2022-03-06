// functionality to allow creation of new post
async function newPetHandler(event) {
    event.preventDefault();
  
    const petName = document.querySelector("#petNameInput").value;
    const petAge = document.querySelector("#ageInput").value;
    const petGender = document.querySelector("#genderInput").value;
    const petBreed = document.querySelector("#breedInput").value;
    const petBio = document.querySelector("#descriptionInput").value;
  
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