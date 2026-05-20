export function Button({ label, variant = 'primary' }) {
  return `
    <button class="ui-button ui-button--${variant}">
      ${label}
    </button>
  `;
}
