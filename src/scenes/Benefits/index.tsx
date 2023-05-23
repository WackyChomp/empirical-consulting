import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { SelectedPage, BenefitType } from "@/shared/types";

const benefits: Array<BenefitType> = [
	{
		icon: <HomeModernIcon className="h-6 w-6" />,
		title: 'Onsite Facilities',
		description: 'Our campus is full of life! It would be a shame to have all these equipments and no one to utilize them'
	}
]

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
				<div className="md:my-5 md:w-3/5">
					<HText>Unconventional guidance methodology</HText>
					<p className='my-5 text-sm'>
						Our consultancy leverages creativity and flexibility through professionals 
						with a variety of skill sets and domain knowledge. Their ability to 
						weave their experiences into one cohesive action plan or ideas 
						along with being adaptable to unexpected roadblocks. The swift brainstorming
						process allows you to quickly make mistakes and accelerate the feedback loop
					</p>
				</div>

				{/* Benefits */}
				<div className="md:flex items-center justify-between gap-8 mt-5">
					{Benefits.map((benefit: BenefitType) => (
						<Benefit
							key = {benefit.title}
							icon = {benefit.icon}
							title = {benefit.title}
							description = {benefit.description}
							setSelectedPage = {setSelectedPage}
						/>
					))}
				</div>

			</motion.div>
		</section>
  )
}

export default Benefits