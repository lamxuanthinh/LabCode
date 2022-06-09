var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// -------------------------modal
let yes = document.querySelector('.yes');
yes.onclick = function () {
    location.href = '/bac_si_tiem/phieutiem.html'
}

let no = document.querySelector('.no');
no.onclick = function () {
    location.href = '/bacsytiem.html'
}
// ---------------------------------
let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation')
let khung = document.querySelector('.khung')
let timkiem = document.querySelector('.timkiem');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    khung.classList.toggle('active');
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
// --------------------nhận dữ liệu
var nhandulieu = document.querySelector('.list');
var cccd = document.getElementById('socccd');
var ten = document.getElementById('ht');
var gt = document.getElementById('gt');
var ngaysinh  = document.getElementById('ns');
var sdt = document.getElementById('sdt');
var diachi = document.getElementById('dc');
var ngaytiem1 = document.getElementById('nt1');
var loai1 = document.getElementById('loai1');
var ngaytiem2 = document.getElementById('nt2');
var loai2 = document.getElementById('loai2');
nhandulieu.onclick = function(){
    cccd.value='049203014048';
    ten.value='Lâm Xuân Thịnh';
    gt.value='Nam';
    ngaysinh.value='01-01-2003';
    sdt.value='0123456789';
    diachi.value='Thôn Duy Hà, Bình Dương , Thăng Bình , Quảng Nam';
    ngaytiem1.value='15/10/2021';
    loai1.value='AstraZeneca';
    ngaytiem2.value='15/12/2021';
    loai2.value='AstraZeneca';
    
}

const btnLogout = document.getElementById('btnLogout');

btnLogout.onclick = () => {
    setTimeout(function(){
        location.replace("/Home/Home-Page/index.html");
      });
}