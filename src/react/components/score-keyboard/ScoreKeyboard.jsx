const SCORES = ['X', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1', 'M'];

export function ScoreKeyboard({ onScore }) {
  return (
    <div className="score-keyboard" role="group" aria-label="Клавиатура очков">
      {SCORES.map(score => (
        <button
          key={score}
          type="button"
          className={`score-key score-${score.toLowerCase()}`}
          onClick={() => onScore(score)}
          aria-label={`Очки ${score}`}
        >
          {score}
        </button>
      ))}
    </div>
  );
}
