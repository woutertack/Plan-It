import './css/style.css';
import {
  // eslint-disable-next-line max-len
  LoginComponent, RegisterComponent, DashboardComponent, TaskComponent, CreateTaskComponent,
} from './Components';
import App from './App';

const initApp = () => {
  const appContainer = document.getElementById('app');

  const app = new App(appContainer);
  app.addComponent(new LoginComponent());
  app.addComponent(new RegisterComponent());
  app.addComponent(new DashboardComponent());
  app.addComponent(new TaskComponent());
  app.addComponent(new CreateTaskComponent());
};

window.addEventListener('load', initApp);
