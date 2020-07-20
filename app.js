window.addEventListener("load", () => {
	const sounds = document.querySelectorAll(".sound"); 
	const buttons = document.querySelectorAll(".buttons div"); // div dodajemy, bo sa rozne nazwy dla buttonow (np.btn1) i dalismy teraz zbiorcze, dla calego diva; wszystkie divy w buttons
	const content = document.querySelector(".content");
	const colors = [
		"#00848f",
		"#bf94ff",
		"#ffcb6d",
		"#ffa484",
		"#00c9a5",
		"#52fbde"
		];

	buttons.forEach((button, index) =>{
		button.addEventListener('click', function(){
			sounds[index].currentTime=0;
			sounds[index].play();
			createDot(index);
		});
	});

	const createDot = index => {
		const dot = document.createElement("div");
		content.appendChild(dot);
		dot.style.backgroundColor = colors[index];
		dot.style.animation = 'jump 1s ease';
		dot.addEventListener('animationend', function() {
			content.removeChild(this);
		});
	};
});

