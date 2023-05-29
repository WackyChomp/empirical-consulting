
type Props = {
  name: string;
	description?: string;
	image: string;
}

const Domain = ({ name, description='Default description if nothing else :o', image }: Props) => {

	const overlayStyles = 
	`p-5 absolute z-30 flex h-[350px] w-[450px] rounded-lg flex-col 
	items-center justify-center whitespace-normal bg-primary-500 text-center 
	text-white opacity-0 transition duration-500 hover:opacity-90`

  return (
    <li className="relative mx-5 inline-block h-[350px] w-[450px]">

			{/* Overlays on top of individual image */}
			<div className={overlayStyles}>
				<p>{name}</p>
				<p>{description}</p>
			</div>

			<img src={image} alt={`${image}`} />
		</li>
  )
}

export default Domain