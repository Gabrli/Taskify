import { ReactNode } from "react";


export default function FormInput(props: {
  isWrong: boolean;
  setIsWrong: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  icon: ReactNode;
  placeholder:string,
  type:string,
  inputId:string,
  inputName:string
}) {
  const { isWrong, setIsWrong, value, setValue, icon, placeholder, type, inputName, inputId } = props;
  return (
    <div
      className={`p-2 w-full  bg-input1 flex  ${
        isWrong ? "border border-red-500" : ""
      } rounded-xl  items-center gap-2 justify-evanly mb-1`}
    >
      <span
        className={`${isWrong ? "text-red-500" : "text-gray-500"} text-xl p-1`}
      >
        {icon}
      </span>
      <input
        className="bg-transparent outline-0 text-white"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setIsWrong(false);
        }}
        type={type}
        name={inputName}
        id={inputId}
        placeholder={placeholder}
      />
    </div>
  );
}
