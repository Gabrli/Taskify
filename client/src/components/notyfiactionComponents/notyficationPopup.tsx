import { useState } from "react";
import NotyfiactionWrapper from "./notyfiactionWrapper";
import NotyficationsHeader from "./notyficationHeader";

export default function NotyficationPopup() {
  const [counter] = useState(0);

  return (
    <div className="fixed top-14 rounded z-10   bg-fuchsia-600">
      <NotyficationsHeader counter={counter} />
      <NotyfiactionWrapper />
    </div>
  );
}
