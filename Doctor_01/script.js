let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation')
let bangsangloc = document.querySelector('.bangsangloc')
let timkiem = document.querySelector('.timkiem');
var btn = document.getElementById("myBtn");

btn.onclick = setTimeout(function(){
    location.replace("/sang_loc_tiem_chung/index.html");
  });



menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    bangsangloc.classList.toggle('active');
    timkiem.classList.toggle('active');
    search.classList.toggle('active');
}
let search = document.querySelector('.search');
timkiem.onclick = function () {
    search.classList.toggle('active');
}
// add active class in selected list item
let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        let j = 0;
        while (j < list.length) {
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
    }
}

var btn = document.getElementById("hoanthanh");
btn.onclick = function () {
    location.href = '/index.html'
}

function myFunction(){
    location.href = 'http://www.hyperlinkcode.com/button-links.php'
    // mở tab mới 
    // window.open("http://www.hyperlinkcode.com/button-links.php");
    // window.focus();
}
    
const btnLogout = document.getElementById('btnLogout');
btnLogout.onclick = () => {
    setTimeout(function(){
        location.replace("/Home/Home-Page/index.html");
      });
}

