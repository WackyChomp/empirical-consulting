import Navbar from '@/scenes/navbar';
import { useState } from 'react';
import { SelectedPage } from './shared/types';

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);     // ensures enum string type

  return (
    <div className="app" bg-gray-20>
      <Navbar 
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
      />,App be right here
    </div>
  )
}

export default App
