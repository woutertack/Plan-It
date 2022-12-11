import './css/style.css';
import { LoginComponent, RegisterComponent, DashboardComponent } from './Components';
import App from './App';

const initApp = () => {
  const appContainer = document.getElementById('app');

  const app = new App(appContainer);
  app.addComponent(new LoginComponent());
  app.addComponent(new RegisterComponent());
  app.addComponent(new DashboardComponent());
};

window.addEventListener('load', initApp);
