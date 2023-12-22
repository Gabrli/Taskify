import contactImage from "../../../assets/img/contactImg.svg";
export default function FooterImg() {
  return (
    <div>
      <img
        className="w-contactImg mobile1:w-mobileFooterImg"
        alt="contact picture"
        src={contactImage}
      />
    </div>
  );
}
