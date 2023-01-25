import android from "../assets/android.svg";

function DeveloperHeader() {
    return (
            <header className="px-2 container mx-auto">
              <div id="developer-header" className="flex md:flex-row flex-col justify-center md:gap-8 text-right transition">
                  <div className="flex flex-col items-end justify-between">
                      <h1 className="text-6xl">Obe Jansen</h1>
                      <h2 className="text-2xl">Developer</h2>
                      <a href="https://play.google.com/store/search?q=pub%3AObe&c=apps" className="bg-black rounded-full py-4 px-6 text-white w-fit">
                          <img src={android} alt={`icon of ${android}`} className="h-6"/>
                      </a>
                  </div>
                  <div>
                    <img src="https://avatars.githubusercontent.com/u/25839552?v=4" alt="avatar obe jansen" className="h-40 rounded-2xl"/>
                  </div>
              </div>
          </header>
    );
}
export {DeveloperHeader}
