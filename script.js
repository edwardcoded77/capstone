let countryBtn = document.getElementById("country");
let yearBtn = document.getElementById("year");
let searchBtn = document.getElementById("button-id");
// let resultsScreen = document.getElementById("results");
let resultsScreen = document.getElementById("result-card");

let findTimer;

async function searchLifeExpectancy() {
    let country = countryBtn.value.trim();
    let year = yearBtn.value;


    let requestUrl = `https://studentedward-data-api.edwardolagunju25.workers.dev/api/v1/datasets/Global-Life-Expectancy/records?search=${encodeURIComponent(country)}&year=${year}&limit=100`;
    console.log("Request URL:", requestUrl);

    let response = await fetch(requestUrl);
    let data = await response.json();
     console.log("API data:", data);
    
     // Find a record that matches the selected year
    let result = data.records.find(record => record.year === year);
    console.log("Matching result:", result);

    
     // Check if no result was found 
    //  if (!result) 
    //  { resultsScreen.innerHTML = ` <h3>No results found</h3> 
    //  <p>We couldn't find life expectancy information for the selected country and year.</p> 
    //  <p>Please try another country or year.</p> `; return; }


   // Put the API info into HTML
//     resultsScreen.innerHTML = `
//     <h3>Result</h3>
//     <p>Country:${result.country}</p>
//     <p>Year: ${result.year}</p>
//     <p>Life expectancy in ${result.year}: ${result.life_expectancy} years</p>
// `;

    resultsScreen.innerHTML = `
    <h3>${result.country}</h3>
    <p class="year">${result.year}</p>
    <p class="life-expectancy">
        Life Expectancy: ${result.life_expectancy} years
    </p>
`;

  // Wait 30 seconds, then clear the result
    clearTimeout(findTimer);
    findTimer= setTimeout(function () {
    location.reload();
  }, 30000);

}

searchBtn.addEventListener("click", searchLifeExpectancy);



















































