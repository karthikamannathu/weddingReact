import Image from "next/image";
import Services from "./pages/services/page";
import Vendor from "./pages/vendor/page";
import Vennu from "./pages/vennu_section/page";
import Invitation from "./pages/e-invitation/page";
import Home from "./home/page";

export default function Main() {
  return (<>
  <Home/>
    <Services/>
    <Vendor/>
    <Vennu/>
    <Invitation/>
  
    </>
  );
}
