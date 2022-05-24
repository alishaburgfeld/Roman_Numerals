
const obj={
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}



let arr= [1000,500,100,50,10,5,1]
let str=""
const romanLazy= function (num) {
    arr.map(function (roman) {
        if ((num/roman) >=1) {
            let floor=num/roman
            // console.log((roman/num))
            for (let i=1;i<=(floor);i++) {
                // console.log(Math.floor(num/roman))
                for (let key in obj) {
                    if (obj[key]===roman) {
                        str+=key
                        num-=roman
                        // console.log(num,str)
                    }
                }
            }    
        }
    })
    return str
}


console.log(romanLazy(37))