import React from "react";

function CustomGraph({ Graph, ...rest }) {
  return (
      <Graph {...rest} />
  );
}

export default CustomGraph;
