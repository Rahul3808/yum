//set current year 
/*const yearEl = document.querySelector(".Year");
const currentYear = new Date().getFullYear();
console.log(currentYear)
yearEl.textContent = currentYear; */

//make mobile menu working
const mobileNav = document.querySelector(".nav-mobile-btn");
const headerNav = document.querySelector(".first-section");
mobileNav.addEventListener('click',function(){
headerNav.classList.toggle("nav-open");
});

//SMOOTH SCROLLING
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function(link){
    link.addEventListener("click", function(e){
		e.preventDefault();
		const href = link.getAttribute("href");
		console.log(href);
		
		
///////////////////////////scroll to up
		if (href === "#")
			window.scrollTo({
				top:0,
				behavior:"smooth",
			});
		if (href !== "#" && href.startsWith("#")){
			const sectionel = document.querySelector(href);
			sectionel.scrollIntoView({behavior:"smooth"});
		}
		});
	})
	
//sticky naviagtion
const sectionheroEL = document.querySelector(".hero-sec");

const obs = new IntersectionObserver(
  function(entries){
	const ent = entries[0];
		console.log(ent);
	
	if(ent.isIntersecting === false){
		document.body.classList.add("sticky");
	}
	if(ent.isIntersecting === true){
		document.body.classList.remove("sticky");
	}	
},
{
	root:null,
	threshold:0,
	rootMargin:"-80px",
}
);
obs.observe(sectionheroEL);