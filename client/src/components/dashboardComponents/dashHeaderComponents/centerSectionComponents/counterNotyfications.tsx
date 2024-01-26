
export default function CounterNotyfications(props: {counter: number}){
    const { counter } = props
    return (
        <p className=" bg-secondary text-white font-bold pl-2 pr-2 cursor-pointer rounded-full text-center  flex justify-center items-center">{counter}</p>
    )
}