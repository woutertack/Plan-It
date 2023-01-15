/**
 * The App Wrapper
 */

import Router from './Router';
import Component from './lib/Component';
import { initFirebase } from './lib/Firebase';

class App {
  parent: HTMLElement | null;

  components: any;

  constructor(parent: HTMLElement | null) {
    this.parent = parent;
    this.components = [];
    initFirebase();
  }

  clearParent() {
    while (this.parent?.firstChild) {
      this.parent.removeChild(this.parent.lastChild);
    }
  }

  addComponent(component) {
    if (!(component instanceof Component)) return;

    // destructure component
    const { name, routerPath } = component;

    // when component asks to rerender
    // eslint-disable-next-line no-param-reassign
    component.reRender = () => this.showComponent(component);

    // add component to our app
    this.components.push(component);

    // add to router
    Router.getRouter().on(
      routerPath,
      (params) => {
        this.showComponent({
          name,
          props: params,
        });
      },
    ).resolve();
  }

  showComponent({ name, props }) {
    const foundComponent = this.components.find((component) => component.name === name);
    if (foundComponent) {
      this.clearParent();
      if (props) foundComponent.props = props;
      this.parent.appendChild(foundComponent.render());
    }
  }
}
export default App;
