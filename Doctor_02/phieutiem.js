let chucnang = document.querySelector('.chucnang');
let hoanthanh = document.querySelector('.hoanthanh');
chucnang.onclick = function () {
    document.querySelector('.chucnang').style.display = "none";
    document.querySelector('.hoanthanh').style.display = "none";
    window.print();
    document.querySelector('.chucnang').style.display = "block";
    document.querySelector('.hoanthanh').style.display = "block";
}
hoanthanh.onclick = function(){
    location.href='/bacsytiem.html'
}