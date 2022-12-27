/**
 * The Component parent
 */

class Component {
  name: string;

  model: {};

  routerPath;

  reRender: () => void;

  constructor({ name, model, routerPath }: { name: string, model: {}, routerPath: any }) {
    this.name = name;
    this.model = model;
    this.routerPath = routerPath;
  }

  render() : HTMLElement {
    return document.createElement('');
  }
}

export default Component;
