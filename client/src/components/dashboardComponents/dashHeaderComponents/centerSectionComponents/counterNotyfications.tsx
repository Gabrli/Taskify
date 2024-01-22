
export default function CounterNotyfications(props: {counter: number}){
    const { counter } = props
    return (
        <p className="bg-blue-500 text-white font-bold h-custom-height-counter w-counter cursor-pointer rounded-full text-center  flex justify-center items-center">{counter}</p>
    )
}