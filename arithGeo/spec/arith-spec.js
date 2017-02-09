var aritGeo = require ('../src/arithGeo.js');
  describe("Determine the sequence of an array of numbers: ", function() {

    describe("Case for an empty array", function() {

      it("should return 0 for an empty array", function() {
        expect(aritGeo([])).toEqual(0);
      });

    });

    describe("Case for an neither arithmetic nor geometric", function() {

      it("should return -1 if the array passed is neither arithmetic nor geometric", function() {
        expect(aritGeo([1,4,7,3,9,40])).toEqual(-1);
      });
      it("should return -1 if the array passed is neither arithmetic nor geometric", function() {
        expect(aritGeo([10,4,8,13,2,0])).toEqual(-1);
      });
      it("should return -1 if the array passed is neither arithmetic nor geometric", function() {
        expect(aritGeo([5,3,0,60,3,99])).toEqual(-1);
      });

    });

    describe("Case for an arithmetic sequence", function() {

      it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        expect(aritGeo([2, 4, 6, 8, 10])).toEqual('Arithmetic');
      });

      it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function() {
        expect(aritGeo([5, 11, 17, 23, 29, 35, 41])).toEqual('Arithmetic');
      });

      it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {
        expect(aritGeo([15, 10, 5, 0, -5, -10])).toEqual('Arithmetic');
      });

    });

    describe("Case for an geometric sequence", function() {

      it("should return `geometric` for [3,9,27,81,243]", function() {
        expect(aritGeo([3,9,27,81,243])).toEqual('Geometric');
      });

      it("should return `geometric` for [2, 6, 18, 54]", function() {
        expect(aritGeo([2,6,18,54,162])).toEqual('Geometric');
      });

      it("should return `geometric` for [10,5,2.5,1.25]", function() {
        expect(aritGeo([10,100,1000,10000])).toEqual('Geometric');
      });
      it("should return `geometric` for [10,5,2.5,1.25]", function() {
        expect(aritGeo([10,100,1000,10000])).toEqual('Geometric');
      });

    });
  });