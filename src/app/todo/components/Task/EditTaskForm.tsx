import ColContainer from "@/components/base/ColContainer";
import { handleUpdateTaskDetails } from "../../actions/actions";
import { EditingModeType } from "./Task";
import Input from "@/components/base/Input";

type EditTaskFormType = {
  id: string;
  completed: boolean;
  editingMode: EditingModeType;
  setEditingMode: React.Dispatch<React.SetStateAction<EditingModeType>>;
};

export default function EditTaskForm({
  id,
  completed,
  editingMode,
  setEditingMode,
}: EditTaskFormType) {
  return (
    <ColContainer>
      <form
        action={(formdata) => {
          handleUpdateTaskDetails(formdata, id, completed);
          setEditingMode({
            id: "",
            title: "",
            description: "",
            completed: false,
          });
        }}
        className="w-100 bg-card flex-column py-3 px-2 rounded-3 d-flex align-items-start justify-content-start gap-2"
      >
        <Input
          type="text"
          name="title"
          className="w-100 text-white border-bottom"
          defaultValue={editingMode.title}
          placeholder="Title"
          required
        />
        <textarea
          name="description"
          className="w-100 px-2 default-input text-white"
          placeholder={"Add a description"}
          defaultValue={editingMode.description}
          style={{ resize: "none" }}
        />
        <button type="submit" className="w-100 btn btn-primary">
          Save Changes
        </button>
      </form>
    </ColContainer>
  );
}
