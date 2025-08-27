// reduce

const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc, curVal){
//     console.log(`acc: ${acc} and curval : ${curVal}`);
    
//     return acc + curVal
// }, 3)

const myTotal = myNums.reduce((acc, curVal) => acc + curVal, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemname: "bottle",
        price: 8372
    },
    {
        itemname: "band",
        price: 8
    },
    {
        itemname: "pd",
        price: 898
    },
]
const pricetopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(pricetopay)