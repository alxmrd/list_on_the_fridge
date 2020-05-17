import React from "react";
import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";

export default function NotFound() {
  const styles = {
    bounce: {
      animation: "x 1s",
      animationName: Radium.keyframes(bounce, "bounce"),
    },
  };

  return (
    <StyleRoot>
      <div className="test" style={styles.bounce}>
        {" "}
        alex
      </div>
    </StyleRoot>
  );
}
