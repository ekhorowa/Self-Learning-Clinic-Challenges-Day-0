var findMinMax = require ('../src/minMax.js');
(function() {
  'use strict';

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });
      it('should return [0, 92] for [4, 92, 66, 6, 44, 7, 78, 8, 12, 68, 0]', function () {
        expect(findMinMax([4, 92, 66, 6, 44, 7, 78, 8, 68, 0])).toEqual([0, 92]);
      });
      it('should return [3, 120] for [4, 92, 66, 6,120, 44, 7, 78, 8, 12, 68, 3]', function () {
        expect(findMinMax([4, 92, 66, 6,120, 44, 7, 78, 8, 68, 3])).toEqual([3, 120]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });
      it('should return [1] for [1, 1, 1, 1]', function () {
        expect(findMinMax([1, 1, 1, 1])).toEqual([1]);
      });
      it('should return [3] for [3, 3, 3, 3]', function () {
        expect(findMinMax([3, 3, 3, 3])).toEqual([3]);
      });
      it('should return [10] for [10, 10, 10, 10]', function () {
        expect(findMinMax([10, 10, 10, 10])).toEqual([10]);
      });
      it('should return [12] for [12, 12, 12, 12]', function () {
        expect(findMinMax([12, 12, 12, 12])).toEqual([12]);
      });

    });

  });

})();