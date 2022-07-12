import React from "react";
import { ContentLayout } from "../../styles - global/global/LayoutStyles";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();
  return (
    <ContentLayout>
      <h1>Create account</h1>

      <form>
        <label htmlFor="">Email</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="text" />
        <button type="submit">log in</button>
      </form>

      <button onClick={() => navigate("/auth/sign-in")}>Sign in</button>
    </ContentLayout>
  );
};

export default CreateAccount;
