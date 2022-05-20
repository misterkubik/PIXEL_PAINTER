import * as PIXI from 'pixi.js';
import MainScene from "./main-scene";

import './style.css';

const game = new PIXI.Application({
	view: document.getElementById('game-canvas'),
	backgroundColor: 0x333333,
	resizeTo: document.body,
	antialias: true,
});

game.loader = PIXI.Loader.shared;
console.log(game);

game.onResize = () => {
	const {width, height} = game.screen;
	game.resize();
	game.stage && game.stage.resize(width, height);
};

game.loader.load(() => {
	game.resources = PIXI.Loader.shared.resources;
	// game.mainScene = new MainScene(game);
	// game.stage.addChild(game.mainScene);
	game.stage = new MainScene(game);
	game.onResize();
});


window.addEventListener('resize', () => {
	game.onResize();
});

