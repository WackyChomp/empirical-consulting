import Navbar from '@/scenes/navbar';
import Home from './scenes/Home';
import Benefits from './scenes/Benefits';

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
      />
      <p className='text-white'>Easter Egg OOC~~~~~ App be right here</p>
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
