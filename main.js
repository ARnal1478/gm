import *as THREE from '/jsm/three.module.js';
import {OrbitControls} from '/jsm/OrbitControls.js';
import {GLTFLoader} from '/jsm/GLTFLoader.js';
import * as CANNON from '/jsm/cannon-es.js';
import CannonDebugRenderer from '/jsm/CannonDebugRenderer.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3050);

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//=====



var light = new THREE.DirectionalLight(0xffffff, 2.0, 1500);
//light.target = mesh1;
scene.add(light);

//Point light => shading the front face 
renderer.setClearColor('darkcyan');
//__________________________________
const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -9.82, 0),
});

const cannonDebugRenderer = new CannonDebugRenderer(scene, world);



/**
         AB Corde
**/
const loader = new GLTFLoader();
let _map;
loader.load('./dio.glb', function(glb) {
  _map = glb.scene;
  _map.position.set(0, 1, 0);
  _map.scale.set(30,15,30);
  _map.rotation.y = Math.PI / 1;
  scene.add(_map);
});


//___________________________
const _ABplace= new CANNON.Body({
  mass:0,
  shape:new CANNON.Box(new CANNON.Vec3(930,1,1000)),
  position:new CANNON.Vec3(0,0,50),
});
world.addBody(_ABplace);


let _si1;
_si1 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(450, 20, 50)),
  position: new CANNON.Vec3(0, 4.5, -60)
});

world.addBody(_si1);


let _si2;
_si2 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(112, 20, 90)),
  position: new CANNON.Vec3(-525, 4.5, -20)
});

world.addBody(_si2);

let _si3;
_si3 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(140, 20, 75)),
  position: new CANNON.Vec3(-445, 4.5, -680)
});

world.addBody(_si3);


let _si4;
_si4 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(140, 20, 90)),
  position: new CANNON.Vec3(-325, 4.5, -695)
});
world.addBody(_si4);


let _si5;
_si5 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(225, 20, 90)),
  position: new CANNON.Vec3(-120, 4.5, -695)
});
world.addBody(_si5);


let _si6;
_si6 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(70, 20, 130)),
  position: new CANNON.Vec3(-50, 4.5, -688)
});
world.addBody(_si6);

let _si7;
_si7 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(50, 20, 80)),
  position: new CANNON.Vec3(30, 4.5, -650)
});
_si7.quaternion.setFromEuler(0,0.4, 0);
world.addBody(_si7);


let _si8;
_si8 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(70, 20, 70)),
  position: new CANNON.Vec3(60, 4.5, -694)
});
_si8.quaternion.setFromEuler(0,-0.4, 0);
world.addBody(_si8);


let _si9;
_si9 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(80, 20, 80)),
  position: new CANNON.Vec3(-175, 4.5, -470)
});
_si9.quaternion.setFromEuler(0,0, 0);
world.addBody(_si9);

let _si10;
_si10 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(60, 20, 80)),
  position: new CANNON.Vec3(-175, 4.5, -460)
});
_si10.quaternion.setFromEuler(0,0, 0);
world.addBody(_si10);


let _si11;
_si11 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(60, 20, 60)),
  position: new CANNON.Vec3(-220, 4.5, -460)
});
_si11.quaternion.setFromEuler(0,0, 0);
world.addBody(_si11);

let _si12;
_si12 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(60, 20, 65)),
  position: new CANNON.Vec3(-120, 4.5, -470)
});
_si12.quaternion.setFromEuler(0, -0.3, 0);
world.addBody(_si12);



let _si13;
_si13 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(60, 20, 80)),
  position: new CANNON.Vec3(90, 4.5, -418)
});
_si13.quaternion.setFromEuler(0,-0.4, 0);
world.addBody(_si13);

let _si14;
_si14 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(60, 20, 90)),
  position: new CANNON.Vec3(150, 4.5, -444)
});
_si14.quaternion.setFromEuler(0,0.2,0);
world.addBody(_si14);

let _si15;
_si15 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(60, 20, 90)),
  position: new CANNON.Vec3(210, 4.5, -444)
});
_si15.quaternion.setFromEuler(0, -0.1, 0);
world.addBody(_si15);


let _si16;
_si16 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(80, 20, 90)),
  position: new CANNON.Vec3(390, 4.5, -480)
});
_si16.quaternion.setFromEuler(0, 0.5, 0);
world.addBody(_si16);


let _si17;
_si17 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(60, 20, 70)),
  position: new CANNON.Vec3(480, 4.5, -520)
});
_si17.quaternion.setFromEuler(0,-0.01, 0);
world.addBody(_si17);

let _si18;
_si18 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(60, 20, 50)),
  position: new CANNON.Vec3(520, 4.5, -530)
});
_si18.quaternion.setFromEuler(0, -0.3, 0);
world.addBody(_si18);


let _si19;
_si19 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(120, 20, 150)),
  position: new CANNON.Vec3(320, 4.5, -310)
});
_si19.quaternion.setFromEuler(0,0, 0);
world.addBody(_si19);

let _si20;
_si20 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(80, 20, 130)),
  position: new CANNON.Vec3(130, 4.5, -310)
});
_si20.quaternion.setFromEuler(0,0.8, 0);
world.addBody(_si20);


let _si21;
_si21 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(80, 20, 60)),
  position: new CANNON.Vec3(705, 4.5, -750)
});
_si21.quaternion.setFromEuler(0, -0.4, 0);
world.addBody(_si21);


let _si22;
_si22 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(80, 20, 60)),
  position: new CANNON.Vec3(686, 4.5, -680)
});
_si22.quaternion.setFromEuler(0, 0.01, 0);
world.addBody(_si22);


let _si23;
_si23 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(80, 20, 70)),
  position: new CANNON.Vec3(708, 4.5, -600)
});
_si23.quaternion.setFromEuler(0, 0.6, 0);
world.addBody(_si23);

let _si24;
_si24 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(80, 20, 40)),
  position: new CANNON.Vec3(755, 4.5, -540)
});
_si24.quaternion.setFromEuler(0,0.9, 0);
world.addBody(_si24);


let _si25;
_si25 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(40, 20, 40)),
  position: new CANNON.Vec3(760, 4.5, -510)
});
_si25.quaternion.setFromEuler(0, 0.6, 0);
world.addBody(_si25);


let _si26;
_si26 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(40, 20, 40)),
  position: new CANNON.Vec3(800, 4.5, -540)
});
_si26.quaternion.setFromEuler(0, -0.11, 0);
world.addBody(_si26);


let _si27;
_si27 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(40, 20, 100)),
  position: new CANNON.Vec3(800, 4.5, -660)
});
_si27.quaternion.setFromEuler(0,0.3, 0);
world.addBody(_si27);



let _si28;
_si28 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(164, 20, 109)),
  position: new CANNON.Vec3(440, 4.5, -60)
});
_si28.quaternion.setFromEuler(0, 0.9, 0);
world.addBody(_si28);


let _si29;
_si29 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(120, 20, 109)),
  position: new CANNON.Vec3(475, 4.5, -10)
});
_si29.quaternion.setFromEuler(0, 0, 0);
world.addBody(_si29);

let _si30;
_si30 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(165, 20,90)),
  position: new CANNON.Vec3(540, 4.5,180)
});
_si30.quaternion.setFromEuler(0, 0.5, 0);
world.addBody(_si30);

let _si31;
_si31 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(90, 20,90)),
  position: new CANNON.Vec3(455, 4.5,130)
});
_si31.quaternion.setFromEuler(0,-0.1, 0);
world.addBody(_si31);


let _si32;
_si32 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(160, 20, 90)),
  position: new CANNON.Vec3(600, 4.5, 255)
});
_si32.quaternion.setFromEuler(0,0,0);
world.addBody(_si32);

let _si33;
_si33 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(165, 20, 100)),
  position: new CANNON.Vec3(760, 4.5,160)
});
_si33.quaternion.setFromEuler(0,-0.4, 0);
world.addBody(_si33);


let _si34;
_si34 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(70, 20, 100)),
  position: new CANNON.Vec3(726, 4.5,130)
});
_si34.quaternion.setFromEuler(0,-0.4, 0);
world.addBody(_si34);

let _si35;
_si35 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(90, 20, 100)),
  position: new CANNON.Vec3(665, 4.5,370)
});
_si35.quaternion.setFromEuler(0,-0.5,0);
world.addBody(_si35);


let _si36;
_si36 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(90, 20, 90)),
  position: new CANNON.Vec3(641, 4.5,480)
});
_si36.quaternion.setFromEuler(0,0.3,0);
world.addBody(_si36);

let _si37;
_si37 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(90, 20, 90)),
 position: new CANNON.Vec3(550, 4.5,620)
});
_si37.quaternion.setFromEuler(0,-0.1,0);
world.addBody(_si37);

let _si38;
_si38 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(90, 20, 90)),
 position: new CANNON.Vec3(420, 4.5,640)
});
_si38.quaternion.setFromEuler(0,0.4,0);
world.addBody(_si38);

let _si39;
_si39 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(90, 20, 90)),
  position: new CANNON.Vec3(365, 4.5, 642)
});
_si39.quaternion.setFromEuler(0,-0.4, 0);
world.addBody(_si39);

let _si40;
_si40 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(50, 20, 90)),
 position: new CANNON.Vec3(290, 4.5,618)
});
_si40.quaternion.setFromEuler(0,-0.2, 0);
world.addBody(_si40);


let _si41;
_si41 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(30, 20, 90)),
 position: new CANNON.Vec3(255, 4.5,610)
});
_si41.quaternion.setFromEuler(0,0.2, 0);
world.addBody(_si41);


let _si42;
_si42 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(85, 20, 90)),
  position: new CANNON.Vec3(180, 4.5, 650)
});
_si42.quaternion.setFromEuler(0, 0.6, 0);
world.addBody(_si42);



let _si43;
_si43 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(85, 20, 90)),
  position: new CANNON.Vec3(120, 4.5, 681)
});
_si43.quaternion.setFromEuler(0, 0, 0);
world.addBody(_si43);


let _si44;
_si44 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(85, 20, 90)),
  position: new CANNON.Vec3(0, 4.5,686)
});
_si44.quaternion.setFromEuler(0,-0.3,0);
world.addBody(_si44);


let _si45;
_si45 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(50, 20, 90)),
  position: new CANNON.Vec3(-105, 4.5,660)
});
_si45.quaternion.setFromEuler(0,0,0);
world.addBody(_si45);

let _si46;
_si46 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(50, 20, 90)),
  position: new CANNON.Vec3(-203, 4.5,660)
});
_si46.quaternion.setFromEuler(0,-0.9,0);
world.addBody(_si46);

let _si47;
_si47 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(83, 20, 140)),
  position: new CANNON.Vec3(-428, 4.5, 340)
});
_si47.quaternion.setFromEuler(0,-0.3,0);
world.addBody(_si47);


let _si48;
_si48 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(30, 20, 50)),
  position: new CANNON.Vec3(-448, 4.5,530)
});
_si48.quaternion.setFromEuler(0, -0.6, 0);
world.addBody(_si48);

let _si49;
_si49 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(40, 20, 50)),
  position: new CANNON.Vec3(-500, 4.5, 533)
});
_si49.quaternion.setFromEuler(0, -0.1, 0);
world.addBody(_si49);


let _si50;
_si50 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(130, 20, 50)),
  position: new CANNON.Vec3(-687, 4.5,510)
});
_si50.quaternion.setFromEuler(0,0.2,0);
world.addBody(_si50);

let _si51;
_si51 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(120, 20,50)),
  position: new CANNON.Vec3(-840, 4.5,450)
});
_si51.quaternion.setFromEuler(0,-0.9,0);
world.addBody(_si51);

let _si52;
_si52 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(120, 20,130)),
  position: new CANNON.Vec3(-740, 4.5, 400)
});
_si52.quaternion.setFromEuler(0, -0.9, 0);
world.addBody(_si52);

let _si53;
_si53 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(130, 20,130)),
  position: new CANNON.Vec3(-610, 4.5,360)
});
_si53.quaternion.setFromEuler(0,-0.1,0);
world.addBody(_si53);

let _si54;
_si54 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(103, 20, 80)),
  position: new CANNON.Vec3(-310, 4.5, 220)
});
_si54.quaternion.setFromEuler(0, -0.1, 0);
world.addBody(_si54);

let _si55;
_si55 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(80, 20, 80)),
  position: new CANNON.Vec3(-140, 4.5, 220)
});
_si55.quaternion.setFromEuler(0, 0.2, 0);
world.addBody(_si55);

let _si56;
_si56 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(50, 20, 50)),
  position: new CANNON.Vec3(-38, 4.5,210)
});
_si56.quaternion.setFromEuler(0,-0.9, 0);
world.addBody(_si56);

let _si57;
_si57 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(80, 20,180)),
  position: new CANNON.Vec3(32,4.5,250)
});
_si57.quaternion.setFromEuler(0,0.6, 0);
world.addBody(_si57);

let _si58;
_si58 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(80, 20, 190)),
  position: new CANNON.Vec3(80, 4.5, 250)
});
_si58.quaternion.setFromEuler(0, 0, 0);
world.addBody(_si58);

let _si59;
_si59 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(80, 20, 114)),
  position: new CANNON.Vec3(235, 4.5, 335)
});
_si59.quaternion.setFromEuler(0, 0, 0);
world.addBody(_si59);



let _si60;
_si60 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(80, 20, 114)),
  position: new CANNON.Vec3(176, 4.5,200)
});
_si60.quaternion.setFromEuler(0, 0.8, 0);
world.addBody(_si60);

let _si61;
_si61 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(80, 20, 90)),
  position: new CANNON.Vec3(180, 4.5,180)
});
_si61.quaternion.setFromEuler(0,-0.6, 0);
world.addBody(_si61);

let _si62;
_si62 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(20, 20,40)),
  position: new CANNON.Vec3(210, 4.5,110)
});
_si62.quaternion.setFromEuler(0, 0.8, 0);
world.addBody(_si62);




let _si63;
_si63 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(20, 20, 40)),
  position: new CANNON.Vec3(170, 4.5,104)
});
_si63.quaternion.setFromEuler(0,-0.3, 0);
world.addBody(_si63);


let _si64;
_si64 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(30, 20,20)),
  position: new CANNON.Vec3(250, 4.5,110)
});
_si64.quaternion.setFromEuler(0,-0.3, 0);
world.addBody(_si64);


let _si65;
_si65 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(10, 10,15)),
  position: new CANNON.Vec3(283, 4.5, 128)
});
_si65.quaternion.setFromEuler(0, -0, 0);
world.addBody(_si65);

let _si66;
_si66 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(10, 10, 15)),
  position: new CANNON.Vec3(283, 4.5, 188)
});
_si66.quaternion.setFromEuler(0, -0, 0);
world.addBody(_si66);

let _si67;
_si67 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(30, 10, 15)),
  position: new CANNON.Vec3(320, 4.5,363)
});
_si67.quaternion.setFromEuler(0, -0.8, 0);
world.addBody(_si67);


let _si68;
_si68 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(30, 10, 45)),
  position: new CANNON.Vec3(323, 4.5,430)
});
_si68.quaternion.setFromEuler(0,0,0);
world.addBody(_si68);

let _si69;
_si69 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(65, 10,36)),
  position: new CANNON.Vec3(360, 4.5, 440)
});
_si69.quaternion.setFromEuler(0, 0, 0);
world.addBody(_si69);

let _si70;
_si70 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(30, 10,20)),
  position: new CANNON.Vec3(423, 4.5, 450)
});
_si70.quaternion.setFromEuler(0, 0, 0);
world.addBody(_si70);

let _si71;
_si71 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(30, 10, 15)),
  position: new CANNON.Vec3(432, 4.5, 430)
});
_si71.quaternion.setFromEuler(0, 0, 0);
world.addBody(_si71);



let _si72;
_si72 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(25, 10, 8)),
  position: new CANNON.Vec3(400, 4.5,400)
});
_si72.quaternion.setFromEuler(0, 0, 0);
world.addBody(_si72);

let _si73;
_si73 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(25, 10,20)),
  position: new CANNON.Vec3(-100, 4.5, 482)
});
_si73.quaternion.setFromEuler(0, 0, 0);
world.addBody(_si73);

let _si74;
_si74 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(35, 10, 20)),
  position: new CANNON.Vec3(-60, 4.5, 482)
});
_si74.quaternion.setFromEuler(0,0.6, 0);
world.addBody(_si74);

//===
let _si75;
_si75 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(35, 10, 20)),
  position: new CANNON.Vec3(10, 4.5, 400)
});
_si75.quaternion.setFromEuler(0,0.9, 0);
world.addBody(_si75);


let _si76;
_si76 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(20, 10, 30)),
  position: new CANNON.Vec3(-14, 4.5, 440)
});
_si76.quaternion.setFromEuler(0,-0.3, 0);
world.addBody(_si76);

let _si77;
_si77 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(20, 10, 34)),
  position: new CANNON.Vec3(25, 4.5, 446)
});
_si77.quaternion.setFromEuler(0,-0.8, 0);
world.addBody(_si77);


let _si78;
_si78 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(50, 10,20)),
  position: new CANNON.Vec3(-37, 4.5, 483)
});
_si78.quaternion.setFromEuler(0,0.4, 0);
world.addBody(_si78);

let _si79;
_si79 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(30, 10, 20)),
  position: new CANNON.Vec3(-104, 4.5, 499)
});
_si79.quaternion.setFromEuler(0,-0.2,0);
world.addBody(_si79);


let _si80;
_si80 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(35, 10, 20)),
  position: new CANNON.Vec3(-150, 4.5, 485)
});
_si80.quaternion.setFromEuler(0,-0.1, 0);
world.addBody(_si80);

let _si81;
_si81 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(40, 10,55)),
  position: new CANNON.Vec3(-165, 4.5, 415)
});
_si81.quaternion.setFromEuler(0, -0.1, 0);
world.addBody(_si81);


let _si82;
_si82 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(10, 10,10)),
  position: new CANNON.Vec3(-130, 4.5, 450)
});
_si82.quaternion.setFromEuler(0,0.2, 0);
world.addBody(_si82);


let _si83;
_si83 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(10, 10, 20)),
  position: new CANNON.Vec3(-199, 4.5, 480)
});
_si83.quaternion.setFromEuler(0,0.8,0);
world.addBody(_si83);

let _si84;
_si84 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(10, 10, 50)),
  position: new CANNON.Vec3(-210, 4.5, 430)
});
_si84.quaternion.setFromEuler(0, 0, 0);
world.addBody(_si84);

let _si85;
_si85 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(10, 10, 50)),
  position: new CANNON.Vec3(-160, 4.5, 390)
});
_si85.quaternion.setFromEuler(0, 0, 0);
world.addBody(_si85);


let _si86;
_si86 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(10, 10, 50)),
  position: new CANNON.Vec3(-176, 4.5, 397)
});
_si86.quaternion.setFromEuler(0, 0, 0);
world.addBody(_si86);

let _si87;
_si87 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(10, 10, 20)),
  position: new CANNON.Vec3(-150, 4.5, 370)
});
_si87.quaternion.setFromEuler(0, 0, 0);
world.addBody(_si87);

let _si88;
_si88 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(125, 10, 20)),
  position: new CANNON.Vec3(-210, 4.5, 140)
});
_si88.quaternion.setFromEuler(0, 0, 0);
world.addBody(_si88);

let _si89;
_si89 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(100, 10, 20)),
  position: new CANNON.Vec3(-480, 4.5, 210)
});
_si89.quaternion.setFromEuler(0,0.6, 0);
world.addBody(_si89);


let _si90;
_si90 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(30, 10, 20)),
  position: new CANNON.Vec3(-365, 4.5, 140)
});
_si90.quaternion.setFromEuler(0,0.3, 0);
world.addBody(_si90);


/***
 ====================

.     AB code End.....
 ====================
***/
//_____________________________________
/***
 ====================

.     CD Map CORD START.....
 ====================
***/

let _CDmap;
loader.load('./CD MAP Mauntain.glb', function(glb) {
  _CDmap = glb.scene;
  _CDmap.position.set(-1000,0.1,40);
  _CDmap.scale.set(60,50, 60);
  _CDmap.rotation.y = Math.PI / 1;
  scene.add(_CDmap);
});

let _CDtree1;
loader.load('./CD MAP tree1.glb', function(glb) {
  _CDtree1 = glb.scene;
_CDtree1.position.set(-1000,0.1,40);
_CDtree1.scale.set(60,50, 60);
 _CDtree1.rotation.y = Math.PI / 1;
  scene.add(_CDtree1);
});

let _CDtree2;
loader.load('./CD MAP tree2.glb', function(glb) {
  _CDtree2 = glb.scene;
_CDtree2.position.set(-1000,0.1,40);
_CDtree2.scale.set(60,50, 60);
 _CDtree2.rotation.y = Math.PI / 1;
  scene.add(_CDtree2);
});
const _CDplace = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(350, 1, 360)),
  position: new CANNON.Vec3(-1280, 0, -140),
});
world.addBody(_CDplace);



const _CD1 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(50, 1, 20)),
  position: new CANNON.Vec3(-880, 0,40),
});
_CD1.quaternion.setFromEuler(0,0,0);
world.addBody(_CD1);


const _CD2 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(80, 1, 20)),
  position: new CANNON.Vec3(-915, 0, 40),
});
_CD2.quaternion.setFromEuler(0, 0,-0.1);
world.addBody(_CD2);


const _CD3 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(20, 1, 20)),
  position: new CANNON.Vec3(-1015, 7.8, 40),
});
_CD3.quaternion.setFromEuler(0, 0,0.01);
world.addBody(_CD3);

const _CD4 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(20, 1, 20)),
  position: new CANNON.Vec3(-1055, 7.6, 40),
});
_CD4.quaternion.setFromEuler(0, 0, 0);
world.addBody(_CD4);

const _CD5 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(20, 1, 20)),
  position: new CANNON.Vec3(-1076, 7.6, 40),
});
_CD5.quaternion.setFromEuler(0, 0,0);
world.addBody(_CD5);




const _CD6 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(20, 1, 20)),
  position: new CANNON.Vec3(-1090, 7.6, 40),
});
_CD6.quaternion.setFromEuler(0.1,0,-0.1);
world.addBody(_CD6);



const _CD7 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(20, 1, 20)),
  position: new CANNON.Vec3(-1130,11.5, 40),
});
_CD7.quaternion.setFromEuler(0.1,0,-0.1);
world.addBody(_CD7);



const _CD8 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(10, 1, 25)),
  position: new CANNON.Vec3(-1125,12.900,30),
});
_CD8.quaternion.setFromEuler(0.050,-0.6,-0.2);
world.addBody(_CD8);


const _CD9 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(10, 1, 25)),
  position: new CANNON.Vec3(-1137,17.6,15),
});
_CD9.quaternion.setFromEuler(0.060,-0.6,-0.2);
world.addBody(_CD9);



const _CD10 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(10, 1, 25)),
  position: new CANNON.Vec3(-1150,22.4, 0),
});
_CD10.quaternion.setFromEuler(0.060, -0.6, -0.2);
world.addBody(_CD10);



const _CD11 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(10, 1,30)),
  position: new CANNON.Vec3(-1160,27.6, -20),
});
_CD11.quaternion.setFromEuler(0.060, -0.6,-0.2);
world.addBody(_CD11);



const _CD12 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(10, 1, 30)),
  position: new CANNON.Vec3(-1170,31.7, -40),
});
_CD12.quaternion.setFromEuler(0.060, -0.6, -0.1);
world.addBody(_CD12);



const _CD13 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(10, 1, 30)),
  position: new CANNON.Vec3(-1195,33.7, -40),
});
_CD13.quaternion.setFromEuler(0.060, -0.6, -0.1);
world.addBody(_CD13);




const _CD14 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(5),
  position: new CANNON.Vec3(-1180,32.4, -70),
});
_CD14.quaternion.setFromEuler(0.060, -0.6, -0.1);
world.addBody(_CD14);


const _CD15 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(5),
  position: new CANNON.Vec3(-1185, 32.5, -70),
});
_CD15.quaternion.setFromEuler(0.060, -0.6, -0.1);
world.addBody(_CD15);



 const _CD16 = new CANNON.Body({
   mass: 0,
   shape: new CANNON.Sphere(5),
   position: new CANNON.Vec3(-1190, 32.5, -70),
 });
 _CD16.quaternion.setFromEuler(0.060, -0.6, -0.1);
 world.addBody(_CD16);


const _CD17 = new CANNON.Body({
   mass: 0,
   shape: new CANNON.Sphere(5),
   position: new CANNON.Vec3(-1190, 32.3, -65),
 });
 _CD17.quaternion.setFromEuler(0.060, -0.6, -0.1);
 world.addBody(_CD17);


const _CD18 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(5),
  position: new CANNON.Vec3(-1175, 31.3, -65),
});
_CD18.quaternion.setFromEuler(0.060, -0.6, -0.1);
world.addBody(_CD18);


const _CD19 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(5),
  position: new CANNON.Vec3(-1173, 31, -63),
});
_CD19.quaternion.setFromEuler(0.060, -0.6, -0.1);
world.addBody(_CD19);


const _CD20 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(5),
  position: new CANNON.Vec3(-1170, 31, -63),
});
_CD20.quaternion.setFromEuler(0.060, -0.6, -0.1);
world.addBody(_CD20);



const _CD21 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(5),
  position: new CANNON.Vec3(-1170, 31, -67),
});
_CD21.quaternion.setFromEuler(0.060, -0.6, -0.1);
world.addBody(_CD21);


const _CD22 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(5),
  position: new CANNON.Vec3(-1165, 31, -69),
});
_CD22.quaternion.setFromEuler(0.060, -0.6, -0.1);
world.addBody(_CD22);

const _CD23 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(5),
  position: new CANNON.Vec3(-1169, 31, -71),
});
_CD23.quaternion.setFromEuler(0.060, -0.6, -0.1);
world.addBody(_CD23);


const _CD24 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(5),
  position: new CANNON.Vec3(-1175, 32, -71),
});
_CD24.quaternion.setFromEuler(0.060, -0.6, -0.1);
world.addBody(_CD24);


const _CD25 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(20, 1, 10)),
  position: new CANNON.Vec3(-1182, 36, -80),
});
_CD25.quaternion.setFromEuler(0,0,-0.1);
world.addBody(_CD25);


const _CD26 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(20, 1, 10)),
  position: new CANNON.Vec3(-1182, 36.7, -100),
});
_CD26.quaternion.setFromEuler(0.1,0, -0.1);
world.addBody(_CD26);




const _CD27 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(20, 1, 10)),
  position: new CANNON.Vec3(-1182, 38.7, -120),
});
_CD27.quaternion.setFromEuler(0.1, 0, -0.1);
world.addBody(_CD27);




const _CD28 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(25, 1, 10)),
  position: new CANNON.Vec3(-1182,40.7, -140),
});
_CD28.quaternion.setFromEuler(0.1, 0, -0.1);
world.addBody(_CD28);



const _CD29 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(25, 1, 10)),
  position: new CANNON.Vec3(-1182, 42.7, -160),
});
_CD29.quaternion.setFromEuler(0.1, 0, -0.1);
world.addBody(_CD29);




















function ss() {
//mesh.position.copy(_CD16.position);
//mesh.quaternion.copy(_CD16.quaternion);
 
}
ss();











/***
 ====================

.     CD CORD END.....
 ====================
***/




//_____________________________________
//______truck Body parts codes ______
var geometry = new THREE.BoxGeometry(16, 4, 4);
var material = new THREE.MeshLambertMaterial({
  map: new THREE.TextureLoader().load("/road texture /road.jpeg"),
});
var cB = new THREE.Mesh(geometry, material);
scene.add(cB);


let carBody   ;
  carBody= new CANNON.Body({
   mass:3,
   shape: new CANNON.Box(new CANNON.Vec3(8,2, 2)),//4.5
   position: new CANNON.Vec3(-880,40, 10)
 });
 
 let vehicle;
 
 vehicle = new CANNON.RigidVehicle({
   chassisBody: carBody,
 });
//______________________________________
const mass = 1;
const axisWidth = 5;
const wheelShape=new CANNON.Sphere(2);
const wheelMaterial =new CANNON.Material("wheel");
const down = new CANNON.Vec3(0,5, 0);



let wheelBody1,wheelBody2,wheelBody3,wheelBody4;

wheelBody1 = new CANNON.Body({
    mass,
    material: wheelMaterial,
});                     /*1*/
  wheelBody1.addShape(wheelShape);
  wheelBody1.angularDamping = 0.8;
  
 
vehicle.addWheel({
    body: wheelBody1,
    position: new CANNON.Vec3(-4,-1,-3),
    axis: new CANNON.Vec3(0, 0, 1),
    direction: down,
  });
//___________________________________

wheelBody2 = new CANNON.Body({
  mass,
  material: wheelMaterial,
}); /*1*/
wheelBody2.addShape(wheelShape);
wheelBody2.angularDamping = 0.8;


vehicle.addWheel({
  body: wheelBody2,
  position: new CANNON.Vec3(4, -1, -3),
  axis: new CANNON.Vec3(0, 0, 1),
  direction: down,
});

//___________________________________

wheelBody3 = new CANNON.Body({
  mass,
  material: wheelMaterial,
}); /*1*/
wheelBody3.addShape(wheelShape);
wheelBody3.angularDamping = 0.8;


vehicle.addWheel({
  body: wheelBody3,
  position: new CANNON.Vec3(4, -1, 3),
  axis: new CANNON.Vec3(0, 0, 1),
  direction: down,
});


//___________________________________

wheelBody4 = new CANNON.Body({
  mass,
  material: wheelMaterial,
}); /*1*/
wheelBody4.addShape(wheelShape);
wheelBody4.angularDamping = 0.8;


vehicle.addWheel({
  body: wheelBody4,
  position: new CANNON.Vec3(-4, -1, 3),
  axis: new CANNON.Vec3(0, 0, 1),
  direction: down,
});
vehicle.addToWorld(world);





//______________________________________
let maxForce = 75;
let maxForce1 = 0;



//______________________________________

const move = document.getElementById('move');
move.addEventListener('click',function (){
 vehicle.setWheelForce(-maxForce,1);
 vehicle.setWheelForce(-maxForce,2);
 
 function fname() {
   requestAnimationFrame(fname);
   console.log('h')
 }
  fname();
});
//___________________________
const down1 = document.getElementById('down1');
down1.addEventListener('click',function(){
  vehicle.setWheelForce(maxForce, 1);
  vehicle.setWheelForce(maxForce, 2);
  console.log('h')

});
//___________________________
let maxSteerVal = Math.PI / 15.5;
let maxSteerVal1 = Math.PI / 1;



const left = document.getElementById('left');
left.addEventListener('touchstart', function() {
  vehicle.setSteeringValue(maxSteerVal, 2);
  vehicle.setSteeringValue(maxSteerVal, 1);

});



//=====
left.addEventListener('touchend', function() {
  vehicle.setSteeringValue(maxSteerVal1, 2);
  vehicle.setSteeringValue(maxSteerVal1, 1);

});

//___________________________________

const right = document.getElementById('right');
right.addEventListener('touchstart', function() {
  vehicle.setSteeringValue(-maxSteerVal, 2);
  vehicle.setSteeringValue(-maxSteerVal, 1);

});
//============
right.addEventListener('touchend', function() {
  vehicle.setSteeringValue(maxSteerVal1, 2);
  vehicle.setSteeringValue(maxSteerVal1, 1);

});








const controls = new OrbitControls(camera,renderer.domElement);

cB.add(camera);
camera.position.set(1, 5, 30);



//__________________________________
function animate(){
  requestAnimationFrame(animate);
  camera.lookAt(cB.position);
  world.fixedStep();
 //cannonDebugRenderer.update();


cB.position.copy(carBody.position);
cB.quaternion.copy(carBody.quaternion);

  
  
 
 
 
  renderer.render(scene,camera);
}
animate();
