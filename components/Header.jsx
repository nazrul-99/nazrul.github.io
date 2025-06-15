import Link from "next/link";
import {Button} from "./ui/button";



//components
import Nav from "./Nav";

const Header = () => {
    return(
        <header className="py-8 xl:py-12 text-foreground">
            <div className="container mx-auto flex justify-between items-center"> 

                {/*logo*/}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Md Nazrul Islam<span className="text-accent">.</span> 
                    </h1>
                </Link>

                {/* desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                    <Link href="/contact">
                    <Button>Contact Me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                
            </div>
        </header>
    )
}

export default Header;
