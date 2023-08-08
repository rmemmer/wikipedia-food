let categoryURL = "https://en.wikipedia.org/w/api.php?action=parse&page=Category:Cuisine_by_country&format=json&origin=*"
let url = "https://en.wikipedia.org/w/api.php?action=parse&page=Bara_brith&format=json&origin=*"

// links to each API endpoint
let mappingURL = "https://prices.runescape.wiki/api/v1/osrs/mapping"
let priceURL = "https://prices.runescape.wiki/api/v1/osrs/latest"
let volURL = "https://api.weirdgloop.org/exchange/history/osrs/latest?id=2"

// header object
let headers = new Headers({
    "Accept"       : "application/json",
    "Content-Type" : "application/json",
    "User-Agent": "Personal portfolio trading project.",
    "Email" : "rmemmer3@gmail.com"
})

// fetch requests for each API endpoint. 
$.getJSON(categoryURL, data => console.log(data.parse.text))

