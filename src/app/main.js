import { renderAppShell } from './shell.js';
import { registerServiceWorker } from '../services/pwa.service.js';

function bootstrap() {
  const app = document.getElementById('app');

  app.innerHTML = renderAppShell();

  registerServiceWorker();
}

bootstrap();
