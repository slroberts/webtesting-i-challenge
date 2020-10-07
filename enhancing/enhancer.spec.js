const enhancer = require('./enhancer.js');
// test away!
describe('enhancer functions', () => {
  describe('repair()', () => {
    it('should return a new item with the durability restored to 100', () => {
      const item = enhancer.repair({
        name: 'item',
        durability: 50,
        enhancement: 20,
      });
      const actualItem = {
        name: 'item',
        durability: 100,
        enhancement: 20,
      };
      expect(item).toStrictEqual(actualItem);
    });
  });

  describe('success()', () => {
    it('item enhancement increases by 1', () => {
      const item = enhancer.success({
        name: 'item',
        durability: 50,
        enhancement: 19,
      });
      const actualItem = {
        name: 'item',
        durability: 100,
        enhancement: 20,
      };
      expect(item.enhancement).toBe(actualItem.enhancement);
    });
    it('item enhancement level is not changed when 20', () => {
      const item = enhancer.success({
        name: 'item',
        durability: 50,
        enhancement: 20,
      });
      const actualItem = {
        name: 'item',
        durability: 100,
        enhancement: 20,
      };
      expect(item.enhancement).toBe(actualItem.enhancement);
    });
    it('item durability is not changed', () => {
      const item = enhancer.success({
        name: 'item',
        durability: 100,
        enhancement: 20,
      });
      const actualItem = {
        name: 'item',
        durability: 100,
        enhancement: 20,
      };
      expect(item.durability).toBe(actualItem.durability);
    });
  });

  describe('fail()', () => {
    it('should return item durability decreased by 5 if enhancement is less than 15', () => {
      const item = enhancer.fail({
        name: 'item',
        durability: 100,
        enhancement: 14,
      });
      const actualItem = {
        name: 'item',
        durability: 95,
        enhancement: 14,
      };

      expect(item).toStrictEqual(actualItem);
    });

    it('should return item durability decreased by 10 if enhancement is 15 or more', () => {
      const item = enhancer.fail({
        name: 'item',
        durability: 100,
        enhancement: 15,
      });
      const actualItem = {
        name: 'item',
        durability: 90,
        enhancement: 15,
      };

      expect(item).toStrictEqual(actualItem);
    });

    it('should return item enhancement decreased by 1 if enhancement is more than 16', () => {
      const item = enhancer.fail({
        name: 'item',
        durability: 100,
        enhancement: 18,
      });
      const actualItem = {
        name: 'item',
        durability: 90,
        enhancement: 17,
      };

      expect(item).toStrictEqual(actualItem);
    });
  });

  describe('get()', () => {
    it('should return a name not modified', () => {
      const item = enhancer.get({
        name: 'item',
        durability: 100,
        enhancement: 0,
      });
      const actualItem = {
        name: 'item',
        durability: 100,
        enhancement: 0,
      };
      expect(item).toStrictEqual(actualItem);
    });

    it('should return a modified name', () => {
      const item = enhancer.get({
        name: 'item',
        durability: 100,
        enhancement: 1,
      });
      const actualItem = {
        name: '[+7] item',
        durability: 100,
        enhancement: 1,
      };
      expect(item).toStrictEqual(actualItem);
    });
  });
});
