import Link from "next/link";
import {Button} from "./ui/button";


//components
import Nav from "./Nav";

const Header = () => {
    return(
        <header className="dark">
            <div className="container mx-auto"> 
                {/*logo*/}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Md Nazrul Islam<span className="text-accent">.</span> 
                    </h1>
                </Link>
                {/* desktop nav */}
                <Nav/>
            </div>
        </header>
    )
}

export default Header