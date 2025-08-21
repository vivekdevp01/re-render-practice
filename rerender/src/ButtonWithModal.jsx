import { useState } from "react";
import Modal from "./Modal";

export default function ButtonWithModal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
}
