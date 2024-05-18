import { useLocation } from "react-router";
import Topbar from "../../components/topbar/Topbar";
import Posts from "../../components/posts/Posts";
import BlogSidebar from "../../components/blogsidebar/BlogSidebar";
import "./blogPage.css";

export default function Blog() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Topbar />
      <div className="home">
        <Posts />
        <BlogSidebar />
      </div>
    </>
  );
}
