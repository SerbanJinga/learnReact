import React, { Component } from 'react';
import Square from './components/Square';
import CalculateWinner from './components/CalculateWinner';
import Board from './components/Board';


export default class TicTac extends Component {
    render(){
        return(
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div></div>
                    <ol></ol>
                </div>
            </div>
        );
    }
}
