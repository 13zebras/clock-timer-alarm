const timer = 18000;

function changeImage() {
	console.log("changeImage function started");
	const mainImg = document.getElementById("mainImage");
	mainImg.style.opacity = 0;
	const pwidth = document.getElementById("allContent").clientWidth;
	const pheight = document.getElementById("allContent").clientHeight;
	//const timeStamp = new Date().getTime();
	//const unsplashURL = 'https://loremflickr.com/' + pwidth + '/' + pheight + '/city,night/all?' + timeStamp;
	const unsplashURL = 'https://source.unsplash.com/collection/76123395/' + pwidth + 'x' + pheight;
	mainImg.src = unsplashURL;
	mainImg.addEventListener("load", function(){
		setTimeout(function(){
			mainImg.style.opacity = 1;
		}, 1100)
	});
	setTimeout(changeImage, timer);
};

if (document.readyState == 'loading') {
    // still loading, wait for the event
    document.addEventListener('DOMContentLoaded', changeImage);
} else {
    // DOM is ready!
    changeImage();
}

/* 
Use https://source.unsplash.com/ instead of full API
Call random photos from collections like so:
	https://source.unsplash.com/collection/1656704/1600x900
If I have 2-3 collections, and rotate them with teach cycle
of the code above, then the URL will change and the image
will update.

Put collections in an array:
	let collections = ["3721389", "76123395", "1656704"]
*Note: I'm treating the numbers as a string since that's
how it will be used, as part of a URL
Unsplash collections to use:
https://unsplash.com/collections/3721389/light-pollution
Next one is mine:
https://unsplash.com/collections/76123395/cities-at-night
The last one has mostly photos oriented vertically. Need 
to look at how to crop photos in code before use.
https://unsplash.com/collections/1656704/city-at-night
*/