import "./Footer.css";
function Footer() {
  return (
    <footer>
      <ul className="footer-menu">
        <li>
          <img
            src="./restaurantfood.jpg"
            width="110px"
            height="220px"
            alt="brand logo"
          />
        </li>
        <li>
          <ul>
            <strong>Doormat Navigation</strong>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </li>
        <li>
          <ul>
            <strong>Contact</strong>
            <li>Address</li>
            <li>Phone No</li>
            <li>Email</li>
          </ul>
        </li>
        <li>
          <ul>
            <strong>Social Media Links</strong>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
