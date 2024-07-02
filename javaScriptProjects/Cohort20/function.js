function calculateArea(width, heigth){
    Area = width * heigth
    return Area
}
function convertToFahrenheit(temp){
    Fahrenheit = temp * 9/5 + 32
    return Fahrenheit
}
function isEven(number){
    if (number % 2 == 0){
        return true
    }else{
        return false
    }
}
function isLeapYear(year){
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        return true
    }else{
        return false
    }
}
function countVowels(str) {
    let count = 0;
    let vowels = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    return count;
  }
  
console.log(countVowels("martininalegwu"))
