let scores = [40,80,50,60,98,88,56,69,78,45]
function testScores(scores){
    return scores >= 70
}
highScores = scores.filter(testScores)
console.log(highScores)

let grades = [85,92,78,88,95]
function addScore(grade){
    return grade + 5
}
console.log(grades.map(addScore))


let marks = [2,4,6,8,10]
function square(mark){
    return mark * mark
}
console.log(marks.map(square))

let serahList = ["Emily", "Jack","Sophia","Daniel"]
function shareBook(serahList){
    for ( let element of serahList) {
    console.log(element);
    }
}shareBook(serahList)

let timings = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"]
function arange(time){
    return time.slice(-2) === "PM"
}
console.log(timings.filter(arange))

let categories = {"groceries" : 150, "dining out" : 100, "transportation" : 50, "entertainment" : 80}
function sum(amount){
    let total = 0
    for (const price in categories) {
        total += categories[price];
            
        }
        return total
    }
    console.log(sum(categories))

module.exports = {testScores,addScore,square,shareBook,arange,sum}
