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
      className={`p-1 flex border ${
        isWrong ? "border-red-500" : "border-slate-600"
      } rounded  items-center gap-4 justify-evanly mb-1`}
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
