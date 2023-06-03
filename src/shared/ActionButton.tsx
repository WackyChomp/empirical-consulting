import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
	children: React.ReactNode;			// from ActionButton component used in navbar index.tsx
	setSelectedPage: (value: SelectedPage ) => void;
}

const transitionStyle = `transition ease-in-out delay-150 duration-100 hover:scale-100 hover:-translate-y-1`
const buttonStyle=`rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white`
// NOTE: For some reason the buttons in scene home page and navbar move up slightly


const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
			className={`${transitionStyle} + ${buttonStyle}`}
			onClick={() => setSelectedPage(SelectedPage.ContactUs)}         // using enums in shared types.ts
			href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  )
}

export default ActionButton