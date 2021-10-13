//Code: 
let johnSnowAttack = 25
let jamieLannisterAttack = 35 

if (johnSnowAttack > jamieLannisterAttack) {
    console.log("John Snow has a better Attack")
} else if (johnSnowAttack === jamieLannisterAttack) {
    console.log("John and Jaime have the same Attack")
} else {
    console.log("Jaime Lannister has a better Attack")
}

let johnSnowHealth = 100
let johnSnowDefense = 0

if (johnSnowHealth <= jamieLannisterAttack) {
    console.log("John snow has been slain")
} else {
    johnSnowHealth = johnSnowHealth - jamieLannisterAttack
    console.log(`John's Health is ${johnSnowHealth}`)
}

johnSnowDefense += 25 

if (johnSnowHealth<= jamieLannisterAttack - johnSnowDefense){
    console.log ("John Snow has been slain")
} else {
    johnSnowHealth -= (jamieLannisterAttack - johnSnowDefense)
    console.log(`Johns Health is ${johnSnowHealth}`)
}