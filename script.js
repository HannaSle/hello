const blackAndWhiteButton = document.querySelector("#black-n-white-btn");
const bodyTag = document.querySelector("body");
const coloredButton = document.querySelector("#colored-btn");
const darkModeButton = document.querySelector("#dark-mode-btn");
const h1Tag = document.querySelector("h1");
const hrTags = document.querySelectorAll("hr");

blackAndWhiteButton.addEventListener("click", ()=>{
	bodyTag.classList.remove("dark-mode", "colored-mode");
	h1Tag.classList.remove("dark-mode-h1", "colored-mode-h1");
	for (let i = 0; i < hrTags.length; i++){
       hrTags[i].classList.remove("dark-mode-hr", "colored-mode-hr");
	};
});

coloredButton.addEventListener("click", ()=>{
	bodyTag.classList.remove("dark-mode");
	bodyTag.classList.add("colored-mode");
	h1Tag.classList.remove("dark-mode-h1");
	h1Tag.classList.add("colored-mode-h1");
	for (let i = 0; i < hrTags.length; i++){
		hrTags[1].classList.remove("dark-mode-hr");
		hrTags[i].classList.add("colored-mode-hr");
	};
});

darkModeButton.addEventListener("click", ()=>{
	bodyTag.classList.remove("colored-mode");
	bodyTag.classList.add("dark-mode");
	h1Tag.classList.remove("colored-mode-h1");
	h1Tag.classList.add("dark-mode-h1");
	for (let i = 0; i < hrTags.length; i++){
		hrTags[i].classList.remove("colored-mode-hr");
        hrTags[i].classList.add("dark-mode-hr");
	};
});
