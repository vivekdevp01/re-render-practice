// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useState } from 'react';
import "./App.css";
import SlowComponent from "./SlowComponent";
import Modal from "./Modal";
import ButtonWithModal from "./ButtonWithModal";
import { useState } from "react";
import RefactoredCode from "./RefactoredCode";
// import useModalDialog from './hooks/useModalDialog';

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  // const { isOpen, open, close } = useModalDialog();
  // const [x, setX] = useState(0);
  return (
    <>
    <RefactoredCode>

      {/* <button onClick={open}>Open modal</button>
      {isOpen && <Modal close={close} />} */}
      <div>
        <ButtonWithModal />
      </div>
      {/* <button onClick={() => setX(x + 1)}>Increment </button> */}
      {/* {x} */}

      <div>Something hello</div>
      {/* {isOpen && <Modal setIsOpen={setIsOpen} />} */}
      <SlowComponent />
    </RefactoredCode>
    </>
  );
}

export default App;
