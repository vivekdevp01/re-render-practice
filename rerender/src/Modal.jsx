export default function Modal({ close }) {
  return (
    <div>
      <h2>Modal Title</h2>
      <p>This is a modal window.</p>
      <button onClick={close}>Close</button>
    </div>
  );
}
