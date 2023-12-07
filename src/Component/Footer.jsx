import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-primary py-5 text-center text-light">
        {/* <span>
          <ul className="row">
            <li>Home |</li>
            <li>About Us |</li>
            <li>Write for Us |</li>
            <li>Contact Us |</li>
            <li>Writing </li>
          </ul>
        </span> */}
        <div>
          <img
            src="https://wowally.com/wp-content/uploads/2022/12/logo.png"
            alt=""
          />{" "}
        </div>
        <p>
          Use of this web site constitute acceptance of the Terms of Use
          andPrivacy Policy GDPR <br />© wowally.com 2023 <br /> Article by
          wowally.com All right reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
