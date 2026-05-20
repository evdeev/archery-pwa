import { NavLink } from 'react-router-dom';

const tabs = [
  { to: '/', label: 'История' },
  { to: '/statistics', label: 'Статистика' },
  { to: '/equipment', label: 'Экипировка' },
  { to: '/settings', label: 'Настройки' }
];

export function TabBar() {
  return (
    <nav className="tab-bar">
      {tabs.map(tab => (
        <NavLink
          key={tab.to}
          to={tab.to}
          end={tab.to === '/'}
          className={({ isActive }) => isActive ? 'tab active' : 'tab'}
        >
          {tab.label}
        </NavLink>
      ))}
    </nav>
  );
}
