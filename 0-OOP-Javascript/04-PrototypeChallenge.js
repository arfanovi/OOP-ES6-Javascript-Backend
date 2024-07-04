

const HouseRent = function(amount) {
    this.amount = amount;

};

HouseRent.prototype.HouseRentIncrementByYearly = function(){
    this.amount += 1000;
    console.log(`Next year my house rent will be ${this.amount}`)
};

HouseRent.prototype.HouseRentDecrementByYearly = function(){
    this.amount -= 1000;
    console.log(`Next year my house rent will be ${this.amount}`)
};




const myHouse = new HouseRent(15000);

console.log(myHouse);
myHouse.HouseRentIncrementByYearly();
myHouse.HouseRentIncrementByYearly();
myHouse.HouseRentIncrementByYearly();

console.log(myHouse)

myHouse.HouseRentDecrementByYearly();
console.log(myHouse)