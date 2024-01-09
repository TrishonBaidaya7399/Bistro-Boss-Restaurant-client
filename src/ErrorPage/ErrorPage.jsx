import { useRouteError } from "react-router-dom";
import errorPage from "../assets/404/404.gif"
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <NavBar/>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <img src={errorPage} className="m-auto" alt="" />
      </div>
      <Footer/>
    </div>
  );
}