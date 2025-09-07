// Sign Up
if(document.getElementById("signupForm")){
  document.getElementById("signupForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("signupEmail").value.trim();
    let username = document.getElementById("signupUsername").value.trim();
    let password = document.getElementById("signupPassword").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // cek apakah email sudah terdaftar
    let exist = users.find(user => user.email === email);
    if(exist){
      alert("Email sudah terdaftar!");
      return;
    }

    users.push({email, username, password});
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup berhasil! Silakan login.");
    window.location.href = "index.html";
  });
}

// Login
if(document.getElementById("loginForm")){
  document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(user => user.email === email && user.password === password);

    if(validUser){
      alert("Login berhasil!");
      localStorage.setItem("loggedInUser", JSON.stringify(validUser));
      window.location.href = "pages/home.html";
    } else {
      alert("Email atau password salah!");
    }
  });
}