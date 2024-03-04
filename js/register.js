function getValueUser() {
  let User = {};
  let arrField = document.querySelectorAll(
    ".account_form input, .account_form select"
  );
  console.log(arrField);
  for (let i = 0; i < arrField.length; i++) {
    let id = arrField[i].id;
    let value = arrField[i].value;
    User[id] = value;
  }
  var isValid = true
    isValid &= 
        checkEmptyValue(User.name, 'tbname')
    isValid &= 
        checkGender(User.gender, 'tbgender')
    isValid &= 
        checkEmptyValue(User.phone, 'tbphone') &&
        checkNumberPhone (User.phone, 'tbphone',10)
    isValid &= 
        checkEmptyValue(User.email, 'tbemail') &&
        checkEmailValue(User.email, 'tbemail')
    isValid &= 
        checkEmptyValue(User.password, 'tbpassword') &&
        checkPassword(User.password, 'tbpassword',6,10)
    isValid &= 
        checkEmptyValue(User.confirmPassword, 'tbconfirmPassword') &&
        checkConfirmPassword(User.confirmPassword, 'tbconfirmPassword') 
    if(isValid){
        return User
    }
}

function addUser() {
  let User = getValueUser();
  if(User){
    let promise = axios({
      url: "https://shop.cyberlearn.vn/api/Users/signup",
      method: "POST",
      data: User,
    });
    promise
      .then(function (res) {
        console.log(res);
        displayNotify(res.data.message, res.status);
      })
      .catch(function (err) {
        console.log(err);
        displayNotify(`Đăng ký tài khoản thất bại ${err.response.data.message}`, err.response.status);
      });
  }
}
document.querySelector(".btn_submit").onclick = addUser;

function displayNotify(message, status){
    var firstLetter = status.toString().split('')
    Toastify({
        text: message,
        duration: 2000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        style: {
          background: firstLetter[0] == 2 ? "green":"red",
          color: "white",
        },
      }).showToast();
}
