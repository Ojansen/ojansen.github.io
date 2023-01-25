import android from "../assets/android.svg";

function Navigation() {
    return(
        <nav className="sticky top-0 p-4 z-10">
            <ul className="container mx-auto flex justify-between">
                {/*<div className="flex gap-4">*/}
                {/*    <a href={`/`}>*/}
                {/*        <li className="flex bg-black rounded-full py-4 px-8 text-white w-fit">*/}
                {/*            Home*/}
                {/*        </li>*/}
                {/*    </a>*/}
                {/*</div>*/}
                <div className="flex gap-4">
                    <a href="https://play.google.com/store/search?q=pub%3AObe&c=apps">
                    <li className="flex bg-black rounded-full py-4 px-8 text-white w-fit">
                        <img src={android} alt={`icon of ${android}`} className="h-6"/>
                    </li>
                    </a>
                </div>
            </ul>
      </nav>
    )
}
export {Navigation}
