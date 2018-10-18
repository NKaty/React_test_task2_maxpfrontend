import { OrderedMap } from 'immutable'

export const arrToMap = (array, ItemRecord) =>
  array.reduce(
    (acc, item) => acc.set(item.id, ItemRecord ? new ItemRecord(item) : item),
    new OrderedMap({})
  )
