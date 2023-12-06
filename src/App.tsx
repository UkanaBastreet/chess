import { useEffect, useState } from "react";
import "./App.css";
import { Board } from "./classes/Board";
import { Field } from "./components/Field/Field";

const board = new Board();

function App() {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
    // setCurrentPlayer(whitePlayer);
  }, []);

  useEffect(() => {
    board.initStandardGame();
  }, [board]);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.initStandardGame();
    setBoard(newBoard);
  }

  return (
    <>
      <div className="App">
        <Field cells={board.cells} />
      </div>
    </>
  );
}

export default App;
