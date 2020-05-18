import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="food"
          control={<Radio color="primary" />}
          label="food 🥓 🥩 🍗 🍖"
        />
        <FormControlLabel
          value="drinks"
          control={<Radio color="primary" />}
          label="drinks 🍺 🍻 🍷 🥃"
        />
        <FormControlLabel
          value="frozen goods"
          control={<Radio color="primary" />}
          label="frozen goods 🥶"
        />
        <FormControlLabel
          value="dairy"
          control={<Radio color="primary" />}
          label="dairy 🥛 🍼  🍵 🍶"
        />
        <FormControlLabel
          value="fruits & vegedables"
          control={<Radio color="primary" />}
          label="fruits & vegedables 🥑 🥦 🍌 🍉"
        />
        <FormControlLabel
          value="consumables"
          control={<Radio color="primary" />}
          label="consumables 🧻 🧼 🧴 🧽"
        />
      </RadioGroup>
    </FormControl>
  );
}
