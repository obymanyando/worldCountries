const flexContainer = document.querySelector('.flex-container')
const reverseButton = document.querySelector('.reverse-button')
const searchInput = document.querySelector('input')
const firstLetter = document.querySelector('.firstLetter')
const anyLetter = document.querySelector('.anyLetter')
const totalCountries = document.querySelector('.title__totalCountries')
const countryCounter = document.querySelector('.title__countryCounter')
numOfCountries = document.querySelector('#counterSpan')
let copiedCountries = [...countries]

/* function to build HTML and loop in countries array */

const showCountries = (arr) =>
{
    for (const country of arr) {
        let block = document.createElement('div')
        block.setAttribute('class', 'block')
        block.style.border = '3px solid #e9e9e9'
        block.style.color = '#5e6161'
        let text = document.createElement('h1')
        text.textContent = country
        block.appendChild(text)
        flexContainer.appendChild(block)
    }
}
showCountries(copiedCountries)

/* event listener for dynamic search on input */

searchInput.addEventListener('input', (e) =>
{
    flexContainer.textContent = ''
    let searchTerm = e.target.value

    const copiedCountries = countries.filter((country) =>
    {
        return country.toLowerCase().startsWith(searchTerm.toLowerCase())
    })
    showCountries(copiedCountries)
})

/* function for event listener on FIRST LETTER search button */

const startsWithLetter = () =>
{
    flexContainer.textContent = ''
    let searchTerm = searchInput.value
    copiedCountries = countries.filter((country) =>
    {
        return country.toLowerCase().startsWith(searchTerm.toLowerCase())
    })

    showCountries(copiedCountries)

    countryCounter.textContent = `The number of country names starting with - ${searchTerm.toUpperCase()} - is: ${copiedCountries.length}.`
    countryCounter.style.marginBottom = '20px'
    countryCounter.style.color = '#434544'
    countryCounter.style.backgroundColor = '#f2f7f4'

}

/* function for event listener on ANY LETTER search button */

function includesLetter()
{
    flexContainer.textContent = ''
    let searchTerm = searchInput.value
    copiedCountries = countries.filter((country) =>
    {
        return country.toLowerCase().includes(searchTerm.toLowerCase())
    })
    showCountries(copiedCountries)
}

/* function for event listener on sort button */

const sort = () => 
{
    flexContainer.innerHTML = ''

    showCountries(copiedCountries.reverse())

}

// display total number of countries

numOfCountries.textContent = copiedCountries.length;
numOfCountries.style.color = 'green'
numOfCountries.style.backgroundColor = 'whitesmoke'
numOfCountries.style.margin = '2px'
numOfCountries.style.padding = '1px'

/* event listeners */

firstLetter.addEventListener('click', startsWithLetter)
anyLetter.addEventListener('click', includesLetter)
reverseButton.addEventListener('click', sort)

/* END */