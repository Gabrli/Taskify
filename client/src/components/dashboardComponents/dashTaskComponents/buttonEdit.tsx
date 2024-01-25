import { FaEdit } from "react-icons/fa";

export default function ButtonEdit(props: {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  isEditing: boolean;
}) {
  const { setIsEditing, isEditing } = props;
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
      }}
      className="btn_edit font-semibold  bg-primary3 text-white flex items-center gap-1 pl-2 pr-2 pt-1 pb-1 rounded "
    >
      <FaEdit />
      Edit
    </button>
  );
}
