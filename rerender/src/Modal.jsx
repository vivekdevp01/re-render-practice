export default function Modal({ setIsOpen }) {
  return (
    <div>
      <h2>Modal Title</h2>
      <p>This is a modal window.</p>
      <button onClick={() => setIsOpen(false)}>Close</button>
    </div>
  );
}
