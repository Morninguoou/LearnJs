const data = require("./data.json")

needData = []

const dataMale = data.filter((x)=>{
    if(x.friends.length >=2){
        return x.gender === "male"
    }
})
dataMale.map((x)=>{
    x.balance = x.balance.replace("$","").replace(",","")
    x.balance /= 10
    needData.push({"name" : x.name,"gender" : x.gender,"company" : x.company,"email" : x.email,"frined" : x.friends,"balance" : '$'+x.balance})
})
console.log(needData)