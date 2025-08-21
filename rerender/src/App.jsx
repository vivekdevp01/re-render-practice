// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useState } from 'react';
import './App.css'
import SlowComponent from './SlowComponent'
import Modal from './Modal';
import ButtonWithModal from './ButtonWithModal';
// import useModalDialog from './hooks/useModalDialog';

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  // const { isOpen, open, close } = useModalDialog();
  return (
    <>
      {/* <button onClick={open}>Open modal</button>
      {isOpen && <Modal close={close} />} */}
      <div>
        <ButtonWithModal  />
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
