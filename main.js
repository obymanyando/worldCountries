const flexContainer = document.querySelector('.flex-container')
const reverseButton = document.querySelector('.reverse-button')
const searchInput = document.querySelector('input')
const firstLetter = document.querySelector('.firstLetter')
const anyLetter = document.querySelector('.anyLetter')
let copiedCountries = [...countries]

/* function to build HTML and loop in countries array */

const showCountries = (arr) =>
{
    for (const country of arr) {
        let block = document.createElement('div')
        block.setAttribute('class', 'block')
        block.style.border = '1px solid #dff0f7'
        block.style.color = '#5e6161'
        let text = document.createElement('h2')
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

/* event listeners */

firstLetter.addEventListener('click', startsWithLetter)
anyLetter.addEventListener('click', includesLetter)
reverseButton.addEventListener('click', sort)


