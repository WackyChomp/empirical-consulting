import { SelectedPage } from "@/shared/types"
import { useForm } from 'react-hook-form';
import { motion } from "framer-motion";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = (props: Props) => {

	const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 mb-5 placeholder-white`;

	const {
		register, 
		trigger,
		formState: { errors }
	} = useForm();

	const onSubmit = async (e: any) => {
		const isValid = await trigger();
		if (!isValid){
			e.preventDefault();			// prevents refreshing page after submit
		}
	}

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

				{/* Form and Image */}
				<div className="mt-10 justify-between gap-8 md:flex">
					<motion.div
						className="basis-3/5 md:w-3/5"
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5, }}
						transition={{ delay: 0.2, duration: 1 }}
						variants={{
							hidden: { opacity:0, x:50 },
							visible: { opacity:1, x:0 }
						}}
					>
						<form target='_blank'
						onSubmit={onSubmit}
						method='POST'
						action='https://formsubmit.co/72116554c32fcf7fc1083fee1339f6c7'
						>
							{/* ------- Name ------- */}							
							<input 
								className={inputStyles}
								type='text'
								placeholder="NAME"
								{...register('name',{		// saved to name property for react-hook-form
									required: true,
									maxLength: 100,
								})}
							/>
							{errors.name && (
								<p className="mt-1 text-primary-500">
									{errors.name.type === 'required' && 'This field is required!!!'}
									{errors.name.type === 'maxLength' && 'Max length is 100 characters!!!'}
								</p>
							)}
							{/* ------- Email ------- */}							
							<input 
								className={inputStyles}
								type='text'
								placeholder="EMAIL"
								{...register('email',{		// saved to email property for react-hook-form
									required: true,
									pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								})}
							/>
							{errors.email && (
								<p className="mt-1 text-primary-500">
									{errors.email.type === 'required' && 'This field is required!!!'}
									{errors.email.type === 'pattern' && 'Invalid email address!!!'}
								</p>
							)}
							{/* ------- Message ------- */}							
							<textarea
								className={inputStyles}
								rows={4}
								cols={50}
								placeholder="MESSAGE"
								{...register('message',{		// saved to message property for react-hook-form
									required: true,
									maxLength: 3000,
								})}
							/>
							{errors.message && (
								<p className="mt-1 text-primary-500">
									{errors.message.type === 'required' && 'This field is required!!!'}
									{errors.message.type === 'maxLength' && 'Max length is 3000 characters!!!'}
								</p>
							)}

							<button 
								type='submit'
								className="uppercase mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
							>
								Submit
							</button>
						</form>
					</motion.div>

					<motion.div 
						className="relative mt-16 basis-2/5 md:mt-0"
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5, }}
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{
							hidden: { opacity:0, x:50 },
							visible: { opacity:1, x:0 }
						}}
					>
						<div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
							<img 
								className="w-full rounded-xl --- filter grayscale contrast-100"
								alt="contact-us-image"
								src='https://i.pinimg.com/originals/42/36/9d/42369d83b1eb8dac20efd2c14d67d105.jpg'
							/>
						</div>
					</motion.div>
				</div>
			</motion.div>
    </section>
  )
}

export default ContactUs