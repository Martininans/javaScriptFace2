const {testScores,addScore,square,shareBook,arange,sum} = require("./listFunction");

describe('testScores', () => {
    it('should return scores greater than or equal to 70', () => {
      let scores = [40, 80, 50, 60, 98, 88, 56, 69, 78, 45];
      let highScores = scores.filter(testScores);
      expect(highScores).toEqual([80, 98, 88, 78]);
    });
  });
describe('addScore', () => {
    it('should add 5 to each grade', () => {
      let grades = [85, 92, 78, 88, 95];
      let newGrades = grades.map(addScore);
      expect(newGrades).toEqual([90, 97, 83, 93, 100]);
    });
  });
  
  describe('square', () => {
    it('should square each grade', () => {
      let grades = [2,4,6,8,10];
      let newGrades = grades.map(square);
      expect(newGrades).toEqual([4, 16, 36, 64, 100]);
    });
})

describe('shareBook', () => {
    it('should log each name in the list', () => {
      let serahList = ["Emily", "Jack", "Sophia", "Daniel"];
      console.log = jest.fn();
      shareBook(serahList);
      expect(console.log).toHaveBeenCalledTimes(4);
    });
  });
  
  describe('arange', () => {
    it('should filter out times that are not PM', () => {
      let timings = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
      let pmTimings = timings.filter(arange);
      expect(pmTimings).toEqual(["1:00 PM", "3:00 PM", "5:00 PM"]);
    });
  });
  
  describe('sum', () => {
    it('should calculate the total amount', () => {
      let categories = {
        groceries: 150,
        "dining out": 100,
        transportation: 50,
        entertainment: 80
      };
      let total = sum(categories);
      expect(total).toBe(380);
    });
  });
  
  