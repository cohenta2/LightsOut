import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard(),
      // board: Array.from({ length: this.props.ncols }, () => {
      //   return Array.from({ length: this.props.nrows }, () => {
      //     return Math.random() > this.props.chanceLightsStartsOn;
      //   });
      // }),
    };
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    // board = Array.from({ length: this.props.ncols }, () => {
    //   Math.random() > this.props.chanceLightsStartsOn;
    // });
    board = Array.apply(
      null,
      { length: this.props.nCols }.map(
        Number.call,
        Math.random() > this.props.chanceLightsStartOn
      )
    );
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  // flipCellsAround(coord) {
  //   let { ncols, nrows } = this.props;
  //   let board = this.state.board;
  //   let [y, x] = coord.split("-").map(Number);

  //   function flipCell(y, x) {
  //     // if this coord is actually on board, flip it

  //     if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
  //       board[y][x] = !board[y][x];
  //     }
  //   }

  //   // TODO: flip this cell and the cells around it

  //   // win when every cell is turned off
  //   // TODO: determine is the game has been won

  //   // this.setState({ board, hasWon });
  // }

  /** Render game board or winning message. */

  render() {
    console.log(this.state);
    return <div></div>;
    // if the game is won, just show a winning msg & render nothing else
    // TODO
    // make table board
    // TODO
  }
}

export default Board;
