const dialog = document.querySelector("dialog");
const form = document.querySelector(".form");
const back = document.querySelector("head");
document.querySelector("button").addEventListener("click", () => {
	dialog.showModal();
	console.log(dialog.open);
	console.log("showmodal not work");
	form.classList.toggle("dialog_open");
});

back.addEventListener("click", () => {
	dialog.close();
});

