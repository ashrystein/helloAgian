import { isListContainItemById } from '../../src/Utils/Helpers'

describe('Test helpers functions', () => {
  describe('isListContainItemById helper function', () => {
    it('should return true (item in the list)', () => {
      const isFounded = isListContainItemById([{ id: 1 }], { id: 1 })
      expect(isFounded).toBe(true)
    })
    it('should return flase (item is not in the list)', () => {
      const isFounded = isListContainItemById([{ id: 2 }], { id: 1 })
      expect(isFounded).toBe(false)
    })
  })
})
