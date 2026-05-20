import { useState } from 'react';

import { ConfirmDialog } from '../dialogs/ConfirmDialog.jsx';

export function DeleteSessionButton({ onDelete }) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <button
        type="button"
        className="destructive-button"
        onClick={() => setOpened(true)}
      >
        Удалить тренировку
      </button>

      {opened && (
        <ConfirmDialog
          title="Удалить тренировку?"
          description="Это действие нельзя отменить."
          onCancel={() => setOpened(false)}
          onConfirm={() => {
            onDelete();
            setOpened(false);
          }}
        />
      )}
    </>
  );
}
