export function BottomSheetModal({ title, children, onClose }) {
  return (
    <div className="bottom-sheet-backdrop" onClick={onClose}>
      <div
        className="bottom-sheet-modal"
        onClick={event => event.stopPropagation()}
      >
        <header className="bottom-sheet-header">
          <strong>{title}</strong>

          <button type="button" onClick={onClose}>
            Готово
          </button>
        </header>

        {children}
      </div>
    </div>
  );
}
