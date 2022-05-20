import * as PIXI from 'pixi.js';
import PaintBoard from "./paint-board";

export default class MainScene extends PIXI.Container {
	constructor(game) {
		super();
		this.game = game;

		this.init();
	}

	init() {
		this.paintBoard = new PaintBoard(this.game);
		this.addChild(this.paintBoard);
	}

	resize(width, height) {
		this.children.forEach((el) => {
			el.resize(width, height);
		})
	}
}
