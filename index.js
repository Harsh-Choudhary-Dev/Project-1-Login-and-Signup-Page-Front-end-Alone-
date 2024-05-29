
  // Example usage
  const imageAPIUrl =  'https://api.unsplash.com/search/photos?query=nature&client_id=5SZRubdVfCauf7lCDYjgg9LWWyk170bjKpZAJumBgBw'

  fetch(imageAPIUrl).then((data)=>{return (data.json())}).then((data)=>{
    
    document.body.style.backgroundImage=`url(${data.results[Math.floor(Math.random() * 10)].urls.full})`
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.width = "100%"; // Ensure it fills the container wi
  document.body.style.height = "100vh";})

    function validateForm() {
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const errorMessage = document.getElementById("error-message");
  
        errorMessage.innerText = ""; // Clear any previous error messages
  
        // Username validation (replace with your desired logic)
        if (username.value.length < 6) {
          errorMessage.innerText = "Username must be at least 6 characters long.";
          return false;
        }

  
        // Password validation (replace with your desired logic)
        if (password.value.length < 8) {
          errorMessage.innerText = "Password must be at least 8 characters long.";
          return false;
        }
  
        // Form is valid, submit it
        return true;
      }