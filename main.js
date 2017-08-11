"use strict";
/// <reference path="./babylon.d.ts"/>
// const domQuerySelector = document.querySelector.bind(document)
// function createScene(canvas: HTMLCanvasElement, isNewProject: boolean): BABYLON.Scene {
//     const engine = new BABYLON.Engine(canvas, true)
//     // create a basic BJS Scene object
//     const scene = new BABYLON.Scene(engine)
//     if (isNewProject) {
//         // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
//         const camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene)
//         // target the camera to scene origin
//         camera.setTarget(BABYLON.Vector3.Zero())
//         // attach the camera to the canvas
//         camera.attachControl(canvas, false)
//         // create a basic light, aiming 0,1,0 - meaning, to the sky
//         const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene)
//         // create a built-in "sphere" shape; its constructor takes 4 params: name, subdivisions, radius, scene
//         const sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene)
//         // move the sphere upward 1/2 of its height
//         sphere.position.y = 1
//         // create a built-in "ground" shape; its constructor takes 5 params: name, width, height, subdivisions and scene
//         const ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene)
//     }
//     engine.runRenderLoop(function () {
//         scene.render()
//     })
//     window.addEventListener('resize', function () {
//         engine.resize()
//     })
//     // return the created scene
//     return scene;
// }
// window.addEventListener('DOMContentLoaded', function () {
//     // init UI
//     const sceneCanvas = domQuerySelector('#sceneCanvas') as HTMLCanvasElement
//     const gameCanvas = domQuerySelector('#gameCanvas') as HTMLCanvasElement
//     const hierarchySelect = domQuerySelector('#hierarchySelect') as HTMLSelectElement
//     const projectSelect = domQuerySelector('#projectSelect') as HTMLSelectElement
//     const inspectorSelect = domQuerySelector('#inspectorSelect') as HTMLSelectElement
//     // load project
//     const editingScene = createScene(sceneCanvas, true)
//     // const playingScene = createScene(gameCanvas, true)
// })
var Game = (function () {
    function Game(canvasElement) {
        this._canvas = document.getElementById(canvasElement);
        this._engine = new BABYLON.Engine(this._canvas, true);
    }
    Game.prototype.createScene = function () {
        // create a basic BJS Scene object
        this._scene = new BABYLON.Scene(this._engine);
        // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
        this._camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), this._scene);
        // target the camera to scene origin
        this._camera.setTarget(BABYLON.Vector3.Zero());
        // attach the camera to the canvas
        this._camera.attachControl(this._canvas, false);
        // create a basic light, aiming 0,1,0 - meaning, to the sky
        this._light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this._scene);
        // create a built-in "sphere" shape; with 16 segments and diameter of 2
        var sphere = BABYLON.MeshBuilder.CreateSphere('sphere1', { segments: 16, diameter: 2 }, this._scene);
        // move the sphere upward 1/2 of its height
        sphere.position.y = 1;
        // create a built-in "ground" shape
        var ground = BABYLON.MeshBuilder.CreateGround('ground1', { width: 6, height: 6, subdivisions: 2 }, this._scene);
    };
    Game.prototype.animate = function () {
        var _this = this;
        this._engine.runRenderLoop(function () {
            _this._scene.render();
        });
        // the canvas/window resize event handler
        window.addEventListener('resize', function () {
            _this._engine.resize();
        });
    };
    return Game;
}());
window.addEventListener('DOMContentLoaded', function () {
    var editingScene = new Game('sceneCanvas');
    editingScene.createScene();
    editingScene.animate();
    var playingScene = new Game('gameCanvas');
    playingScene.createScene();
    playingScene.animate();
});
//# sourceMappingURL=main.js.map