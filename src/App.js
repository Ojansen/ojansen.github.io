import './App.css';
import {Navigation} from "./components/navigation";
import android from "./assets/android.svg";
import VanillaTilt from "vanilla-tilt";
import {useEffect, useRef} from "react";
// import BusinessCard from "./assets/business_card.png";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

function App() {
    VanillaTilt.init(document.querySelectorAll(".project-card"));
    const options = {
        scale: 1,
        speed: 300,
        max: 20,
      };
    document.title = "Obe Jansen";
  return (
    <div className="font-poppins font-bold text-white">
        <Navigation />
      <main className="p-4">
          <header className="container mx-auto">
              <div className="rounded-3xl px-8 py-16 w-full bg-violet flex md:flex-row flex-col justify-center gap-8 text-right hover:shadow-2xl transition">
                  <div>
                      <h1 className="text-6xl">Obe Jansen</h1>
                      <h2 className="text-2xl">Developer</h2>
                  </div>
                  <div>
                    <img src="https://avatars.githubusercontent.com/u/25839552?v=4" alt="avatar obe jansen" className="h-40 rounded-2xl"/>
                  </div>
              </div>
          </header>
          <div className="container mx-auto">
              <h1 className="text-black text-6xl py-6">Showcase</h1>
              <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-8">
                  <Tilt options={options} >
                  <div className="rounded-3xl w-full bg-[#1548D1] hover:shadow-2xl transition pb-8" id="project-card" style={{transform: "translateZ(2000px)"}}>
                      <div className="bg-business-card bg-center bg-cover rounded-3xl  w-100 h-60" >
                      </div>
                      {/*<img src={BusinessCard} alt="" className="rounded-3xl mx-auto shadow-lg w-40" style={{transform: "translateZ(200px)"}} />*/}
                      <div className="p-8">
                        <h1 className="text-4xl">Business card</h1>
                        <p>Create business cards and let others scan the QR-code</p>
                      </div>
                      <a href="https://play.google.com/store/apps/details?id=nl.obe.qrbusinesscard" className="rounded-full bg-[#216BFF] items-center w-fit gap-2 flex p-4 mx-8">
                          <img src={android} alt="" />
                          Play store
                      </a>
                  </div>
                  </Tilt>
                  <Tilt options={options}>
                  <div className="rounded-3xl w-full bg-[#AD0E37] hover:shadow-2xl transition pb-8" id="project-card">
                      <div className="p-8">
                        <h1 className="text-4xl">Coming soon...</h1>
                        <p></p>
                      </div>
                  </div>
                  </Tilt>
              </section>
          </div>
      </main>
    </div>
  );
}

export default App;
