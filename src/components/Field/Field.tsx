import { FC, Fragment, MouseEventHandler, useState } from "react";
import classes from "./Field.module.scss";
import { Cell } from "../../classes/Cell";
import { Figure } from "../../classes/Figures/Figure";

interface FieldProps {
  cells: Cell[][];
}
interface CellComponentProps {
  onClick: any;
  cell: Cell;
}

interface FigureComponentProps {
  figure: Figure;
}

export const Field: FC<FieldProps> = ({ cells }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function onClickHandler(cell: Cell) {
    cell.signTheCell("MOVEABLE");
    setSelectedCell(cell);
  }

  return (
    <>
      <div className={classes.Field}>
        {cells.map((row, i) => {
          return (
            <Fragment key={i}>
              {row.map((cell: Cell) => {
                return (
                  <CellComponent
                    onClick={() => onClickHandler(cell)}
                    key={cell.x + "" + cell.y}
                    cell={cell}
                  />
                );
              })}
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

const CellComponent: FC<CellComponentProps> = ({ cell, onClick }) => {
  const singClass = cell.sign ? classes[cell.sign] : "";
  return (
    <>
      <div
        onClick={onClick}
        className={classes.Cell + " " + classes[cell.color] + " " + singClass}
      >
        {cell.figure && <FigureComponent figure={cell.figure} />}
      </div>
    </>
  );
};

const FigureComponent: FC<FigureComponentProps> = ({ figure }) => {
  // function onClick() {
  //   console.log(figure);
  //   figure.cell?.signTheCell("MOVEABLE");
  // }
  return (
    <>
      <div
        className={classes.Figure + " " + classes[figure.color]}
        // onClick={onClick}
      >
        {figure?.shortName}
      </div>
    </>
  );
};
