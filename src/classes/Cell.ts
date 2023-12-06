import { Figure } from "./Figures/Figure";

export type Color = "black" | "white";

export class Cell {
  figure: Figure | undefined;
  sign: Signs;
  constructor(readonly x: number, readonly y: number, public color: Color) {
    this.addFigure = this.addFigure.bind(this);
  }
  addFigure(figure: Figure) {
    this.figure = figure;
    figure.cell = this;
  }
  signTheCell(sign: Signs) {
    this.sign = sign;
  }
}
type Signs = "MOVEABLE" | "DANGER" | undefined;
