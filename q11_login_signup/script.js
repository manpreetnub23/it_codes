document.getElementById("signupForm").addEventListener("submit", (event) => {
    event.preventDefault();
    fetch("http://localhost:10000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: document.getElementById("signupUsername").value,
        username: document.getElementById("signupUsername").value,
        password: document.getElementById("signupPassword").value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
  
  document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    fetch("http://localhost:10000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: document.getElementById("loginUsername").value,
        password: document.getElementById("loginPassword").value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        }
        if (data.error) {
          alert(data.error);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });