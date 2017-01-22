var bgColors = ["#5EA6A7", "#8EBBAB", "#BDD3AE", "#456877", "#FCF2C6"];

//var bgColors = ["#161F27", "#625F5A", "#3F3943", "#C5BCAF", "#A08062" ];

colorIndex = 0

//moves through the bgColors array
function changeColor() {
 document.getElementById("bgcolor").style.background = bgColors[colorIndex]
 colorIndex = (colorIndex + 1) % bgColors.length
}
//sets time interval of color change
function startColorChange() {
 setInterval("changeColor()",1872)
}
