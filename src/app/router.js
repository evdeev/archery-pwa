const routes = new Map();

export function registerRoute(path, render) {
  routes.set(path, render);
}

export function navigate(path) {
  window.history.pushState({}, '', path);
  renderCurrentRoute();
}

export function renderCurrentRoute() {
  const app = document.getElementById('app');
  const route = routes.get(window.location.pathname);

  if (!route) {
    app.innerHTML = '<h1>404</h1>';
    return;
  }

  app.innerHTML = route();
}

window.addEventListener('popstate', renderCurrentRoute);
