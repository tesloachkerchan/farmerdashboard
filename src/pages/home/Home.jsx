import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css"
import Center from "../../components/center/Center";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Topbar /> 
      <div className="homeContainer">
        <Sidebar />
        <Center />
      </div>
      <Footer />
    </>
  );
}
