export default function TaskDates(props: {
  date_start: string;
  date_end: string;
}) {
  const { date_start, date_end } = props;
  return (
    <p className="p-2 text-stone-400 text-opacity-40">
      {date_start} - {date_end}
    </p>
  );
}
