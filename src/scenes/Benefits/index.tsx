import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { SelectedPage, BenefitType } from "@/shared/types";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
	{
		icon: <HomeModernIcon className="h-6 w-6" />,
		title: 'Onsite Facilities',
		description: 'Our campus is full of life! It would be a shame to have all these equipments and no one to utilize them'
	},
	{
		icon: <UserGroupIcon className="h-6 w-6" />,
		title: 'Unique and Diverse Perspectives',
		description: 'Here we have people from all walks of life. Believe it or not we all have stories to tell, we just need to learn how to tell them'
	},
	{
		icon: <AcademicCapIcon className="h-6 w-6" />,
		title: 'Experienced Professionals',
		description: 'Our consultants have seen it all. They are able to leverage their previous obstacles to overcome future roadblocks'
	},
];

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 }
	}
}

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
			id='benefits'
			className="mx-auto min-h-full w-5/6 py-20"
		>
			<motion.div className=""
				onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
			>
				{/* Header */}
				<motion.div 
					className="md:my-5 md:w-3/5"
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5, }}
					transition={{ delay: 0.2, duration: 1 }}
					variants={{
						hidden: { opacity:0, x:-50 },
						visible: { opacity:1, x:0 }
					}}
				>
					<HText>Unconventional guidance methodology</HText>
					<p className='my-5 text-sm'>
						Our consultancy leverages creativity and flexibility through professionals 
						with a variety of skill sets and domain knowledge. Their ability to 
						weave their experiences into one cohesive action plan or ideas 
						along with being adaptable to unexpected roadblocks. The swift brainstorming
						process allows you to quickly make mistakes and accelerate the feedback loop
					</p>
				</motion.div>

				{/* Benefits */}
				<motion.div 
					className="md:flex items-center justify-between gap-8 mt-5"
					initial = 'hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					variants={container}
				>
					{benefits.map((benefit: BenefitType) => (
						<Benefit
							key = {benefit.title}
							icon = {benefit.icon}
							title = {benefit.title}
							description = {benefit.description}
							setSelectedPage = {setSelectedPage}
						/>
					))}
				</motion.div>

			</motion.div>
		</section>
  )
}

export default Benefits