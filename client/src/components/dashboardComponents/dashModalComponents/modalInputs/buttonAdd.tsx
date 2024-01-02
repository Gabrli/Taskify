export default function ButtonAdd(props: {eventHandler: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void}) {
  const { eventHandler } = props
  return (
    <button onClick={(e) => eventHandler(e)} className="transition duration-700 ease-in-out bg-white text-white font-semibold bg-opacity-20 h-custom-height-modal-inputs rounded w-modalInputs hover:bg-opacity-30">
      Save
    </button>
  );
}
