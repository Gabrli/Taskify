export default function CopyRight(props: { theme: string }) {
  const { theme } = props;
  return (
    <li className="text-white text-xl">
      <a
        className={`flex items-center ${
          theme === "dark" ? "" : "text-pink-500"
        } gap-2 font-bold mobile1:pb-2`}
        href="#"
      >
        <span className="text-pink-500">Coded by:</span> Gabriel Wiśniewski
      </a>
    </li>
  );
}
