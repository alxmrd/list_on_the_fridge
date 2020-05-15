import React from "react";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

export default function SimpleList() {
  return (
    <div>
      <Fab color="primary" aria-label="add" size="large">
        <AddIcon />
      </Fab>
    </div>
  );
}
