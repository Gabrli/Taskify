export default function SubTitle() {
  return (
    <div className="mobile1:w-mobileTextContent mobile1:h-custom-height-mobile-hero-text-content mobile1:text-center  mobile1:pb-0" >
      <p className="pt-4 pl-1 w-full text-base text-stone-300 ">
        <span className="text-pink-500 font-semibold text-lg">Taskify</span>{" "}
        is a new and <span className="text-pink-500">unique</span> task
        planner on the <span className="text-pink-500">market</span> that
        uses its power to calculate how much{" "}
        <span className="text-pink-500">percentage</span> you should complete
        your tasks every day. Our planner will show you your{" "}
        <span className="text-pink-500">progress</span> and how much time you
        have left to complete your goal!
      </p>
    </div>
  );
}
