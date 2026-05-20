export function ConfirmDialog({
  title,
  description,
  confirmLabel = 'Удалить',
  cancelLabel = 'Отмена',
  onConfirm,
  onCancel
}) {
  return (
    <div className="confirm-dialog-backdrop">
      <div className="confirm-dialog">
        <strong>{title}</strong>
        <p>{description}</p>

        <div className="confirm-dialog-actions">
          <button type="button" onClick={onCancel}>
            {cancelLabel}
          </button>

          <button
            type="button"
            className="destructive"
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
