import { SelectedPage, DomainType } from '@/shared/types';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Domain from './Domain';

const domains = [
	{
		name: 'Business',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dolores!',
		image: 'https://www.avanade.com/-/media/images/blogs/inside-avanade/career-in-tech-consulting.jpg?vs=2&la=en'
	},
	{
		name: 'Bodybuilding',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dolores!',
		image: 'https://media.tenor.com/epNMHGvRyHcAAAAC/gigachad-chad.gif'
	},
	{
		name: 'Technology',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dolores!',
		image: ''
	},
]

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
}

const OurDomains = ({ setSelectedPage }: Props) => {
  return (
    <section id='ourdomains' className='w-full bg-primary-100 py-40'>
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurDomains)}>
				<motion.div className='mx-auto w-5/6'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5, }}
					transition={{ delay: 0.2, duration: 1 }}
					variants={{
						hidden: { opacity:0, x:-50 },
						visible: { opacity:1, x:0 }
					}}
				>
					<div className="md:w-3/5">
						<div className="uppercase">
							<HText>DLC : Domain Expansion</HText>
						</div>
						<p className='py-5'>
							Here's a little secret {'['}<u><span className='uppercase font-bold bg-primary-100 text-primary-100 hover:bg-secondary-500 hover:text-gray-500 hover:text-lg'>we are the domain!</span></u>{']'}
							<br/><br/>
							With a plethora of volunteers from around the world, we offer the finest experts who are committed to ensuring your vision comes to fruition.
							Without a doubt, they have seen and encountered situations you could not have dreamed of. As daunting it might be,
							our champions will walk through every step of the way and help instill the necessary experience and confidence for success.
						</p>
					</div>
				</motion.div>

				{/* --- Side-Scroller --- */}
				<div className="mt-10 h-[380px] w-full overflow-x-auto overflow-y-hidden">
					<ul className='w-[2800px] whitespace-nowrap'>		{/* child container with longer width than parent */}
						{domains.map((item: DomainType, index) => (
							<Domain 
								key={`${item.name}-${index}`}
								name={item.name}
								description={item.description}
								image={item.image}
							/>
						))}
					</ul>
				</div>
			</motion.div>
		</section>
  )
}

export default OurDomains