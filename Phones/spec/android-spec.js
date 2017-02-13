
var Phones= require ('../src/androidPhones.js');// I imported the file path to my source code

describe("Phones class : Create a samsungPhone, give it a name, model ,cost, year of release", function() {
	it("The samsungPhones should be a type of `object`, and an instance of the `Phones` class", function() {
      var samsungPhones = new Phones('Samsung' , 'A7', 100000, 2015);
      expect(typeof samsungPhones).toEqual(typeof {});
      expect(samsungPhones instanceof Phones).toBeTruthy();
  });
	it("The Phone name, model, cost, year year_released should be a property of the Phone", function() {
      var tecnoPhones  = new Phones('Tecno', 'M5', 30000 , 2014);
      expect(tecnoPhones.name).toBe('Tecno');
      expect(tecnoPhones.model).toBe('M5');
      expect(tecnoPhones.cost).toBe(30000);
      expect(tecnoPhones.year_released).toBe(2014);
    });
    it("The  phone get_name function should return the instance of the Phone class", function() {
      var sony  = new Phones('Sony', 'xperia', 45000, 2012 );
      var sonyZero = sony.get_name();
      expect(sony instanceof Phones).toBeTruthy();
      expect(typeof sony.get_name).toBe(typeof (function (){}));
    });
    it("The  phone get_cost function should return the instance of the Phone class", function() {
      var htc  = new Phones('HTC', 'sensation', 45000, 2012 );
      var htcSense = htc.get_cost();
      expect(htc instanceof Phones).toBeTruthy();
      expect(typeof htc.get_cost).toBe(typeof (function (){}));
    });
    it("The  phone get_release_years function should return the instance of the Phone class", function() {
      var sony  = new Phones('Sony', 'xperia', 45000, 2012 );
      var sonyZero = sony.get_release_years();
      expect(sony instanceof Phones).toBeTruthy();
      expect(typeof sony.get_release_years).toBe(typeof (function (){}));
    });
    it("The  phone get_phone_version function should return the instance of the Phone class", function() {
      var sony  = new Phones('Sony', 'xperia', 45000, 2012 );
      var sonyZero = sony.get_phone_version();
      expect(sony instanceof Phones).toBeTruthy();
      expect(typeof sony.get_phone_version).toBe(typeof (function (){}));
    });
});