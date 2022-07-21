import React from "react";
import {
  ButtonSecondary,
  ButtonThird,
} from "../../styles - global/global/ButtonStyles";
import { Buttons } from "./Form.styles";

const FormButtons = ({ handler }) => {
  return (
    <Buttons>
      <ButtonSecondary type="reset" onClick={handler}>
        Cancel
      </ButtonSecondary>
      <ButtonThird type="submit">Save</ButtonThird>
    </Buttons>
  );
};

export default FormButtons;
