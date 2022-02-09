import collection from './collection.js'

let section = document.querySelector('section')
let category = document.createElement('div')
let ul = document.querySelector('ul')
section.appendChild(category)

category.insertAdjacentHTML('beforeend', `<button class="cat btn flex"> French </button>`)
category.insertAdjacentHTML('beforeend', `<button class="cat btn flex"> German </button>`)
category.insertAdjacentHTML('beforeend', `<button class="cat btn flex"> English </button>`)
category.insertAdjacentHTML('beforeend', `<button class="cat btn flex"> Other </button>`)
category.insertAdjacentHTML('beforeend', `<button class="cat btn flex"> Show all </button>`)

const createList = (list) => {
	list.forEach((item)=>{

	let li = document.createElement('li')
	ul.appendChild(li)
	li.className = "box flex" 
	li.insertAdjacentHTML('afterbegin', `<img src= ${item.cover}>`)
	// li.insertAdjacentHTML('beforeend', `<button class="btn"> ${item.language} </button>`)
	li.insertAdjacentHTML('beforeend', `<h2 class="one"> ${item.name} </h2>`)
	li.insertAdjacentHTML('beforeend', `<h1 class="one"> ${item.author} </h1>`)
	li.insertAdjacentHTML('beforeend', `<p class="one"> ${item.releaseYear} </p>`)
	li.insertAdjacentHTML('beforeend', `<p class="one"> ${item.edition} </p>`)



}) 
}
 

createList(collection)

let buttonTop = document.querySelectorAll('button.cat.btn.flex')
let buttonTopFr = buttonTop[0]
let buttonTopGe = buttonTop[1]
let buttonTopEn = buttonTop[2]
let buttonTopOt = buttonTop[3]
let buttonTopSh = buttonTop[4]
document.addEventListener('click', (e) => { 
if (e.target === buttonTopGe) {
	let catObjGe = collection.filter(obj => {
		return (obj.language === 'German') })
		ul.innerHTML = ""
		createList(catObjGe)
		}
if (e.target === buttonTopFr) {
	let catObjFr = collection.filter(obj => {
		return (obj.language === 'French') })
		ul.innerHTML = ""
		createList(catObjFr)
		}
	
if (e.target === buttonTopEn) {
	let catObjEn = collection.filter(obj => {
		return (obj.language === 'English') })
		ul.innerHTML = ""
		createList(catObjEn)
}

if (e.target === buttonTopOt) {
let catObjOt = collection.filter(obj => {
		return (obj.language === 'Swedish') })
		ul.innerHTML = ""
		createList(catObjOt)
		}

		if (e.target === buttonTopSh) { 
			ul.innerHTML = ""
			createList(collection)
		}
})




// if (e.target === buttonTop) {
	// 	catObjGe.style.display = "none" }
	// 	else  {
	// 		console.log(catObj)

// let catObj = collection.filter(obj => {
// return (obj.language === 'French')
// })
// console.log(catObj)
// let catObjGe = collection.filter(obj => {
// return (obj.language === 'German') })
// console.log(catObjGe)

// let catObj = collection.filter(obj => {
//  return (obj.language === 'French')
//  })  

// let buttonTop = document.querySelector('button.cat.btn.flex')
// buttonTop.addEventListener('click', (e) => { 
// if (e.target === buttonTop) {
// catObjGe.style.display = "none" }
// else  {
// console.log(catObj)
// }}) 

// let catObjGe = collection.filter(obj => {
// return (obj.language === 'German') 
// catObjGe.style.visibility = "hidden"


// let frenchCategory = collection.filter(language => item.language === 'French'); 
// console.log(frenchCategory) 



// li.addEventListener('click', (e) => {
	
// if (frenchCategory === 'True') {
// console.log('Hello')
//  }



// console.log(frenchCategory)
// let englishCat = collection.filter(language => item.language === 'German')
// console.log(englishCat)
// let germanCat = collection.filter(language => item.language === 'English')
// console.log(germanCat)
 // })

//  {
// 


//  {


//  } }	} 

// let rightCategory = language.filter(lan => language.innerText != 'French'); 
// console.log(rightCategory)

// let category = document.querySelectorAll('button') 
// console.log(collection.language)
// category.forEach((button) => { 
//  if (item.language === 'French') {
// 	console.log('hello')
// }

// })



// Object.entries(collection).forEach(entry => {
// 	const [key, value] = entry;
// 	console.log(key,value)
// 	let ul = document.querySelector('ul')
	// let li = document.createElement('li')
	// ul.appendChild(li)
	// li.className = "box flex" 
//   	ul.insertAdjacentHTML('afterbegin', `<li class="box flex"> ${entry.name} </li>`)
// })


// console.log(collection)


// collection.forEach((object) => (key, value) => {
//     console.log(`${key}: ${value}`)})


