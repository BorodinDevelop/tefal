document.querySelector('.steam-js').addEventListener('click', () => {
	document.querySelector('.modals-layout').style = 'display: block;'
	document.querySelector('.steam-modal').style = 'display: block;'
	document.body.style.top = `-${window.scrollY}px`
	document.body.style.overflow = 'hidden'
	document.body.style.position = 'fixed'
})

document.querySelectorAll('.close-modal').forEach(close => {
	close.addEventListener('click', (event) => {
			event.target.closest('.modal')?.querySelector('iframe')?.setAttribute("src", "")
			if (event.target.closest('.modal')) event.target.closest('.modal').style.display = 'none'
			if (event.target.closest('.compare-modal')) event.target.closest('.compare-modal').style.display = 'none'
			document.querySelector('.modals-layout').style.display = 'none'
			const scrollY = document.body.style.top
			document.body.style.position = ''
			document.body.style.top = ''
			document.body.style.overflow = 'auto'
			window.scrollTo(0, parseInt(scrollY || '0') * -1)
	});
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
			document.querySelector('.modals-layout').style.display = 'none'
			const scrollY = document.body.style.top
			document.body.style.position = ''
			document.body.style.top = ''
			document.body.style.overflow = 'auto'
			window.scrollTo(0, parseInt(scrollY || '0') * -1)
			document.querySelectorAll('.modal').forEach(modal => {
					modal.style.display = 'none'
			})

			document.querySelectorAll("iframe").forEach(iframe => {
					iframe.src = ""
			})
	}
})

const btn_advice = document.querySelector(".button_advice");
const block_advice = document.querySelector(".dop_advice");

btn_advice.addEventListener('click', () => {
	if (window.screen.width >= 1120){
		event.preventDefault();
		block_advice.style.display = "block";
		btn_advice.style.display = "none";
	} else if (window.screen.width <= 991){		
		btn_advice.style.display = "none";
	}
})

const btn_features = document.querySelector(".button_features");
const block_features = document.querySelector(".features_open");

btn_features.addEventListener('click', () => {
 	block_features.style.display = "flex";
 	btn_features.style.display = "none";
})