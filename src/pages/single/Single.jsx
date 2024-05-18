import BlogSidebar from "../../components/blogsidebar/BlogSidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import Topbar from "../../components/topbar/Topbar";
import "./single.css";

export default function Single() {
  return <>
    <Topbar/>
    <div className="single">
      <SinglePost />
      <BlogSidebar />
    </div>
  </>
}
