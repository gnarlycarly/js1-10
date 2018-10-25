//#1
function sleepIn(weekday,vacation) {
    if(!weekday||vacation){
        return(true);
    }else{
        return(false);
    }
}



//#2
function monkey_trouble(a_smile, b_smile) {
    if(a_smile&&b_smile){
        return true;
    }
    if(!a_smile&&!b_smile){
        return true;
    }
    if((!a_smile&&b_smile)||(a_smile&&!b_smile)){
        return false
    }
}

//#3
function string_times (word, times){
    var answer = "";
    for(var i=0; i<times; i++){
        answer = answer + word
    }
    return answer;
}

//#4
function front_times(word, times){
    var answer = "";
    var short = word.substring(0,3);
    for(var i=0; i<times; i++){
        answer = answer + short;
    }
        return answer;
}

//#5
function string_bits(word){
    var answer = "";
    for(var i=0; i<word.length; i+=2){
        answer = answer + word[i];
    }
    return answer;
}

//#6
function caughtSpeeding(speed, birthday){
    if(birthday == true){
        if(speed <= 65){
            return 0;
        }
        if(85>=speed && speed>65){
            return 1;
        }
        if(speed>=86){
            return 2;
        }
    }
    if(birthday == false){
        if(speed <= 60){
            return 0;
        }
        if(80>=speed && speed>60){
            return 1;
        }
        if(speed>=81){
            return 2;
        }
    }
}

//#7
function fizz_buzz(x){
    if(x % 3 == 0 && x % 5 == 0){
        return "FizzBuzz"
    }
    if(x % 3 == 0){
        return "Fizz"
    }
    if(x % 5 == 0){
        return "Buzz"
    }
    if(x % 3 !== 0 && x % 5 !== 0){
        return x + "!"
    }
}

//#8
function teaParty(tea, candy){
    if(tea<5 || candy<5){
        return 0
    }
    if(tea>=2*candy || candy>=2*tea){
        return 2
    }
    if(tea>=5 && candy>=5){
        return 1
    }
}

//#9
function blackjack(x,y){
    if(x>y && x<=21){
        return x;
    }
    else if(y>x && y<=21){
        return y;
    }
    else if(x>21 && y<21){
        return y;
    }
    else if(y>21 && x<21){
        return x;
    }
    else if(x>21 && y>21){
        return 0;
    }
    else {
        return 0;
    }
}

//#10
function loneSum(a,b,c){
    if(a !== b && b !== c && a !== c){
        return a + b + c
    }
    if(a !== b && b !== c && a ==c){
        return b
    }
    if(a == b && b !== c && c !==a){
        return c
    }
    if(a !== b && b == c && a !== c){
        return a
    }
    if(a == b && b == c && a==c){
        return 0
    }
}





