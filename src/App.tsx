import Navbar from '@/scenes/navbar';
import { useState, useEffect } from 'react';
import { SelectedPage } from './shared/types';

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);     // ensures enum string type

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0){     // if top of page
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)   // prevents potential memory leaks
  }, [])
  

  return (
    <div className="app" bg-gray-20>
      <Navbar 
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />,App be right here
    </div>
  )
}

export default App
