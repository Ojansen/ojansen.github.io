import android from "../assets/android.svg";
import VanillaTilt from "vanilla-tilt";
import {useEffect, useRef} from "react";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

function Showcase() {
    VanillaTilt.init(document.querySelectorAll(".project-card"));
    const options = {
        scale: 1,
        speed: 300,
        max: 20,
      };
    return (
        <div className="px-2 container mx-auto">
              <h1 className="text-black text-6xl m-6">Showcase</h1>
              <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-8 text-white">
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
    );
}
export {Showcase}
