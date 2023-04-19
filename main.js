function signup(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var password = document.getElementById("password").value;
    var user = {
        // username: username,
        email: email,
        // address: address,
        password: password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(email, json);
    alert("Đăng ký thành công !");
    window.location.href = "login.html"
}
function login(e){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(email);
    var data = JSON.parse(user);
    if(user == null){
        alert("Vui lòng nhập đầy đủ thông tin !");
    }
    else if(email == data.email && password == data.password){
        alert("Đăng nhập thành công !");
        window.location.href = "index.html"
    }
    else{
        alert("Đăng nhập thất bại !");
    }
}
function reset(e){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var user = localStorage.getItem(email);
    var data = JSON.parse(user);
    if(user == null){
        alert("Vui lòng nhập đầy đủ thông tin !");
    }
    else if(email == data.email){
        window.location.href = "otp.html"
    }
    else{
        alert("Email không tồn tại!");
    }
}