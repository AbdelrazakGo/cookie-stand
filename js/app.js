'use strict'


let salmon = document.getElementById('salmon');
let numberOfHours = 14;
let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

function getRandomInt(min, max) {   
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

let seattleShop = {
    name: "Seattle",
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    cookiesPerHour: [],
    total: 0,
    generate: function(){
        for(let i=0;i<numberOfHours;i++){
            let generatedValue = getRandomInt(this.minCust,this.maxCust);
            let finalValue = generatedValue * this.avgCookieSale;
            finalValue = Math.floor(finalValue); 
            this.total += finalValue;
            this.cookiesPerHour.push(finalValue)
        }
    }
}

let TokyoShop = {
    name: "Tokyo",
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 1.2,
    cookiesPerHour: [],
    total: 0,
    generate: function(){
        for(let i=0;i<numberOfHours;i++){
            let generatedValue = getRandomInt(this.minCust,this.maxCust);
            let finalValue = generatedValue * this.avgCookieSale;
            finalValue = Math.floor(finalValue); 
            this.total += finalValue;
            this.cookiesPerHour.push(finalValue)
        }
    }
}

let dubaishop = {
    name:"Dubai",
    minCust:11,
    maxCust:38,
    avgCookieSale:3.7,
    cookiesPerHour: [],
    total:0,
    generate:function(){
        for(let i=0;i<numberOfHours;i++){
            let generatedValue = getRandomInt(this.minCust,this.maxCust);
            let finalValue = generatedValue * this.avgCookieSale;
            finalValue = Math.floor(finalValue);
            this.total +=finalValue;
            this.cookiesPerHour.push(finalValue)
        }
    }

}

let parisshop = {
    name:"paris",
    minCust:20,
    maxCust:38,
    avgCookieSale:2.3,
    cookiesPerHour:[],
    total : 0,
    generate:function(){
        for(let i=0;i<numberOfHours;i++){
            let generatedValue = getRandomInt(this.minCust,this.maxCust);
            let finalValue = generatedValue * this.avgCookieSale;
            finalValue = Math.floor(finalValue);
            this.total += finalValue;
            this.cookiesPerHour.push(finalValue)
        }
    }

}


let limashop = {
    name:"Lima",
    minCust:2,
    maxCust:16,
    avgCookieSale:4.6,
    cookiesPerHour:[],
    total:0,
    generate: function(){
        for(let i=0;i<numberOfHours;i++){
        let generatedValue = getRandomInt(this.minCust,this.maxCust);
        let finalValue = generatedValue * this.avgCookieSale
        finalValue = Math.floor(finalValue);
        this.total += finalValue;
        this.cookiesPerHour.push(finalValue);
         }
    }
}


function writeToDOM(shop){

    shop.generate()

    let title = document.createElement("h1")
    title.textContent = shop.name
    salmon.appendChild(title)
    let HTMList = document.createElement("ul")
    for(let i=0;i<numberOfHours;i++){
        let item = document.createElement("li")
        item.textContent = hours[i] + ": " + shop.cookiesPerHour[i] + " cookies"
        HTMList.appendChild(item)
    }
    let totalitem = document.createElement("li")
    totalitem.textContent = "Totle: "+shop.total+" cookies"
    HTMList.appendChild(totalitem)
    salmon.appendChild(HTMList)    

}


writeToDOM(seattleShop);
writeToDOM(TokyoShop);
writeToDOM(dubaishop);
writeToDOM(parisshop);
writeToDOM(limashop);
