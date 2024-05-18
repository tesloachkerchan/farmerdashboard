import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./blogsidebar.css";
export default function BlogSidebar() {
  return (
    <div className="blogsidebar">
      <div className="blogsidebarItem">
        <span className="blogsidebarTitle">Articles</span>
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.libertyprim.com%2Fen%2Flexique-familles%2F74%2Fmango-lexique-des-exotic-fruits.htm&psig=AOvVaw1SHdLy1V6W-KEUCJvUVpD8&ust=1716048167839000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOiH_t2HlYYDFQAAAAAdAAAAABAE"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="blogsidebarItem">
        <span className="blogsidebarTitle">CATEGORIES</span>
        <ul className="blogsidebarList">
          <li className="blogsidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="blogsidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="blogsidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="blogsidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="blogsidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="blogsidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
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
