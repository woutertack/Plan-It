/**
 * The Component parent
 */

class Component {
  name: string;

  model: {};

  routerPath;

  reRender: (() => void) | undefined;

  constructor({ name, model, routerPath }: { name: string, model: {}, routerPath: any }) {
    this.name = name;
    this.model = model;
    this.routerPath = routerPath;
  }

  // eslint-disable-next-line class-methods-use-this
  render() : HTMLElement {
    return document.createElement('');
  }
}

export default Component;
