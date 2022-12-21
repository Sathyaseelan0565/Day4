//  1) Get all the countries from Asia continent / region

let request_1  = new XMLHttpRequest();

request_1.open('GET','https://restcountries.com/v3.1/all',true)

request_1.send();

request_1.onload = function () {

 let data = JSON.parse(request_1.response);
 const asia = data.filter((asia) => {
    if(asia.region === "Asia"){
        return asia.name;
    }
 })
 console.log(asia);
}


// Get aii the countries with a population of less than 2 lakhs,

let request_2 = new XMLHttpRequest();

request_2.open('GET', 'https://restcountries.com/v3.1/all',true);

request_2.send();

request_2.onload = function () {

    let countryData =JSON.parse(request_2.response);
    const populate = countryData.filter((element) => {
        return element.population < 200000;
    })
    console.log(populate);
}

// Print the following details name, capital, flag using forEach function

let request_3 = new XMLHttpRequest();

request_3.open('GET', 'https://restcountries.com/v3.1/all',true);

request_3.send();

request_3.onload = function () {

    let countryData_1 = JSON.parse(this.response);
    countryData_1.forEach((element) => {
        console.log(element.name, element.capital, element.flag);
    });
}

// Print the total population of countries 

let request_4 = new XMLHttpRequest();

request_4.open('GET','https://restcountries.com/v3.1/all',true);

request_4.send();

request_4.onload = function () {
    let countryData_2 = JSON.parse(this.response);
    const population = countryData_2.reduce((acc, element) => {
        return acc + element.population;
    })
    console.log(population);
}

// Print the country which use US Dollars as currency

let request_5 = new XMLHttpRequest();

request_5.open('GET', 'https://restcountries.com/v3.1/all',true);

request_5.send();

request_5.onload = function () {
    let data = JSON.parse(this.response);
    for( i = 0; i < data.length; i++){
        if(data[i].currencies[0].code === 'USD') {
            console.log("name: ", data[i].name, "==>", data[i].currencies[0].code);
        }
    }
}
