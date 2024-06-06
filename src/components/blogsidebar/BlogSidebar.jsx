import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./blogsidebar.css";
export default function BlogSidebar() {
  return (
    <div className="blogsidebar">
      <div className="blogsidebarItem">
        <span className="blogsidebarTitle">Articles</span>
        <img
          src="https://i.ibb.co/zVB24m9/6bc2f4b45da7.jpg"
          alt=""
        />
        <p>
          Our advisory service supports the AgriConnect community by providing expert
          guidance to farmers, buyers, logistics partners,
          and administrators. We foster collaboration and efficiency
          in the agricultural supply chain, offering advice on best
          farming practices, market trends, logistics, and administrative
          support.
        </p>
      </div>
      <div className="blogsidebarItem">
        <span className="blogsidebarTitle">CATEGORIES</span>
        <ul className="blogsidebarList">
          <li className="blogsidebarListItem">
              Farmer
          </li>
          <li className="blogsidebarListItem">
              Logistic
          </li>
          <li className="blogsidebarListItem">
              Buyer
          </li>
          <li className="blogsidebarListItem">
              Admin
          </li>
        </ul>
      </div>
      <div className="blogsidebarItem">
        <span className="blogsidebarTitle">FOLLOW US</span>
        <div className="blogsidebarSocial">
          <i className="blogsidebarIcon fab fa-facebook-square"></i>
          <i className="blogsidebarIcon fab fa-instagram-square"></i>
          <i className="blogsidebarIcon fab fa-pinterest-square"></i>
          <i className="blogsidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
