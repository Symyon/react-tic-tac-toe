import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render, mount } from 'enzyme';
import App from '.';
import { EMPTY, CROSS, NOUGHT, DRAW } from '../../constants';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });

  it('renders 2 Score components', () => {
    const component = render(<App />);
    expect(component.find('div.Score').length).toEqual(2);
  })

  it('renders 2 CustomButton components', () => {
    const component = render(<App />);
    expect(component.find('div.CustomButton').length).toEqual(2);
  })

  it('renders 1 Board component', () => {
    const component = render(<App />);
    expect(component.find('div.Board').length).toEqual(1);
  })

  it('undo works', () => {
    const app = mount(<App />);
    const game = [CROSS, NOUGHT, CROSS];
    const moves = [0, 1, 2];
    const crossActive = true;
    app.setState({ game: game.slice(0), moves: moves.slice(0), crossActive });
    app.instance().undo();

    expect(app.state().moves.length === moves.length - 1
      && app.state().crossActive !== crossActive
      && app.state().game[moves.length - 1] === EMPTY).toBeTruthy();
  })

  it('make a move works on an empty cell', () => {
    const app = mount(<App />);
    const game = [CROSS, NOUGHT, CROSS, EMPTY, EMPTY];
    const moves = [0, 1, 2];
    const crossActive = true;
    app.setState({
      game: game.slice(0),
      moves: moves.slice(0),
      crossActive,
      winner: EMPTY
    });
    app.instance().makeMove(3);

    expect(app.state().moves.length === moves.length + 1
      && app.state().crossActive !== crossActive
      && app.state().game[3] !== EMPTY).toBeTruthy();
  })

  it('make a move will not work on a marked cell', () => {
    const app = mount(<App />);
    const game = [CROSS, NOUGHT, CROSS, EMPTY, EMPTY];
    const moves = [0, 1, 2];

    app.setState({
      game: game.slice(0),
      moves: moves.slice(0),
    });

    app.instance().makeMove(1);
    expect(app.state().moves.length).toBe(moves.length);
  })

  it('restarts correctly', () => {
    const app = mount(<App />);
    app.instance().restart();

    let arrayClean = true;
    const arr = app.state().game;
    for (let i = 0; i < 9; i++) {
      if (arr[i] !== EMPTY) {
        arrayClean = false;
        break;
      }
    }

    expect(arrayClean && app.state().moves.length === 0
      && app.state().crossActive === true
      && app.state().winner === EMPTY
      && app.state().winningCells === '').toBeTruthy();
  })

  it('app initializes with a correct state', () => {
    const app = mount(<App />);

    let arrayClean = true;
    const arr = app.state().game;
    for (let i = 0; i < 9; i++) {
      if (arr[i] !== EMPTY) {
        arrayClean = false;
        break;
      }
    }

    expect(arrayClean && app.state().moves.length === 0
      && app.state().crossActive === true
      && app.state().winner === EMPTY
      && app.state().winningCells === '').toBeTruthy();
  })

  it('marks a winner correctly', () => {
    const app = mount(<App />);
    const score = app.state().xScore;
    app.instance().markWinner(CROSS, null);

    expect(app.state().winner === CROSS && app.state().xScore === score + 1).toBeTruthy();
  })

  it('checks correctly for CROSS line winner and marked cells', () => {
    const app = mount(<App />);
    const game = [
      CROSS, CROSS, CROSS,
      NOUGHT, NOUGHT, EMPTY,
      EMPTY, EMPTY, EMPTY];

    const { matchMe, winningCells } = app.instance().checkGameStatus(game, []);
    expect(matchMe === CROSS && winningCells !== '').toBeTruthy();
  })

  it('checks correctly for NOUGHT diagonal winner and marked cells', () => {
    const app = mount(<App />);
    const game = [
      NOUGHT, CROSS, CROSS,
      CROSS, NOUGHT, EMPTY,
      EMPTY, CROSS, NOUGHT];

    const { matchMe, winningCells } = app.instance().checkGameStatus(game, []);
    expect(matchMe === NOUGHT && winningCells !== '').toBeTruthy();
  })

  it('checks the game status correctly when is a draw', () => {
    const app = mount(<App />);
    const drawGame = [
      NOUGHT, CROSS, CROSS,
      CROSS, NOUGHT, NOUGHT,
      NOUGHT, CROSS, CROSS];
    const moves = [1, 0, 2, 4, 3, 5, 7, 6, 8];

    const { matchMe, winningCells } = app.instance().checkGameStatus(drawGame, moves)

    expect(matchMe === DRAW && winningCells === '').toBeTruthy();
  })
});
