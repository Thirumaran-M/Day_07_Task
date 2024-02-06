/*Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).*/

let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    let res = JSON.parse(request.response);
    //console.log(res);
    
    //1. Get all the countries from Asia continent/region using Filter function
    let Asia = res.filter((ele)=>ele.region==="Asia");
    //console.log(Asia);
    let Country = Asia.map((ele)=>ele.name.common);
    console.log("Countries from Asia continent:", Country);

    //2. Get all the countries with a population of less than 2 lakhs using Filter function
    let popu = res.filter((ele)=>ele.population < 200000);
    //console.log(popu);
    let popu_Country = popu.map((ele)=>ele.name.common);
    console.log("Population less than 2 lakhs:", popu_Country);

    //3. Print the following details name, capital, flag, using forEach function
    res.forEach(ele => {
        console.log("Name: " + ele.name.common);
        let capital;
        capital = (ele.capital == undefined)? capital = "No Data": capital = ele.capital[0];
        console.log("Capital: " + capital);
        console.log("Flag: " + ele.flag);
    });

    //4. Print the total population of countries using reduce function
    let all_popu = res.map((ele)=>ele.population);
    let tot_popu = all_popu.reduce((acc,cv)=>acc+cv,0);
    console.log("Total Population: ",tot_popu);

    //5. Print the country that uses US dollars as currency.
    let countries_using_usd = res.filter(country => {
        let currencies = country.currencies;
        if (currencies) {
            for (let currencyCode in currencies) {
                if (currencyCode === "USD") {
                    return true;
                }
            }
        }
        return false;
    });

    let countries_using_usd_names = countries_using_usd.map(country => country.name.common);
    console.log("Countries using US dollars as currency:", countries_using_usd_names);
}