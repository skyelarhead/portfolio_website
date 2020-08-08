
var count = 0;
var fileNames = ["projectPhotos/1.jpg", "projectPhotos/2.jpg", "projectPhotos/4.jpg", "projectPhotos/5.jpg"
,"projectPhotos/7.jpg","projectPhotos/8.jpg","projectPhotos/9.jpg","projectPhotos/10.jpg"];


function backgroundImageChange(){
	if(count === fileNames.length) count = 0;
	var bg = document.getElementById("headerForJS");
	bg.style.backgroundImage = "url('"+fileNames[count]+"')";
	count++;
}
setInterval(backgroundImageChange, 3000);  



