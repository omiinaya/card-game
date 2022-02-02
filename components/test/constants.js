import shortid from "shortid";
import { ItemTypes } from './ItemTypes'

export const SIDEBAR_ITEMS = [
  {
    id: shortid.generate(),
    type: ItemTypes.SIDEBAR_ITEM,
    content: "Card 1"
  },
  {
    id: shortid.generate(),
    type: ItemTypes.SIDEBAR_ITEM,
    content: "Card 2"
  },
  {
    id: shortid.generate(),
    type: ItemTypes.SIDEBAR_ITEM,
    content: "Card 3"
  },
  {
    id: shortid.generate(),
    type: ItemTypes.SIDEBAR_ITEM,
    content: "Card 4"
  },
  {
    id: shortid.generate(),
    type: ItemTypes.SIDEBAR_ITEM,
    content: "Card 5"
  }
];
