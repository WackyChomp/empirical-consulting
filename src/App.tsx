import Navbar from '@/scenes/navbar';
import { useState } from 'react';

function App() {

  const [selectedPage, setSelectedPage] = useState<string>('home');     // ensures string type

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
