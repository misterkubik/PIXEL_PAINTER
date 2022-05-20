import * as PIXI from 'pixi.js';

export default class PaintBoard extends PIXI.Container {
	constructor(game) {
		super();
		this.game = game;
		this.init();
	}

	init() {
		this.addBorder();
	}

	addBorder() {
		const width = this.defaultWidth = 1000;
		const height = this.defaultHeight = 1000;

		const border = this.border = new PIXI.Graphics();
		border.beginFill(0xffffff);
		border.lineStyle({
			width: 4,
			color: 0xff00ff,
			alpha: 1,
			alignment: 1,
		});
		border.drawRoundedRect(-width / 2, -height / 2, width, height, 10);
		border.endFill();
		this.addChild(border);
	}

	resize(width, height) {
		this.position.set(width / 2, height / 2);
		const scaleTo = Math.min(width, height) / (Math.min(this.defaultWidth, this.defaultHeight) + 50);
		this.scale.set(scaleTo);
	}
}
