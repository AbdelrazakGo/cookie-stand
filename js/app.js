'use strict'


let salmon = document.getElementById('salmon');
let numberOfHours = 14;
let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

function getRandomInt(min, max) {   
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// let seattleShop = {
//     name: "Seattle",
//     minCust: 23,
//     maxCust: 65,
//     avgCookieSale: 6.3,
//     cookiesPerHour: [],
//     total: 0,
//     generate: function(){
//         for(let i=0;i<numberOfHours;i++){
//             let generatedValue = getRandomInt(this.minCust,this.maxCust);
//             let finalValue = generatedValue * this.avgCookieSale;
//             finalValue = Math.floor(finalValue); 
//             this.total += finalValue;
//             this.cookiesPerHour.push(finalValue)
//         }
//     }
// }

// let TokyoShop = {
//     name: "Tokyo",
//     minCust: 3,
//     maxCust: 24,
//     avgCookieSale: 1.2,
//     cookiesPerHour: [],
//     total: 0,
//     generate: function(){
//         for(let i=0;i<numberOfHours;i++){
//             let generatedValue = getRandomInt(this.minCust,this.maxCust);
//             let finalValue = generatedValue * this.avgCookieSale;
//             finalValue = Math.floor(finalValue); 
//             this.total += finalValue;
//             this.cookiesPerHour.push(finalValue)
//         }
//     }
// }

// let dubaishop = {
//     name:"Dubai",
//     minCust:11,
//     maxCust:38,
//     avgCookieSale:3.7,
//     cookiesPerHour: [],
//     total:0,
//     generate:function(){
//         for(let i=0;i<numberOfHours;i++){
//             let generatedValue = getRandomInt(this.minCust,this.maxCust);
//             let finalValue = generatedValue * this.avgCookieSale;
//             finalValue = Math.floor(finalValue);
//             this.total +=finalValue;
//             this.cookiesPerHour.push(finalValue)
//         }
//     }

// }

// let parisshop = {
//     name:"paris",
//     minCust:20,
//     maxCust:38,
//     avgCookieSale:2.3,
//     cookiesPerHour:[],
//     total : 0,
//     generate:function(){
//         for(let i=0;i<numberOfHours;i++){
//             let generatedValue = getRandomInt(this.minCust,this.maxCust);
//             let finalValue = generatedValue * this.avgCookieSale;
//             finalValue = Math.floor(finalValue);
//             this.total += finalValue;
//             this.cookiesPerHour.push(finalValue)
//         }
//     }

// }


// let limashop = {
//     name:"Lima",
//     minCust:2,
//     maxCust:16,
//     avgCookieSale:4.6,
//     cookiesPerHour:[],
//     total:0,
//     generate: function(){
//         for(let i=0;i<numberOfHours;i++){
//         let generatedValue = getRandomInt(this.minCust,this.maxCust);
//         let finalValue = generatedValue * this.avgCookieSale
//         finalValue = Math.floor(finalValue);
//         this.total += finalValue;
//         this.cookiesPerHour.push(finalValue);
//          }
//     }
// }



// function writeToDOM(shop){

//     shop.generate()

//     let title = document.createElement("h1")
//     title.textContent = shop.name
//     salmon.appendChild(title)
//     let HTMList = document.createElement("ul")
//     for(let i=0;i<numberOfHours;i++){
//         let item = document.createElement("li")
//         item.textContent = hours[i] + ": " + shop.cookiesPerHour[i] + " cookies"
//         HTMList.appendChild(item)
//     }
//     let totalitem = document.createElement("li")
//     totalitem.textContent = "Totle: "+shop.total+" cookies"
//     HTMList.appendChild(totalitem)
//     salmon.appendChild(HTMList)    

// }


// writeToDOM(seattleShop);
// writeToDOM(TokyoShop);
// writeToDOM(dubaishop);
// writeToDOM(parisshop);
// writeToDOM(limashop);



function City(name,minCust,maxCust,avgCookieSale){
    this.name = name;
    this.minCust= minCust;
    this.maxCust= maxCust;
    this.avgCookieSale= avgCookieSale;
    this.cookiesPerHour= [];
    this.total= 0;
}
City.prototype.generate = function(){
    for(let i=0;i<numberOfHours;i++){
        let generatedValue = getRandomInt(this.minCust,this.maxCust);
        let finalValue = generatedValue * this.avgCookieSale
        finalValue = Math.floor(finalValue);
        this.total += finalValue;
        this.cookiesPerHour.push(finalValue);
    }
}
City.prototype.render = function () {

    let title = document.createElement("h1")
    title.textContent = this.name
    salmon.appendChild(title)
    let HTMList = document.createElement("ul")
    for(let i=0;i<hours.length;i++){
        let item = document.createElement("li")
        item.textContent = hours[i] + ": " + this.cookiesPerHour[i] + " cookies"
        HTMList.appendChild(item)
    }
    let totalitem = document.createElement("li")
    totalitem.textContent = "Totle: "+this.total+" cookies"
    HTMList.appendChild(totalitem)
    salmon.appendChild(HTMList)    
}







let seattle = new City("seattle", 23, 65, 6.3)
seattle.generate()
// firstResturant.render()

let Tokyo = new City("Toyko", 321, 235, 3)
Tokyo.generate()
// secondResturant.render()

let dubai = new City("Dubai", 11, 38, 3.7)
dubai.generate()
// dubai.render()

let paris = new City ('Paris',20,38,2.3)
paris.generate()

let lima = new City ('lima',2,16,4.6)
lima.generate()


let locations = [seattle, Tokyo, dubai,paris,lima]

function renderAll(){
    let table = document.createElement("table")
    
    let row = document.createElement("tr")
    let item = document.createElement("th")
    
    row.append(item)
    for(let i=0;i<numberOfHours;i++){
        item = document.createElement("th")
        item.textContent = hours[i]
        row.append(item)
    }
    item = document.createElement("th")
    item.textContent = "Daily Location Total"
    row.append(item)
    table.append (row)
    

    for(let i =0;i<locations.length;i++){
        row = document.createElement("tr")
        item = document.createElement("th")
        item.textContent = locations[i].name
        row.append(item)
        for(let j=0;j<numberOfHours;j++){
            item = document.createElement("th")
            item.textContent = locations[i].cookiesPerHour[j]
            row.append(item)
        }
        item = document.createElement("th")
        item.textContent = locations[i].total
        row.append(item)
        table.append(row)
    }

    row = document.createElement("tr")
    item = document.createElement("th")
    item.textContent = "Total"
    row.append(item)
    for(let i=0;i<numberOfHours;i++){
        let sum = 0;
        for(let j=0;j<locations.length;j++){
            sum += locations[j].cookiesPerHour[i]
        }
        item = document.createElement("th")
        item.textContent = sum
        row.append(item)
    }
    
    let sum = 0;
    for(let i=0;i<locations.length;i++){
        sum += locations[i].total;
    }
    item = document.createElement("th")
    item.textContent = sum  
    row.append(item)

    table.append(row)
    salmon.append(table)
}




renderAll(locations);

// document.write(`
//     <table>
//         <tr>
//             <th></th>
//             <th>first</th>
//             <th>second</th>
//             <th>third</th>
//         </tr>
//         <tr>
//             <th>1</th>
//             <th>2</th>
//             <th>3</th>
//             <th>4</th>
//         </tr>
//         <tr>
//             <th>1</th>
//             <th>2</th>
//             <th>3</th>
//             <th>4</th>
//         </tr>
//         <tr>
//             <th>1</th>
//             <th>2</th>
//             <th>3</th>
//             <th>4</th>
//         </tr>
//     </table>

// `)
