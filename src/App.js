import './App.css';
// import {Navigation} from "./components/navigation";
import {DeveloperHeader} from "./components/header";
import {Showcase} from "./components/showcase";
// import BusinessCard from "./assets/business_card.png";

function App() {
  document.title = "Obe Jansen";
  return (
    <div className="font-poppins font-bold text-black">
        {/*<Navigation />*/}
      <main className="py-2">
        <DeveloperHeader />
        <Showcase />
      </main>
    </div>
  );
}

export default App;
