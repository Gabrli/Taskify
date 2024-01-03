export default function TaskDescription(props: { description: string }) {
  const { description } = props;
  return (
    <section>
      <p className="p-2 text-white text-opacity-40 font-semibold">
        {description}
      </p>
    </section>
  );
}
