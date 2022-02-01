import { COMPONENT, ROW, COLUMN } from "./constants";

const initialData = {
  layout: [
    {
      type: ROW,
      id: "row0",
      children: [
        {
          type: COLUMN,
          id: "column1",
          children: [
            {
              type: COMPONENT,
              id: "component0"
            }
          ]
        }
      ]
    },
  ],
  components: {
    component0: { id: "component0", type: "card 1", content: "card 1" },
    component1: { id: "component1", type: "card 2", content: "card 2" },
    component2: { id: "component2", type: "card 3", content: "card 3" }
  }
};

export default initialData;