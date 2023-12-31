/**
 * The Router
 */

import Navigo from 'navigo';

const Router = {
  router: null as Navigo | null,
  getRouter() {
    if (!this.router) {
      const rootUrl = '/';
      this.router = new Navigo(rootUrl);
    }
    return this.router;
  },
};

export default Router;
