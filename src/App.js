import { useState } from 'react';
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Sidebar from './Component/Sidebar';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = ()=>{
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
      <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle}  OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
    
  );
}

export default App;
