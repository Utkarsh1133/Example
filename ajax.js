let timer
let deleteFirstPhotoDelay

async function start() {
  try {
    const response = await fetch("https://api.thedogapi.com/v1/breeds")
    const data = await response.json()
    createBreedList(data.message)
  } catch (e) {
    console.log("There was a problem fetching the breed list.")
  }
}

start()

function createBreedList(breedList) {
  document.getElementById("breed").innerHTML = `
  <select onchange="loadByBreed(this.value)">
        <option>Choose a dog breed</option>
        ${Object.keys(breedList).map(function (breed) {
          return `<option>${breed}</option>`
        }).join('')}
      </select>
  `
}

async function loadByBreed(breed) {
    const response = await fetch(`https://api.thedogapi.com/v1/images/`)
    const data = await response.json()
    createSlideshow(data.message)
  
}


















