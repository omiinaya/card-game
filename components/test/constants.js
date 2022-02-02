import shortid from "shortid";

export const SIDEBAR_ITEM = "sidebarItem";
export const ROW = "row";
export const COLUMN = "column";
export const COMPONENT = "component";

export const SIDEBAR_ITEMS = [
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    content: "Card 1"
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    content: "Card 2"
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    content: "Card 3"
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    content: "Card 4"
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    content: "Card 5"
  }
];
