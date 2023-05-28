import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
}

const OurDomains = ({ setSelectedPage }: Props) => {
  return (
    <section id='ourdomains' className='w-full bg-primary-100 py-40'>
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage)}>
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
					<div className="">
						<div className="uppercase">
							<HText>DLC : Domain Expansion</HText>
						</div>
						<p>
							<br/>
							Here's a little secret {'['}<u><span className='uppercase bg-primary-100 text-primary-100 hover:bg-secondary-500 hover:text-gray-500'>we are the domain!</span></u>{']'}
							<br/> <br/>
							With a plethora of volunteers from around the world, we offer the finest experts who are committed to ensuring your vision comes to fruition.
							Without a doubt, they have seen and encountered situations you could not have dreamed of. As daunting it might be,
							our champions will walk through every step of the way and help instill the necessary experience and confidence for success.
						</p>
					</div>
				</motion.div>
			</motion.div>
		</section>
  )
}

export default OurDomains