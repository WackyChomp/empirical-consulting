import { SelectedPage, DomainType } from '@/shared/types';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Domain from './Domain';

const domains = [
	{
		name: 'Business',
		description: 'Money makes the world go round. Learn and master how money works so you stay in control!',
		image: 'https://www.avanade.com/-/media/images/blogs/inside-avanade/career-in-tech-consulting.jpg?vs=2&la=en'
	},
	{
		name: 'Bodybuilding',
		description: "Our body is a temple that takes time and effort. Cultivate discipline so you don't have to think!",
		image: 'https://media.tenor.com/epNMHGvRyHcAAAAC/gigachad-chad.gif'
	},
	{
		name: 'Technology',
		description: 'The digital world expands continuously given its ties with other domains. It is the new frontier of humanity and we have early access!',
		image: 'https://thumbs.dreamstime.com/b/ai-machine-learning-hands-robot-human-touching-big-data-network-connection-background-science-artificial-intelligence-172987598.jpg'
	},
	{
		name: 'Science',
		description: 'Science is the epitome of seeking knowledge and understanding our tangible world. Testing and challenging ideas is part of the iterative process and improving!',
		image: 'https://cdn.vox-cdn.com/thumbor/k__m7gPXlaqBS_0oep_OnG2Op9Y=/0x0:1360x1021/1400x1050/filters:focal(680x511:681x512)/cdn.vox-cdn.com/uploads/chorus_asset/file/10776451/GettyImages_82770182.jpg'
	},
	{
		name: 'Engineering',
		description: 'We solve problems and execute ideas of all sizes. This is all possible through the innovations of predecessors!',
		image: 'https://media.istockphoto.com/id/1263390703/photo/industrial-technology-concept-communication-network-industry-4-0-factory-automation.jpg?s=612x612&w=0&k=20&c=n_loGNBVEeCKEua8IthSRP6aFDj4z1FZOCC_wt-557o='
	},
	{
		name: 'Marketing',
		description: "Societal consumption is at an all time high. We'll exceed demands and come out on top of the rat race!",
		image: 'https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=612x612&w=0&k=20&c=HYlIJ1VFfmHPwGkM3DtVIFNLS5ejfMMzEQ81ko534ak='
	},
	{
		name: 'New Domain',
		description: "Domain not listed? Become our first case study ambassador and we'll overcome this together!",
		image: 'https://media.istockphoto.com/id/1345164057/photo/silhouette-of-a-male-person-in-front-of-a-question-mark.jpg?s=612x612&w=0&k=20&c=5oeLl0f_J9z0Kex5yJoduPDpd0ovqGGic97ZCtKzE_M='
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