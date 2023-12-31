//ex1
function iterateAndLogWithFor(n) {
    for (var i=0;i<=n;i++){
        if (i % 2===0){
            console.log ( i +"is even")
        }
        console.log( i + "is odd")
    }
}
//ex2
function iterateAndLogWithwhile(n) {
    var x =0
    while (x<=n){
        if (x % 2===0){
            console.log ( x +"is even")
        }
        console.log( x + "is odd")
        x=x+1
    }
    
}

function iterateAndLogWithwhile(n) {
    for (var i = n,i >= 0,i--){
        if (i % 2===0){
            console.log ( i +"is even")
        }
        console.log( i + "is odd")}
}
function iterateAndLogWithwhile(n) {
    while (n >= 0){
        if (n % 2===0){
            console.log ( n +"is even")
        }
        console.log( n + "is odd")}
}
function iterateAndLogWithwhile(n) {
    if (n<0){
        return;
    }
        if (n % 2===0){
            console.log ( n +"is even")
        }
        console.log( n + "is odd")
iterateAndLogWithwhile(n-1)
}
//ex3
function weirdDivisionWithFor(n){
    for(var i =1;i<=n;i++){
        if (i % 3 ===0 && i % 5===0){
            console.log("juliajames")
        }else if (i % 3 === 0){
            console.log("julia")
        }else if (i % 5 === 0){
            console.log ("james")
        }else {
            console.log(i)
        }
    }
}
function weirdDivisionWithwhile(n){
    var i =1;
    while (i<=n){
        if (i % 3 ===0 && i % 5===0){
            console.log("juliajames")
        }else if (i % 3 === 0){
            console.log("julia")
        }else if (i % 5 === 0){
            console.log ("james")
        }else {
            console.log(i)
        }
        i=i+1
    }
}
function weirdDivisionWithFor(n){
    if (n<=0){
        return
    }
    weirdDivisionWithFor(n-1)
    
        if (n % 3 ===0 && n % 5===0){
            console.log("juliajames")
        }else if (n % 3 === 0){
            console.log("julia")
        }else if (n % 5 === 0){
            console.log ("james")
        }else {
            console.log(n)
        }
    }
    //ex4
    function laugh(num){
        var s ='ha'
        for (var i=0;i<num;i++){
    
            s=s+s
        }
        return s
    }
    function laugh(num){
        var s ='ha'
        var i = 0
        while (i<num){
    
            s=s+s
            i=i+1
        }
        return s
    }
    function laugh(num){
        if (num === 0){
            return ''
        }
        return 'ha'+laugh(num-1)
    }
//ex4
function 
*
sumofn(n){
    var s = 0
    for(i=0;i<=n;i++){
        s=s+i
        console.log('s',s)
        console.log('i',i)
    }
    return s
}
function sumofn(n){
    var s = 0
    var i =0
    while(i<=n){
        s=s+i
        i=i+1
    }
    return s
}
//ex5
function factorial(numb){
    if(numb===1){
        return 1
}
return numb * factorial(numb-1);
}
//ex6
function rangefor(x,y){
    var arrayr =[]
    for (var i =x; i<=y;i++){
        arrayr.push(i)
    }
    return arrayr
}
function rangefor(x,y){
    var numbers = []
    while (x<=y){
        arrayr.push(x)
    }
    return arrayr
}
//ex6
function reverstrrr(string){
    var res = " "
    for (var i = string.length-1 ; i>=0 ; i--){
        res = res+string[i]

    }
    return res
}

function reverstrrr(string){
    var res = " "
    var i= string.length-1
    while (i>=0){
        res = res+string[i]
i=i-1
    }
    return res
}
function reverstr(string){
    if (string.length == 0){
        return string
    }
    return string[]+reverstr(string[])
}
//ex8
function adddigits(num){
    var s=0
    while(number !== 0){
        s=s+number
        num=
    
    }
    return s
}
ex9:
function fib(n){
    if(n===0 || n===1){
        return 1 
    }
    return fib(n-1)+fib(n-2)
}
/////////////////////////////////////////////////
ex10:
function firstDigit(str){
    for(var i=0 ;i<str.length;i++){
        if(!isNaN(str[i])){
            return str[i]
        }
    }
    return null
}
/////////////////////////////////////////////////
ex11:
function remove(array,element){
    var res=[]
    for(var i=0 ; i<array.length; i++){
        if(array[i]!==element){
            res.push(array[i])
        }
    }
    return res
}
/////////////////////////////////////////////////
ex12:
function average(numbers){
    var sum=0
    for(var i=0 ;i<numbers.length;i++){
        sum=sum+numbers[i]
    }
    return sum/numbers.length
}

/////////////////////////////////////////////////
ex13:
function findMax(numbers) {
    var x=numbers[0]
    for(var i=0; i<numbers.length;i++){
        if(numbers[i]>x){
            x=numbers[i]
        }
    }
    return x 
}
///
ex14

//
ex15:
function palindrome(str) {
    var reverse="" 
    for (var i=str.length-1;i>=0;i--){
        reverse=reverse+str[i]
    }
    return str=== reverse 
}
//
ex16:
function firstDuplicate(array) {
    var x={}
    for(var i=0;i<array.length;i++){
        if(x[array[i]]){
            return array[i]
        }
         x[array[i]]=true 
    }
    return "no x " 

}
//
ex17:
