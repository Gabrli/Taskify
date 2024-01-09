import NotyfiactionWrapper from "./notyfiactionWrapper";
import NotyficationsHeader from "./notyficationHeader";

export default function NotyficationPopup() {


  return (
    <div className="fixed top-14 rounded z-10   bg-cutom-not-1">
      <NotyficationsHeader />
      <NotyfiactionWrapper  />
    </div>
  );
}
