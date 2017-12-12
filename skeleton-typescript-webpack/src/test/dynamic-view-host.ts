import { View } from "test/view";

export class Host {
  currentViewModel?: any;

  activate() {
    this.currentViewModel = new View();
  }
}
