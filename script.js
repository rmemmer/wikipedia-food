
let categoryURL = "https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page="
let url = "https://en.wikipedia.org/w/api.php?action=parse&page=Bara_brith&format=json&origin=*"
let form = document.getElementById('form')


// links to each API endpoint
let mappingURL = "https://prices.runescape.wiki/api/v1/osrs/mapping"
let priceURL = "https://prices.runescape.wiki/api/v1/osrs/latest"
let volURL = "https://api.weirdgloop.org/exchange/history/osrs/latest?id=2"

// add submit event listener to login form
form.addEventListener('submit', (e) => {
    let search = document.getElementById('userInput')
    $.getJSON(categoryURL + search, data => console.log(data))
})

// fetch requests for each API endpoint. 
//$.getJSON(categoryURL + 'Cat', data => console.log(data))
