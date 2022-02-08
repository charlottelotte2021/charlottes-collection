import collection from './collection.js'



collection.forEach((item)=>{
let ul = document.querySelector('ul')
	let li = document.createElement('li')
	ul.appendChild(li)
	li.className = "box flex" 
	li.insertAdjacentHTML('afterbegin', `<img src= ${item.cover}>`)
	li.insertAdjacentHTML('beforeend', `<button class="btn"> ${item.language} </button>`)
  	li.insertAdjacentHTML('beforeend', `<h2 class="one"> ${item.name} </h2>`)
  	li.insertAdjacentHTML('beforeend', `<h1 class="one"> ${item.author} </h1>`)
  	li.insertAdjacentHTML('beforeend', `<p class="one"> ${item.releaseYear} </p>`)
  	li.insertAdjacentHTML('beforeend', `<p class="one"> ${item.edition} </p>`)
 

let frenchCategory =  collection.filter((item) => {
	return collection[item].includes('French')
})

console.log(frenchCategory)

// let frenchCategory = collection.filter(language => item.language === 'French'); 
// console.log(frenchCategory) 



// li.addEventListener('click', (e) => {
	
// if (frenchCategory === 'True') {
// console.log('Hello')
//  }
 }) 


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


