let searchInputEl = document.getElementById("search-input");
// let searchHeader = document.querySelector(".search-header");
let searchResultsEl = document.getElementById("search-result");
let spinnerEl = document.getElementById("spinner");


function createAndAppend(result) {
    let { title, link, description } = result;
    //1. Div Container--result-item
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");
    searchResultsEl.appendChild(resultItemEl);

    //2. Anchor title--result-title
    let resultTitleEl = document.createElement("a");
    resultTitleEl.classList.add("result-title");
    resultTitleEl.textContent = title;
    resultTitleEl.href = link;
    resultTitleEl.target = "_blank";
    resultItemEl.appendChild(resultTitleEl);

    // 3. Title Break
    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);

    //4. Anchor URL
    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.textContent = link;
    urlEl.href = link;
    urlEl.target = "_blank";
    resultItemEl.appendChild(urlEl);

    //5. line break
    let urlBreakEl = document.createElement("br");
    resultItemEl.appendChild(urlBreakEl);

    //6. Paragraph-Description-line description;
    let descriptionEl = document.createElement("p");
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);

    let separateEl = document.createElement("hr");
    separateEl.classList.add("separate");
    resultItemEl.appendChild(separateEl);
};
function displayResults(searchResult) {
    spinnerEl.classList.toggle("d-none");
    for (result of searchResult) {
        createAndAppend(result);
    }
};
searchInputEl.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        searchResultsEl.textContent = "";
        spinnerEl.classList.toggle("d-none");
        const searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonData) {
                let { search_results } = jsonData;
                displayResults(search_results);
            });
    }
});
