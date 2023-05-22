import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import HText from "@/shared/HText";

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
				<div className="">
					<HText>Unconventional guidance methodology</HText>
				</div>
			</motion.div>
		</section>
  )
}

export default Benefits