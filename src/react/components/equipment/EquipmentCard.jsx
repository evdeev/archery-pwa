export function EquipmentCard({ item, onEdit }) {
  return (
    <button
      type="button"
      className="equipment-card"
      onClick={() => onEdit(item)}
    >
      <strong>{item.name}</strong>
      <p>{item.drawWeight}#</p>
    </button>
  );
}
