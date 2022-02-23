const accordionTitle = document.querySelectorAll(".accordion_item_title");

accordionTitle.forEach(title => {
	title.addEventListener("click", () => {
		title.classList.toggle("active");
		title.nextElementSibling.classList.toggle("show");
	});
});





const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
	burger.classList.toggle("active");
});