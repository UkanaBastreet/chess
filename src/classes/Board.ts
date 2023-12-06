import { Cell } from "./Cell";
import { Bishop } from "./Figures/Bishop";
import { King } from "./Figures/King";
import { Knight } from "./Figures/Knight";
import { Pawn } from "./Figures/Pawn";
import { Queen } from "./Figures/Queen";
import { Rook } from "./Figures/Rook";

export class Board {
  cells: row[] = [];
  constructor() {
    this.initCells();
  }
  initCells(width = 8, height = width) {
    this.cells = [];
    for (let x = 0; x < width; x++) {
      let row = [];
      for (let y = 0; y < height; y++) {
        const color =
          x % 2 === 0
            ? y % 2 === 0
              ? "white"
              : "black"
            : y % 2 === 0
            ? "black"
            : "white";
        row.push(new Cell(x, y, color));
      }
      this.cells.push(row);
    }
  }
  initStandardGame() {
    if (this.cells.length === 0) this.initCells();
    this.addKings();
    this.addQueens();
    this.addRook();
    this.addBishop();
    this.addKnights();
    this.addPawns();
  }
  addKings() {
    this.cells[0][4].addFigure(new King("black"));
    this.cells[7][4].addFigure(new King("white"));
  }
  addQueens() {
    this.cells[0][3].addFigure(new Queen("black"));
    this.cells[7][3].addFigure(new Queen("white"));
  }
  addRook() {
    this.cells[0][0].addFigure(new Rook("black"));
    this.cells[0][7].addFigure(new Rook("black"));
    this.cells[7][0].addFigure(new Rook("white"));
    this.cells[7][7].addFigure(new Rook("white"));
  }
  addBishop() {
    this.cells[0][2].addFigure(new Bishop("black"));
    this.cells[0][5].addFigure(new Bishop("black"));
    this.cells[7][2].addFigure(new Bishop("white"));
    this.cells[7][5].addFigure(new Bishop("white"));
  }
  addKnights() {
    this.cells[0][1].addFigure(new Knight("black"));
    this.cells[0][6].addFigure(new Knight("black"));
    this.cells[7][1].addFigure(new Knight("white"));
    this.cells[7][6].addFigure(new Knight("white"));
  }
  addPawns() {
    this.cells[1][0].addFigure(new Pawn("black"));
    this.cells[1][1].addFigure(new Pawn("black"));
    this.cells[1][2].addFigure(new Pawn("black"));
    this.cells[1][3].addFigure(new Pawn("black"));
    this.cells[1][4].addFigure(new Pawn("black"));
    this.cells[1][5].addFigure(new Pawn("black"));
    this.cells[1][6].addFigure(new Pawn("black"));
    this.cells[1][7].addFigure(new Pawn("black"));

    this.cells[6][0].addFigure(new Pawn("white"));
    this.cells[6][1].addFigure(new Pawn("white"));
    this.cells[6][2].addFigure(new Pawn("white"));
    this.cells[6][3].addFigure(new Pawn("white"));
    this.cells[6][4].addFigure(new Pawn("white"));
    this.cells[6][5].addFigure(new Pawn("white"));
    this.cells[6][6].addFigure(new Pawn("white"));
    this.cells[6][7].addFigure(new Pawn("white"));
  }
}

type row = Cell[];
