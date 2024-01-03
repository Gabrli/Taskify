export default function TaskHeader(props: { name: string }) {
  const { name } = props;
  return (
    <header>
      <p className="p-2 text-white font-semibold text-3xl">{name}</p>
    </header>
  );
}
