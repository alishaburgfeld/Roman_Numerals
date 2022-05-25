// //Lazy way:
// exports.toRoman= function (num) {
//     const obj={
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     }
    
//     let arr= [1000,500,100,50,10,5,1]
//     let str=""
//     arr.map(function (roman) {
//         if ((num/roman) >=1) {
//             let floor=num/roman
//             // console.log((roman/num))
//             for (let i=1;i<=(floor);i++) {
//                 // console.log(Math.floor(num/roman))
//                 for (let key in obj) {
//                     if (obj[key]===roman) {
//                         str+=key
//                         num-=roman
//                         // console.log(num,str)
//                     }
//                 }
//             }    
//         }
//     })
//     return str
// }
// console.log(toRoman(174))

//Another way to do the Lazy Way: 
// const toRoman = function(num) {
//     const romanObj= {
        
//         M: 1000,
//         D: 500,
//         C: 100,
//         L: 50,
//         X: 10,
//         V: 5,
//         I: 1,
//     }

//     let str=""
//     for (let roman in romanObj) {       //key
//         let arabic=romanObj[roman]      //value
//         let floor=(num/arabic)
//         if (floor>=1) {
//             while (num>=arabic) {
//                 // if (num % arabic===1) {

//                 // }
//                 str+=roman
//                 num-=arabic
//             }
//         }

//     }
//     return str

// }

// console.log(toRoman(944))


// console.log(toRoman(174))

//Modern way:

const toRoman = function(num) {
    const romanObj= {
        
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }

    let str=""
    newStr=""
    for (let roman in romanObj) {       //key
        let arabic=romanObj[roman]      //value
        let floor=(num/arabic)
        if (floor>=1) {
            while (num>=arabic) {
                str+=roman
                num-=arabic
            }
        }

    }
    return str

}

console.log(toRoman(19))