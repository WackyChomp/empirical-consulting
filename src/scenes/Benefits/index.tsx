import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { SelectedPage, BenefitType } from "@/shared/types";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

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

				{/* Graphics and Description */}
				<div className="mt-16 item-center justify-between gap-20 md:mt-28 md:flex">
					{/* Graphic */}
					<img src="https://images.businessnewsdaily.com/app/uploads/2022/04/04074404/GettyImages-1133767597.jpg" alt="benefits-page-graphic" 
						className="mx-auto w-80 h-100 rounded-3xl"
					/>

					{/* Description Container */}
					<div className="">
						{/* Title */}
						<div className="relative">
							<div className="uppercase before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
								<motion.div
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true, amount: 0.5, }}
									transition={{ delay: 0.2, duration: 1 }}
									variants={{
										hidden: { opacity:0, x:50 },
										visible: { opacity:1, x:0 }
									}}
								>
									<HText>
										Lets achieve more {' '}
										<span className="text-primary-500">together</span>
									</HText>
								</motion.div>
							</div>
						</div>
						{/* Description */}
						<motion.div 
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true, amount: 0.5, }}
							transition={{ delay: 0.2, duration: 1 }}
							variants={{
								hidden: { opacity:0, x:-50 },
								visible: { opacity:1, x:0 }
							}}
						>
							<p className="my-5">
								Sure you can accomplish your goals alone but it will take longer as a trade off.
								You are bound to encounter roadblocks out of your control and this is where we step 
								in. Your options are to tread through unfamiliar territory to learn new skills or hire someone to do the "job".
								These are choices that could cost precious time and ramp up expenses just because you have made an avoidable mistake.
								or not consider every factor during your due diligence process.
							</p>
							<p className="my-5">
								With us, you do not have to worry as we scour through every nook and cranny. Our services are 
								either <b>free</b> or <b>affordable</b> depending on your situation. Our standards and commitment
								to deliver platinum service and satisfaction.
							</p>
						</motion.div>
						
						{/* Button */}
						<div className="relative mt-16">
							<div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
								<ActionButton setSelectedPage={setSelectedPage}>
									Join Us
								</ActionButton>
							</div>
						</div>
					</div>
				</div>

			</motion.div>
		</section>
  )
}

export default Benefits