// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import SlowComponent from './SlowComponent'
import Modal from './Modal';
import ButtonWithModal from './ButtonWithModal';

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <button onClick={() => setIsOpen(true)}>Open modal</button> */}
      <div>
        <ButtonWithModal />
      </div>
      <div>
        Something hello
      </div>
      {/* {isOpen && <Modal setIsOpen={setIsOpen} />} */}
      <SlowComponent />
    </>
  );
}

export default App
