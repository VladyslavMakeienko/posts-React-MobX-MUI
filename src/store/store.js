import { FrontEndStore } from "./FrontEndStore";

class Store {
  frontEndStore;
  constructor() {
    this.frontEndStore = new FrontEndStore();
  }
}

export const store = new Store();
