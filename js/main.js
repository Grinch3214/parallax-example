const classesArray = ['moon', 'tree', 'santa', 'xmas-background', 'xmas-container', 'santa-box', 'card-box', 'card']
const elements = {}
classesArray.forEach(key => Object.assign(elements, {
	[key]: document.querySelector(`.${key}`)
}))

const heightSecondSection = elements.card.offsetHeight

window.addEventListener('scroll', function() {
	let value = window.scrollY
	elements.moon.style.transform = `translateX(-50%) translateY(${value * 0.45}px)`
	elements.tree.style.transform = `translateY(${-value * 0.25}px)`
	elements['xmas-background'].style.height = `${value * 0.25 + 5}px`
	elements['xmas-container'].style.transform = `translateY(${value * 0.45}px)`
	elements['santa-box'].style.transform = `translateX(-50%) translateY(${value * 0.15}px)`
	elements['card-box'].style.transform = `translateY(${(heightSecondSection - value) * 0.55}px)`
})