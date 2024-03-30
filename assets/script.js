const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let position = 0


const left = document.querySelector(".arrow_left")
const right = document.querySelector(".arrow_right")

const img = document.querySelector(".banner-img")
const imgName = slides.map(slide => slide.image)

const bannerTxt = document.querySelector(".banner-txt")
const tagLine = slides.map(tag => tag.tagLine)

dotsApparition()
Caroussel()


function clickLeft() {
	left.addEventListener("click", () => {

		position--

		if (position < 0) {
			position = slides.length - 1
		}

		console.log(position)

		const contentImg = `./assets/images/slideshow/${imgName[position]}`
		img.setAttribute("src", contentImg)

		bannerTxt.innerHTML = tagLine[position]

		dotClick()

		console.log("Vous avez cliqué sur la flèche de gauche")

	})
}

function clickRight() {
	right.addEventListener("click", () => {

		position++

		if (position > slides.length - 1) {
			position = 0
		}

		const contentImg = `./assets/images/slideshow/${imgName[position]}`
		img.setAttribute("src", contentImg)

		bannerTxt.innerHTML = tagLine[position]

		dotClick()

		console.log("Vous avez cliqué sur la flèche de droite")

	})
}

function dotClick() {
	document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("dot_selected"))
	document.querySelectorAll(".dot")[position].classList.add("dot_selected")
}

function dotsApparition() {

	const dots = document.querySelector(".dots")

	for (i = 0; i < slides.length; i++) {
		const dot = document.createElement("div")
		dot.classList.add("dot")
		dots.appendChild(dot)

		if (i == position) {
			dot.classList.add("dot_selected")
		}
	}
}

function Caroussel() {
	clickLeft()
	clickRight()
}