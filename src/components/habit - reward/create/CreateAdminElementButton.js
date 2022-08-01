import { Button } from "./CreateAdminElementButton.styles";

const CreateAdminElementButton = ({ show, name }) => {
  return (
    <Button onClick={show}>
      <div className="container">
        <span className="material-symbols-outlined">add</span>
        <p>Create {name}</p>
      </div>
    </Button>
  );
};

export default CreateAdminElementButton;
