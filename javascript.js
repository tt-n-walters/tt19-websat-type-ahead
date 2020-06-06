let cities
let input
let results
url = "https://gist.githubusercontent.com/tt-n-walters/26659d320203095f6a824b6c90af5326/raw/36a6fb4aea08d3641a39af99887bb6522f47d032/cities.json"

fetch(url).then(blob => blob.json()).then(json => cities = json)


function setup() {
    input = document.getElementById("search")
    results = document.getElementById("results")

    input.addEventListener("keyup", search)
}

function search(event) {
    let query = input.value
    let matched = cities.filter(function(city) {
        return city.city.includes(query)
    })
    // Clear the restults
    results.innerHTML = ""
    // Add all the new results
    for (let city of matched) {
        let listItem = document.createElement("li")
        listItem.innerText = city.city
        results.appendChild(listItem)
    }
}

window.addEventListener("load", setup)
