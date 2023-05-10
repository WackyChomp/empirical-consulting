import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '@/assets/react.svg'


type Props = {};

const Navbar = (props: Props) => {
	const flexBetween = 'felx items-center justify-between'
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
						<div className={`${flexBetween} w-full`}>
							<div className={`${flexBetween} gap-8 text-sm`}>
								<p>Home</p>
								<p>Perks</p>
								<p>Experts</p>
								<p>Contact Us</p>
							</div>
							<div className={`${flexBetween} gap-8`}>
								<p>Sign In</p>
								<button>Join the Agency</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
  )
}

export default Navbar