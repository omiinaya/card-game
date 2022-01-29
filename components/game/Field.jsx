import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import Container from "./Container";

const style = {
  height: "250px",
  width: "100%",
  border: '1px dotted black'
};
export const Field = (props) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.HANDCARD,
    drop: () => ({ name: "Field" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = "white";

  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  const sortIDs = (array) => {
    var myArray = array;
    myArray.forEach(function(element, index) {
      element.id = index;
    });
    return myArray;
  };

  let ITEMS = sortIDs(props.cards)

  return (
    <div ref={drop} role={"Field"} style={{ ...style, backgroundColor }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Container cards={ITEMS} />
      </div>
    </div>
  );
};

export default Field;
