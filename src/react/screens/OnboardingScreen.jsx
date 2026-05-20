import { useNavigate } from 'react-router-dom';

export function OnboardingScreen() {
  const navigate = useNavigate();

  return (
    <section className="onboarding-screen">
      <div className="onboarding-card">
        <h2>Archery Scores</h2>

        <p>
          Журнал тренировок для лучников с оффлайн хранением и iOS UX.
        </p>

        <button
          type="button"
          onClick={() => navigate('/')}
        >
          Начать
        </button>
      </div>
    </section>
  );
}
