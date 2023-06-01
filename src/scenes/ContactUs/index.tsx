import { SelectedPage } from "@/shared/types"
import { useForm } from 'react-hook-form';
import { motion } from "framer-motion";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = (props: Props) => {
  return (
    <section id='contactus' className="mx-auto w-5/6 pt-25 pb-32">
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
				{/* Header */}
				<motion.div className="md:w-3/5"
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5, }}
					transition={{ delay: 0.2, duration: 1 }}
					variants={{
						hidden: { opacity:0, x:-50 },
						visible: { opacity:1, x:0 }
					}}
				>
					<HText>
						<span className="text-primary-500">Join Now</span> Become That Person You Dreamed Of
					</HText>
					<p className="my-5 ">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, fugit.
					</p>
				</motion.div>
			</motion.div>
    </section>
  )
}

export default ContactUs