export enum SelectedPage {
    Home = 'home',
    Perks = 'perks',
    Experts = 'experts',
    ContactUs = 'contactus'
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }