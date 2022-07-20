import React from "react";
import { Form } from "./Form.styles";
import { ButtonThird } from "../../styles - global/global/ButtonStyles";

const ContactForm = () => {
  return (
    <Form>
      <form action="">
        <div>
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Message</label>
          <textarea cols="10" rows="10"></textarea>
        </div>

        <ButtonThird type="submit">send</ButtonThird>
      </form>
    </Form>
  );
};

export default ContactForm;
