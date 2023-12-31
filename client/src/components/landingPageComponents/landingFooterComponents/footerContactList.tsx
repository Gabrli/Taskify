import CopyRight from "./footerCopyright";
import FooterContactItem from "./footerContactItem";
import { landingFooterElList } from "../../../types/landingFooterEl";
import { CiMail } from "react-icons/ci";
import { FaPhone, FaGithub } from "react-icons/fa";

export default function FooterContactList() {
  const listElement: landingFooterElList[] = [
    { id: Math.random(), title: "Email", link: "#", icon: <CiMail /> },
    { id: Math.random(), title: "Phone", link: "#", icon: <FaPhone /> },
    { id: Math.random(), title: "Project repo", link: "#", icon: <FaGithub /> },
  ];
  return (
    <ul className="flex flex-col gap-3 border-x-2 pl-14 pr-14 mobile1:pb-2 mobile1:pt-10 mobile1:border-x-0">
      {listElement.map((element) => {
        return <FooterContactItem element={element} />;
      })}
      <CopyRight />
    </ul>
  );
}
