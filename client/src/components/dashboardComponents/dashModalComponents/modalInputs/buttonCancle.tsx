export default function ButtonCancle(props: {setIsActive: React.Dispatch<React.SetStateAction<boolean>>}) {
  const { setIsActive } = props
  return (
    <button onClick={(e) => {
      e.preventDefault()
      setIsActive(false)
    }} className="transition duration-700 ease-in-out text-white bg-red-500 h-custom-height-modal-inputs font-semibold rounded w-modalInputs hover:bg-opacity-10">
      Cancle
    </button>
  );
}
