import React from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import ActionButton from '@/shared/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)')


  return (
  	<section 
			id='home'
			className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
		>
			{/* Image and Main Header */}
			<div className="">
				{/* Main Header */}
				<div className="">
					{/* Headings */}
					<div className="">
						{/* Relative tag */}
						<div className="">
							<div className="">
								<img src="" alt="" />
								<span className='uppercase'>Empirical Consulting</span>
							</div>
						</div>
						<p>
							Professionals
							Turn your thoughts and ideas into actionable steps towards your life goals
							Get the help you deserve because it is a necessity!
						</p>
					</div>
					{/* Call to Action (Button) */}
					<div className="">
						<ActionButton setSelectedPage={setSelectedPage}>
							Join Now
						</ActionButton>
						<AnchorLink 
							className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
							onClick={() => setSelectedPage(SelectedPage.ContactUs)}
							href={`#${SelectedPage.ContactUs}`}
						>
							<p>Learn More</p>
						</AnchorLink>
					</div>
				</div>

				{/* Image */}
				<div className="">
					<img src="https://e0.pxfuel.com/wallpapers/512/629/desktop-wallpaper-cosmic-background-for-pc-q-best.jpg" alt="homepage-graphic" />
				</div>
			</div>

			{/* Sponsors */}
			{isAboveMediumScreens && (
				<div className="">
					<div className="">
						<div className="">
							<img src="https://cdn.worldvectorlogo.com/logos/pwc.svg" alt="" />
							<img src="https://cdn.worldvectorlogo.com/logos/deloitte-2.svg" alt="" />
							<img src="https://cdn.worldvectorlogo.com/logos/kpmg.svg" alt="" />
							<img src="https://cdn.worldvectorlogo.com/logos/ey.svg" alt="" />
						</div>
					</div>
				</div>
			)}
		</section>
  )
}

export default Home