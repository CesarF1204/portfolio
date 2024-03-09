//nav
$(document).ready(function() {
    $(window).scroll(function() {
      if(this.scrollY > 20) {
        $('nav').addClass('sticky');
      }else {
        $('nav').removeClass('sticky');
      }
    })
  });


//introduction typewriter
class TypeWriter {
constructor(txtElement, words, wait = 1000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}
type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];
    // Check if deleting
    if(this.isDeleting) {
    // Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    // Add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    // Initial Type Speed
    let typeSpeed = 150;
    if(this.isDeleting) {
    typeSpeed /= 2;
    }
    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
    // Make pause at end
    typeSpeed = this.wait;
    // Set delete to true
    this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    // Move to next word
    this.wordIndex++;
    // Pause before start typing
    typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed);
}
}
// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
const txtElement = document.querySelector('.txt-type');
const words = JSON.parse(txtElement.getAttribute('data-words'));
const wait = txtElement.getAttribute('data-wait');
// Init TypeWriter
new TypeWriter(txtElement, words, wait);
}


//tooltip project description
$(function(){
    $('[data-toggle="tooltip"]').tooltip();
});


//burger
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', () => {
		//Toggle Nav
		nav.classList.toggle('nav-active');
		//Animate Links
		navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = ''
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.8}s`;
			}
		});
		//Burger Animation
		burger.classList.toggle('toggle');
	});
}
navSlide();


//carousel certificates
$('.carousel').carousel({
    interval: 5000
  })

