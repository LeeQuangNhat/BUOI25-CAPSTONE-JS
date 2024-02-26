
var thongBao = document.querySelectorAll('.sp-thongbao')
function checkEmptyValue(value, idSpan) {
    if (value == "") {
      for (var i = 0; i < thongBao.length; i++) {
        if (thongBao[i].id == idSpan) {
          thongBao[i].innerHTML = "Vui lòng không bỏ trống trường hợp này"
          thongBao[i].style.display = 'inline-block'
        }
      }
      return false;
    } else {
      for (var i = 0; i < thongBao.length; i++) {
        if (thongBao[i].id == idSpan) {
          // thongBao[i].innerHTML = ""
          thongBao[i].style.display = 'none'
        }
      }
      return true;
    }
}

function checkGender(value, idSpan) {
  var gender = ['True', 'False']
  if (gender.includes(value)) {
      document.getElementById(idSpan).innerHTML = ''
      document.getElementById(idSpan).style.display = 'none'
      return true
  } else {
      document.getElementById(idSpan).innerHTML = 'Vui lòng chọn giới tính'
      document.getElementById(idSpan).style.display = 'inline-block'
      return false
  }
}

function checkEmailValue(value, idSpan) {
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var isValid = regexEmail.test(value)
    if(isValid) {
        document.getElementById(idSpan).innerHTML = ''
        return true
    }else{
        document.getElementById(idSpan).innerHTML = 'Email không đúng định dạng'
        document.getElementById(idSpan).style.display = 'inline-block'
        return false
    }
}

function checkPassword(value, idSpan, min,max) {
  const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/ 
  var doDaiKyTu = value.length
  if(passwordRegex.test(value) && doDaiKyTu>=min && doDaiKyTu<=max) {
      document.getElementById(idSpan).innerHTML = ''
      return true
  }else{
      document.getElementById(idSpan).innerHTML = `Vui lòng chọn mật khẩu tối thiểu ${min} ký tự và tối đa ${max} ký tự và chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt`
      document.getElementById(idSpan).style.display = 'inline-block'
      return false
  }
}

function checkNumberPhone (value, idSpan,max){
  const regexPhoneNumber = /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/;
  var doDaiKyTu = value.length
    if(regexPhoneNumber.test(value) && doDaiKyTu==max) {
        document.getElementById(idSpan).innerHTML = ''
        return true
    }else{
        document.getElementById(idSpan).innerHTML = `Số điện thoại không đúng định dạng`
        document.getElementById(idSpan).style.display = 'inline-block'
        return false
    }
}

function checkConfirmPassword(value, idSpan){
  var password = document.getElementById('password').value
  console.log(password)
  if(value == password ){
    document.getElementById(idSpan).innerHTML = ''
    return true
  }else{
    document.getElementById(idSpan).innerHTML = 'Mật khẩu nhập lại không đúng'
    document.getElementById(idSpan).style.display = 'inline-block'
    return false
  }
}
checkConfirmPassword()
