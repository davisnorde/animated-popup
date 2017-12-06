var close = document.getElementById("close-button");
var banner = document.getElementById("banner");
close.addEventListener("click", function() {
	banner.classList.toggle("close");
});