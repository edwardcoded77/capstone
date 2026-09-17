console.log("Ttesting Javascript");
let countryBtn = document.getElementById("country");
let yearBtn = document.getElementById("year");
let searchBtn = document.getElementById("button-id");
let countrySearch = document.getElementById("country-search");
let resultsScreen = document.getElementById("result-card");
let clearButton = document.getElementById("clearButton");
let resultpanel = document.getElementById("result-id");


let Timer;

async function searchCountry() {
  let typedCountry = countrySearch.value.trim();
  let dropDownCountry = countryBtn.value;

  let year = yearBtn.value;

  // choose which country to use 
  let country = typedCountry || dropDownCountry ;
  console.log("Country:", country);
  console.log("Year:", year);

  let requestUrl = `https://studentedward-data-api.edwardolagunju25.workers.dev/api/v1/datasets/Global-Life-Expectancy/records?search=${country}&year=${year}&limit=100`
  console.log("Request URL:", requestUrl);

  let response = await fetch(requestUrl);
  let data = await response.json();
  console.log("Get Data:", data);
  
  //  Find the matching country and year
  let result = data.records.find(record => record.country.toLowerCase() === country.toLowerCase() && record.year === year);
  console.log("Get records:", result);


   // if matching record is not found
  if (!result){
    resultsScreen.innerHTML = `<h3>No result found</h3> <p>We couldn't find life expectancy information for ${country} in ${year}
     </p> <p>Please try another country or year.</p>`;

      return;
 }
   
   // if matching is found
    if (result){
      resultsScreen.innerHTML = `
       <h3>${result.country}</h3>
       <p class="year">${result.year}</p>
       <p class="life-expectancy"> Average life expectancy: ${result.life_expectancy} years</p> 
      
      `}

   resultpanel.hidden = false;
}
   
// reload the page after 1 minutes
   
        clearTimeout(Timer);

        Timer = setTimeout(function () {
        location.reload();
        }, 60000); 
  


 // Clear button
    clearButton.addEventListener("click", () => {

    // Clear buttons
    countrySearch.value = "";
    countryBtn.value = 0;
    yearBtn.value = 0;

    // Reset results
    resultsScreen.innerHTML = `
        <h3>Search for a country</h3>
        <p>Choose a country and year, then click Search.</p> `;
    console.log("Search cleared");

});


searchBtn.addEventListener("click", searchCountry);







































// let countryBtn = document.getElementById("country");
// let yearBtn = document.getElementById("year");
// let searchBtn = document.getElementById("button-id");
// let countrySearch = document.getElementById("country-search")
// let resultsScreen = document.getElementById("result-card");

// let Timer;

// async function searchLifeExp() {
//     let country = countryBtn.value.trim();
//     let year = yearBtn.value;

//     let requestUrl = `https://studentedward-data-api.edwardolagunju25.workers.dev/api/v1/datasets/Global-Life-Expectancy/records?search=${country}&year=${year}&limit=100`;
//     console.log("Request URL:", requestUrl);

//     let response = await fetch(requestUrl);
//     let data = await response.json();
//      console.log("API data:", data);
    
//      // Find a record that matches the selected year
//     let result = data.records.find(record => record.year === year);
//     console.log("Matching result:", result);

//     // Put this HTML inside result card
//     resultsScreen.innerHTML = `
//     <h3>${result.country}</h3>
//     <p class="year">${result.year}</p>
//     <p class="life-expectancy">
//         Life Expectancy: ${result.life_expectancy} years
//     </p>
// `;

//   // Wait 30 seconds, then clear the result
//     clearTimeout(Timer);
//     Timer= setTimeout(function () {
//     location.reload();
//   }, 30000);

// }

// searchBtn.addEventListener("click", searchLifeExp);















































