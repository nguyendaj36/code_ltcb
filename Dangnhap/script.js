// Hàm chuyển đổi giữa form đăng nhập và form đăng ký
function toggleForm() {
  const loginForm = document.getElementById("dangnhap-form"); // Lấy phần tử form đăng nhập
  const registerForm = document.getElementById("dangki-form"); // Lấy phần tử form đăng ký

  // Ẩn hiện luân phiên hai form bằng cách thêm/xóa class "hidden"
  loginForm.classList.toggle("hidden");
  registerForm.classList.toggle("hidden");
}
const sampleAccount = {
  email: "user@example.com",
  password: "123456"
};
// Hàm xử lý khi người dùng nhấn nút đăng nhập
function login() {
  const email = document.getElementById("login-email").value;     // Lấy giá trị email từ input
  const password = document.getElementById("login-password").value; // Lấy giá trị mật khẩu từ input

  if(email === sampleAccount.email && password === sampleAccount.password) {
    alert("Đăng nhập thành công!"); // Thông báo đăng nhập thành công
  }
  else {
    alert("Đăng nhập thất bại!"); // Thông báo đăng nhập thất bại
  }
}



// Hàm xử lý khi người dùng nhấn nút đăng ký
function register() {
  const email = document.getElementById("register-email").value;         // Lấy email
  const username = document.getElementById("register-username").value;   // Lấy tên người dùng
  const password = document.getElementById("register-password").value;   // Lấy mật khẩu
  const confirm = document.getElementById("register-confirm").value;     // Lấy mật khẩu xác nhận

  // Kiểm tra nếu có ô nào bị bỏ trống
  if (!email || !username || !password || !confirm) {
    alert("Vui lòng điền đầy đủ thông tin."); // Thông báo lỗi
    return;
  }

  // Kiểm tra mật khẩu và mật khẩu xác nhận có khớp không
  if (password !== confirm) {
    alert("Mật khẩu xác nhận không khớp."); // Thông báo lỗi
    return;
  }

  // Thông báo đăng ký thành công và chuyển sang form đăng nhập
  alert("Đăng ký thành công! Bạn có thể đăng nhập.");
  toggleForm();
}
