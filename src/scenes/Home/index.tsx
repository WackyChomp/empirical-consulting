import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import ActionButton from '@/shared/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';


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
			<motion.div 
				className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
				onViewportEnter={() => setSelectedPage(SelectedPage.Home)}	// navbar item highlight when scrolling to section
			>
				{/* Main Header */}
				<div className="z-10 mt-32 md:basis-3/5">
					{/* Headings */}
					<motion.div 
						className="md:-mt-20"
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5, }}
						transition={{ duration: 1 }}
						variants={{
							hidden: { opacity:0, x:-50 },
							visible: { opacity:1, x:0 }
						}}
					>
						{/* Relative tag */}
						<div className="relative">
							<div className="before:absolute before:-top-20 before:-left-20 beofre:z-[-1] md:before:content-evolvetext">		{/* hides 'evolve' text on md screen */}
								<img src="" alt="" />
								<span className='uppercase font-bold text-7xl'>Empirical Consulting</span>
							</div>
						</div>
						<p className='mt-8 text-sm'>
							Experienced professionals at your service.
							Turn your thoughts and ideas into actionable steps towards your life goals.
							Get the help you deserve because it is a necessity and you are worth it!
						</p>
					</motion.div>
					{/* Call to Action (Button) */}
					<motion.div 
						className="mt-8 flex items-center gap-8"
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5, }}
						transition={{ delay: 0.2, duration: 1 }}
						variants={{
							hidden: { opacity:0, x:-50 },
							visible: { opacity:1, x:0 }
						}}
					>
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
					</motion.div>
				</div>

				{/* Image */}
				<div className="flex basis-3/5 justify-center 
				md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
					<img className="rounded-3xl" src="https://e0.pxfuel.com/wallpapers/512/629/desktop-wallpaper-cosmic-background-for-pc-q-best.jpg" alt="homepage-graphic" />
				</div>
			</motion.div>

			{/* Sponsors */}
			{isAboveMediumScreens && (
				<div className="h-[150px] w-full bg-primary-100 py-10">
					<div className="mx-auto w-5/6 ">
						<div className="flex w-3/5 items-center justify-between gap">
							<img className="w-[150px]" src="https://cdn.worldvectorlogo.com/logos/pwc.svg" alt="" />
							<img className="w-[150px]" src="https://cdn.worldvectorlogo.com/logos/deloitte-2.svg" alt="" />
							<img className="w-[150px]" src="https://cdn.worldvectorlogo.com/logos/kpmg.svg" alt="" />
							<img className="w-[150px]" src="https://cdn.worldvectorlogo.com/logos/ey.svg" alt="" />
						</div>
					</div>
				</div>
			)}
		</section>
  )
}

export default Home