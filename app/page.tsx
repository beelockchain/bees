import Herosection from "./components/Hero";
import Customers from "./components/Customers";
import Topnav from "./components/Topnav";
import OverView from "./components/OverView";
import Strategie from "./components/Strategie";
import Transforme from "./components/Transforme";
import Discover from "./components/Discover";

export default function Home() {
  return (
    <div className="bg-[#F2EEE5]">
      <Topnav />
      <Herosection />
      <Customers />
      <OverView />
      <Strategie />
      <Transforme />
      <Discover/>
    </div>
  );
}
