const countriesList = document.querySelector("main");

fetch("https://restcountries.com/v3.1/all").then(function(response){
    return response.json();
})
.then(function(result){
    console.log(result)    
    const countries = result;
    for (country of countries){
        countriesList.insertAdjacentHTML("beforeend", `
            
            <article class="#card-country">
                <img src="${country.flags.svg}" alt="">
                <div>
    <h2>${country.name.common}</h2>

            <div class="div-ul">
                <ul>
                    <li>Capital:${country.capital}</li>
                    <li>Poblacion:${country.population}</li>
                </ul>
            </div>
                
                </div>
                
                
            </article>
            
            `)
    }
});

