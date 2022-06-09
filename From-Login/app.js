var COREECT_USERNAME1 = 'taikhoanbacsy01';
var COREECT_PASSWORD1 = '123';

var COREECT_USERNAME2 = 'taikhoanbacsy02';
var COREECT_PASSWORD2 = '123';

var COREECT_USERNAME3 = 'taikhoanbacsy03';
var COREECT_PASSWORD3 = '123';

var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');
var fromLogin = document.getElementById('form-login');

if(fromLogin.attachEvent){
    fromLogin.attachEvent('submit', onFormSubmit);
}else{
    fromLogin.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(e){
    var username = inputUsername.value;
    var password = inputPassword.value;
    if(username == COREECT_USERNAME1 && password == COREECT_PASSWORD1){
         setTimeout(function(){
            location.replace("/ModuleNurse/index.html");
          });
    }else if(username == COREECT_USERNAME2 && password == COREECT_PASSWORD2) {
        setTimeout(function(){
            location.replace("/Doctor_01/index.html");
          });
    }else {
        setTimeout(function(){
            location.replace("/Doctor_02/bacsytiem.html");
          });
    }
}