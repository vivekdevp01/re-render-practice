import { useState } from "react";

export default function useModalDialog() {
  const [isOpen, setIsOpen] = useState(false);
//   const open = () => setIsOpen(true);
//   const close = () => setIsOpen(false);
  return { isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) };
}
