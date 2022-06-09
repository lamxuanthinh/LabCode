$('#container').qrcode({
    "render": "div",
    "width": 100,
    "height": 100,
    "color": "#3a3",
    "text": "thinhlam"
  });


var abc = document.getElementById('thinh');
var d = document.getElementById('.test')
abc.onclick = () => {
    d.style.opacity = 1;
}