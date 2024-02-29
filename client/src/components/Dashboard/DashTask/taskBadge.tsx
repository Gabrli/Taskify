import { useBadge } from "../../../hooks/useBadge";

export default function TaskBadge(props: { status: string }) {
  const { status } = props;
  const badge = useBadge(status);
  return (
    <p
      className={`pl-3 ${status === "end" ? "alert" : ""} pr-3 text-text_light font-medium flex justify-center items-center gap-1 ${badge.bg} rounded-lg`}
    >
      {badge.icon} {badge.textContent}
    </p>
  );
}
