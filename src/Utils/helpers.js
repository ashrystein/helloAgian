/**
 *
 * @param list to search inside
 * @param targetItem the item to check if exist or not
 * @returns boolean true if targetItem inside the list else false
 */
const isListContainItemById = (list, targetItem) =>
  !!list?.find((item) => item?.id === targetItem?.id)

export { isListContainItemById }
