import { useNavigate } from 'react-router-dom';

export function CreateSessionButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="floating-add-button"
      onClick={() => navigate('/session')}
    >
      +
    </button>
  );
}
