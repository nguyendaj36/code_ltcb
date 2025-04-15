function toggleForm() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
  
    loginForm.classList.toggle("hidden");
    registerForm.classList.toggle("hidden");
  }
  
  function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
  
    if (email === "admin@gmail.com" && password === "123456") {
      alert("Đăng nhập thành công!");
    } else {
      alert("Sai tài khoản hoặc mật khẩu.");
    }
  }
  
  function register() {
    const email = document.getElementById("register-email").value;
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    const confirm = document.getElementById("register-confirm").value;
  
    if (!email || !username || !password || !confirm) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }
  
    if (password !== confirm) {
      alert("Mật khẩu xác nhận không khớp.");
      return;
    }
  
    alert("Đăng ký thành công! Bạn có thể đăng nhập.");
    toggleForm();
  }
  