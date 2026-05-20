import { useSessionStore } from '../../store/useSessionStore.js';

export function SessionNoteScreen() {
  const session = useSessionStore(state => state.currentSession);

  return (
    <section className="session-note-screen">
      <header className="top-bar-inline">
        <h2>Заметка</h2>
      </header>

      <textarea
        className="session-note-editor"
        defaultValue={session.note}
        placeholder="Добавить заметку"
      />
    </section>
  );
}
