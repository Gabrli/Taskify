export default function QuickLink(props: { href: string; content: string }) {
  const { href, content } = props;
  return (
    <li>
      <a className={`link_quic t font-medium text-gray-500 pt-1 `} href={href}>
        {content}
      </a>
    </li>
  );
}
