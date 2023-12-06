import { Cell, Color } from "../Cell";

export abstract class Figure {
  shortName: string | undefined;
  cell: Cell | undefined;
  constructor(public color: Color) {}
}
