import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '@/assets/react.svg'
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ( { selectedPage, setSelectedPage }: Props) => {
	const flexBetween = 'flex items-center justify-between'
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");		// hook
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav>
			{/* outer navbar */}
			<div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
				{/*inner navbar */}
				<div className={`${flexBetween} mx-auto w-5/6`}>
					<div className={`${flexBetween} w-full gap-16`}>
						{/* left */}
						<img src={Logo} alt="logo image here" />
						{/* right */}
						{isAboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
							<div className={`${flexBetween} gap-8 text-sm`}>
								<Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
								<Link page='Perks' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
								<Link page='Experts' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
								<Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
							</div>
							<div className={`${flexBetween} gap-8`}>
								<p>Sign In</p>
								<button>Join the Agency</button>
							</div>
						</div>
						)
							:(
								<button 
									className="rounded-full bg-secondary-500 p-2"
									onClick={() =>{setIsMenuToggled(!isMenuToggled)}}
								>
									<Bars3Icon className="h-6 w-6 text-purple-800" />
								</button>
							)}						
					</div>
				</div>
			</div>
		</nav>
  )
}

export default Navbar