const _0x20e1ed=_0x203a;(function(_0x363287,_0x18e24c){const _0x7a5c6f=_0x203a,_0x5a961d=_0x363287();while(!![]){try{const _0x4f1d11=parseInt(_0x7a5c6f(0x15d))/0x1+-parseInt(_0x7a5c6f(0x14e))/0x2*(parseInt(_0x7a5c6f(0x187))/0x3)+parseInt(_0x7a5c6f(0x178))/0x4*(-parseInt(_0x7a5c6f(0x184))/0x5)+parseInt(_0x7a5c6f(0x173))/0x6*(-parseInt(_0x7a5c6f(0x17f))/0x7)+-parseInt(_0x7a5c6f(0x189))/0x8*(parseInt(_0x7a5c6f(0x180))/0x9)+-parseInt(_0x7a5c6f(0x168))/0xa+-parseInt(_0x7a5c6f(0x191))/0xb*(-parseInt(_0x7a5c6f(0x193))/0xc);if(_0x4f1d11===_0x18e24c)break;else _0x5a961d['push'](_0x5a961d['shift']());}catch(_0xb6b91f){_0x5a961d['push'](_0x5a961d['shift']());}}}(_0x34da,0xcef9b));import*as _0x2886c5 from'../jsm/three.module.js';import{OrbitControls}from'/jsm/OrbitControls.js';import*as _0x42a23e from'/jsm/cannon-es.js';import _0x273a3c from'/jsm/CannonDebugRenderer.js';const scene=new _0x2886c5[(_0x20e1ed(0x18d))](),camera=new _0x2886c5[(_0x20e1ed(0x16c))](0x4b,window[_0x20e1ed(0x190)]/window['innerHeight'],0.1,0xc350),renderer=new _0x2886c5[(_0x20e1ed(0x161))]();renderer[_0x20e1ed(0x183)][_0x20e1ed(0x186)]=!![],renderer[_0x20e1ed(0x183)][_0x20e1ed(0x18f)]=_0x2886c5[_0x20e1ed(0x169)],renderer[_0x20e1ed(0x179)](window[_0x20e1ed(0x190)],window[_0x20e1ed(0x14f)]),document[_0x20e1ed(0x192)][_0x20e1ed(0x158)](renderer[_0x20e1ed(0x16f)]),renderer[_0x20e1ed(0x15c)]('gray');var light=new _0x2886c5[(_0x20e1ed(0x172))](0xffffff,0.5);scene[_0x20e1ed(0x16e)](light);var light1=new _0x2886c5['PointLight'](0xffffff,0.5);scene[_0x20e1ed(0x16e)](light1);const world=new _0x42a23e[(_0x20e1ed(0x181))]({'gravity':new _0x42a23e[(_0x20e1ed(0x188))](0x0,-9.82,0x0)}),cannonDebugRenderer=new _0x273a3c(scene,world),p=new _0x42a23e['Body']({'mass':0x0,'shape':new _0x42a23e[(_0x20e1ed(0x199))](new _0x42a23e[(_0x20e1ed(0x188))](0x64,0x1,0x64))});world[_0x20e1ed(0x177)](p);function _0x34da(){const _0x143642=['WebGLRenderer','BoxGeometry','length','postStep','quaternion','click','lookAt','7987690zrxtJv','PCFSoftShadowMap','broadphase','setFromEuler','PerspectiveCamera','RaycastVehicle','add','domElement','red','collisionFilterGroup','AmbientLight','11850iSLDMZ','Body','SAPBroadphase','MeshLambertMaterial','addBody','949372kDZPlp','setSize','setSteeringValue','fixedStep','addWheel','addToWorld','push','1246fPrPIl','9cTjVXs','World','updateWheelTransform','shadowMap','5luRCnz','chassisConnectionPointLocal','enabled','3141834BSPgRe','Vec3','5919600EtQEeQ','addEventListener','set','keydown','Scene','touchstart','type','innerWidth','4764661xmgJFP','body','96YjRdfM','SphereGeometry','ArrowDown','addShape','wheelInfos','position','Box','key','setBrake','touchend','getElementById','2FNtZCg','innerHeight','Quaternion','applyEngineForce','Material','Mesh','ArrowLeft','copy','Cylinder','worldTransform','appendChild','forEach','KINEMATIC','ArrowRight','setClearColor','557453jtNeBC','radius','friction','keyup'];_0x34da=function(){return _0x143642;};return _0x34da();}const s=new _0x42a23e['Body']({'mass':0x0,'shape':new _0x42a23e[(_0x20e1ed(0x199))](new _0x42a23e[(_0x20e1ed(0x188))](0xa,0.2,0xa)),'position':new _0x42a23e['Vec3'](0x5,0x1,0x0)});world[_0x20e1ed(0x177)](s);const s1=new _0x42a23e[(_0x20e1ed(0x174))]({'mass':0x0,'shape':new _0x42a23e[(_0x20e1ed(0x199))](new _0x42a23e[(_0x20e1ed(0x188))](0xa,0.2,0xa)),'position':new _0x42a23e['Vec3'](0x1e,0x1,0x0)});world['addBody'](s1);var geometry=new _0x2886c5[(_0x20e1ed(0x162))](0x4,0x1,0x2),material=new _0x2886c5[(_0x20e1ed(0x176))]({'color':0xf3ffe2}),mesh=new _0x2886c5[(_0x20e1ed(0x153))](geometry,material);scene[_0x20e1ed(0x16e)](mesh);const chassisShape=new _0x42a23e['Box'](new _0x42a23e[(_0x20e1ed(0x188))](0x2,0.5,0x1)),chassisBody=new _0x42a23e[(_0x20e1ed(0x174))]({'mass':0x96});chassisBody[_0x20e1ed(0x196)](chassisShape),chassisBody[_0x20e1ed(0x198)][_0x20e1ed(0x18b)](0xa,1.9,0x0),chassisBody['angularVelocity'][_0x20e1ed(0x18b)](0x0,0.5,0x0),world[_0x20e1ed(0x177)](chassisBody);const vehicle=new _0x42a23e[(_0x20e1ed(0x16d))]({'chassisBody':chassisBody}),wheelOptions={'radius':0.5,'directionLocal':new _0x42a23e[(_0x20e1ed(0x188))](0x0,-0x1,0x0),'suspensionStiffness':0x1e,'suspensionRestLength':0.3,'frictionSlip':1.4,'dampingRelaxation':2.3,'dampingCompression':4.4,'maxSuspensionForce':0x186a0,'rollInfluence':0.01,'axleLocal':new _0x42a23e[(_0x20e1ed(0x188))](0x0,0x0,0x1),'chassisConnectionPointLocal':new _0x42a23e[(_0x20e1ed(0x188))](-0x1,0x0,0x1),'maxSuspensionTravel':0.3,'customSlidingRotationalSpeed':-0x1e,'useCustomSlidingRotationalSpeed':!![]};wheelOptions['chassisConnectionPointLocal'][_0x20e1ed(0x18b)](-0x1,0x0,0x1),vehicle[_0x20e1ed(0x17c)](wheelOptions),wheelOptions['chassisConnectionPointLocal'][_0x20e1ed(0x18b)](-0x1,0x0,-0x1),vehicle['addWheel'](wheelOptions),wheelOptions[_0x20e1ed(0x185)][_0x20e1ed(0x18b)](0x1,0x0,0x1),vehicle['addWheel'](wheelOptions),wheelOptions['chassisConnectionPointLocal'][_0x20e1ed(0x18b)](0x1,0x0,-0x1),vehicle[_0x20e1ed(0x17c)](wheelOptions),wheelOptions['chassisConnectionPointLocal']['set'](0x0,1.3,0x0),vehicle[_0x20e1ed(0x17c)](wheelOptions),vehicle[_0x20e1ed(0x17d)](world);var geometry=new _0x2886c5[(_0x20e1ed(0x194))](0.6),material=new _0x2886c5['MeshLambertMaterial']({'color':'red'}),mesh1=new _0x2886c5[(_0x20e1ed(0x153))](geometry,material);scene[_0x20e1ed(0x16e)](mesh1);var geometry=new _0x2886c5['SphereGeometry'](0.6),material=new _0x2886c5[(_0x20e1ed(0x176))]({'color':_0x20e1ed(0x170)}),mesh2=new _0x2886c5['Mesh'](geometry,material);scene['add'](mesh2);var geometry=new _0x2886c5[(_0x20e1ed(0x194))](0.6),material=new _0x2886c5[(_0x20e1ed(0x176))]({'color':_0x20e1ed(0x170)}),mesh3=new _0x2886c5[(_0x20e1ed(0x153))](geometry,material);scene[_0x20e1ed(0x16e)](mesh3);var geometry=new _0x2886c5[(_0x20e1ed(0x194))](0.6),material=new _0x2886c5[(_0x20e1ed(0x176))]({'color':_0x20e1ed(0x170)}),mesh4=new _0x2886c5[(_0x20e1ed(0x153))](geometry,material);scene[_0x20e1ed(0x16e)](mesh4);const wheelBodies=[],wheelBodies1=[];let wi,boxA;wi=new _0x42a23e['Sphere'](0.6),boxA=new _0x42a23e[(_0x20e1ed(0x199))](new _0x42a23e[(_0x20e1ed(0x188))](0.9,0x1,0.5));function _0x203a(_0x518d34,_0x4411c0){const _0x34da95=_0x34da();return _0x203a=function(_0x203a48,_0x398f26){_0x203a48=_0x203a48-0x14d;let _0x36880d=_0x34da95[_0x203a48];return _0x36880d;},_0x203a(_0x518d34,_0x4411c0);}const sp=new _0x42a23e[(_0x20e1ed(0x174))]({'mass':0x1,'material':boxA});world[_0x20e1ed(0x177)](sp);const wheelMaterial=new _0x42a23e[(_0x20e1ed(0x152))]('wheel');vehicle[_0x20e1ed(0x197)][_0x20e1ed(0x159)](_0x44e9a9=>{const _0x107381=_0x20e1ed,_0x17260e=new _0x42a23e[(_0x107381(0x156))](_0x44e9a9[_0x107381(0x15e)],_0x44e9a9['radius'],_0x44e9a9[_0x107381(0x15e)]/0x2,0x14),_0x5f2290=new _0x42a23e[(_0x107381(0x174))]({'mass':0x0,'material':wheelMaterial});_0x5f2290[_0x107381(0x18f)]=_0x42a23e[_0x107381(0x174)][_0x107381(0x15a)],_0x5f2290[_0x107381(0x171)]=0x0;const _0x5bd415=new _0x42a23e[(_0x107381(0x174))]({'mass':0x0,'material':wheelMaterial});_0x5bd415[_0x107381(0x18f)]=_0x42a23e['Body']['KINEMATIC'],_0x5bd415['collisionFilterGroup']=0x0;const _0xfc4fcf=new _0x42a23e[(_0x107381(0x150))]()[_0x107381(0x16b)](-Math['PI']/0x2,0x0,0x0);_0x5f2290['addShape'](wi,new _0x42a23e[(_0x107381(0x188))](),_0xfc4fcf),wheelBodies['push'](_0x5f2290),world[_0x107381(0x177)](_0x5f2290),_0x5bd415[_0x107381(0x196)](boxA,new _0x42a23e['Vec3'](),_0xfc4fcf),wheelBodies1[_0x107381(0x17e)](_0x5bd415),world['addBody'](_0x5bd415);}),world[_0x20e1ed(0x18a)](_0x20e1ed(0x164),()=>{const _0x1774a4=_0x20e1ed;for(let _0x5679a8=0x0;_0x5679a8<vehicle[_0x1774a4(0x197)][_0x1774a4(0x163)];_0x5679a8++){vehicle[_0x1774a4(0x182)](_0x5679a8);const _0x3b503f=vehicle[_0x1774a4(0x197)][0x0]['worldTransform'],_0x240fc7=wheelBodies[0x0];_0x240fc7['position'][_0x1774a4(0x155)](_0x3b503f[_0x1774a4(0x198)]),_0x240fc7[_0x1774a4(0x165)][_0x1774a4(0x155)](_0x3b503f[_0x1774a4(0x165)]),mesh1[_0x1774a4(0x198)]['copy'](_0x3b503f['position']),mesh1[_0x1774a4(0x165)]['copy'](_0x3b503f[_0x1774a4(0x165)]);const _0x240a28=vehicle[_0x1774a4(0x197)][0x1][_0x1774a4(0x157)],_0x853c9c=wheelBodies[0x1];_0x853c9c['position']['copy'](_0x240a28[_0x1774a4(0x198)]),_0x853c9c[_0x1774a4(0x165)][_0x1774a4(0x155)](_0x240a28[_0x1774a4(0x165)]),mesh2['position'][_0x1774a4(0x155)](_0x240a28[_0x1774a4(0x198)]),mesh2[_0x1774a4(0x165)]['copy'](_0x240a28[_0x1774a4(0x165)]);const _0x54d782=vehicle[_0x1774a4(0x197)][0x2][_0x1774a4(0x157)],_0x1e9513=wheelBodies[0x2];_0x1e9513[_0x1774a4(0x198)][_0x1774a4(0x155)](_0x54d782[_0x1774a4(0x198)]),_0x1e9513[_0x1774a4(0x165)][_0x1774a4(0x155)](_0x54d782[_0x1774a4(0x165)]),mesh3['position'][_0x1774a4(0x155)](_0x54d782[_0x1774a4(0x198)]),mesh3[_0x1774a4(0x165)]['copy'](_0x54d782[_0x1774a4(0x165)]);const _0xd4ecf8=vehicle[_0x1774a4(0x197)][0x3][_0x1774a4(0x157)],_0x4c2c67=wheelBodies[0x3];_0x4c2c67[_0x1774a4(0x198)][_0x1774a4(0x155)](_0xd4ecf8[_0x1774a4(0x198)]),_0x4c2c67[_0x1774a4(0x165)]['copy'](_0xd4ecf8[_0x1774a4(0x165)]),mesh4[_0x1774a4(0x198)]['copy'](_0xd4ecf8['position']),mesh4['quaternion']['copy'](_0xd4ecf8['quaternion']);const _0x152bbe=vehicle['wheelInfos'][0x4][_0x1774a4(0x157)],_0x4fa193=wheelBodies1[0x4];_0x4fa193[_0x1774a4(0x198)]['copy'](_0x152bbe[_0x1774a4(0x198)]),_0x4fa193[_0x1774a4(0x165)][_0x1774a4(0x155)](_0x152bbe['quaternion']);}});const move1=document[_0x20e1ed(0x14d)]('m1'),move2=document[_0x20e1ed(0x14d)]('m2'),move3=document[_0x20e1ed(0x14d)]('m3'),move4=document[_0x20e1ed(0x14d)]('m4'),move5=document[_0x20e1ed(0x14d)]('m5');move1[_0x20e1ed(0x18a)](_0x20e1ed(0x166),function(){const _0x1b8e0b=_0x20e1ed,_0x1b1b0a=0x64;vehicle[_0x1b8e0b(0x151)](-_0x1b1b0a,0x2),vehicle[_0x1b8e0b(0x151)](-_0x1b1b0a,0x3),vehicle[_0x1b8e0b(0x19b)](0x0,0x0),vehicle[_0x1b8e0b(0x19b)](0x0,0x1),vehicle['setBrake'](0x0,0x2),vehicle[_0x1b8e0b(0x19b)](0x0,0x3);}),move2['addEventListener'](_0x20e1ed(0x18e),function(){const _0x9dda49=_0x20e1ed,_0x11f271=0.5;vehicle['setSteeringValue'](_0x11f271,0x0),vehicle[_0x9dda49(0x17a)](_0x11f271,0x1);}),move2[_0x20e1ed(0x18a)](_0x20e1ed(0x19c),function(){const _0x1fc652=_0x20e1ed,_0xd2bb4c=0x0;vehicle[_0x1fc652(0x17a)](_0xd2bb4c,0x0),vehicle[_0x1fc652(0x17a)](_0xd2bb4c,0x1);}),move3[_0x20e1ed(0x18a)]('touchstart',function(){const _0x34484a=_0x20e1ed,_0x3353f7=0.5;vehicle[_0x34484a(0x17a)](-_0x3353f7,0x0),vehicle[_0x34484a(0x17a)](-_0x3353f7,0x1);}),move3[_0x20e1ed(0x18a)]('touchend',function(){const _0x415fed=_0x20e1ed,_0x4841c0=0x0;vehicle[_0x415fed(0x17a)](_0x4841c0,0x0),vehicle[_0x415fed(0x17a)](_0x4841c0,0x1);}),move4[_0x20e1ed(0x18a)](_0x20e1ed(0x18e),function(){const _0x4e8423=_0x20e1ed,_0x219c0c=0x5;vehicle[_0x4e8423(0x19b)](_0x219c0c,0x0),vehicle[_0x4e8423(0x19b)](_0x219c0c,0x1),vehicle['setBrake'](_0x219c0c,0x2),vehicle[_0x4e8423(0x19b)](_0x219c0c,0x3);const _0x399e11=![];vehicle[_0x4e8423(0x151)](-_0x399e11,0x2),vehicle[_0x4e8423(0x151)](-_0x399e11,0x3);}),move5[_0x20e1ed(0x18a)](_0x20e1ed(0x18e),function(){const _0x5dd80a=_0x20e1ed,_0xd5eb96=0x64;vehicle[_0x5dd80a(0x151)](_0xd5eb96,0x2),vehicle[_0x5dd80a(0x151)](_0xd5eb96,0x3),vehicle['setBrake'](0x0,0x0),vehicle[_0x5dd80a(0x19b)](0x0,0x1),vehicle[_0x5dd80a(0x19b)](0x0,0x2),vehicle[_0x5dd80a(0x19b)](0x0,0x3);}),document['addEventListener'](_0x20e1ed(0x18c),_0x3061df=>{const _0x5a4375=_0x20e1ed,_0x364657=0.5,_0x59d18f=0x64,_0x10d732=0x5;switch(_0x3061df[_0x5a4375(0x19a)]){case'w':case'ArrowUp':vehicle[_0x5a4375(0x151)](-_0x59d18f,0x2),vehicle[_0x5a4375(0x151)](-_0x59d18f,0x3);break;case's':case _0x5a4375(0x195):vehicle[_0x5a4375(0x151)](_0x59d18f,0x2),vehicle[_0x5a4375(0x151)](_0x59d18f,0x3);break;case'a':case _0x5a4375(0x154):vehicle['setSteeringValue'](_0x364657,0x0),vehicle['setSteeringValue'](_0x364657,0x1);break;case'd':case _0x5a4375(0x15b):vehicle[_0x5a4375(0x17a)](-_0x364657,0x0),vehicle[_0x5a4375(0x17a)](-_0x364657,0x1);break;case'b':vehicle[_0x5a4375(0x19b)](_0x10d732,0x0),vehicle['setBrake'](_0x10d732,0x1),vehicle[_0x5a4375(0x19b)](_0x10d732,0x2),vehicle[_0x5a4375(0x19b)](_0x10d732,0x3);break;}}),document['addEventListener'](_0x20e1ed(0x160),_0xaaa9a9=>{const _0xb3a300=_0x20e1ed;switch(_0xaaa9a9[_0xb3a300(0x19a)]){case'w':case'ArrowUp':vehicle[_0xb3a300(0x151)](0x0,0x2),vehicle[_0xb3a300(0x151)](0x0,0x3);break;case's':case'ArrowDown':vehicle[_0xb3a300(0x151)](0x0,0x2),vehicle[_0xb3a300(0x151)](0x0,0x3);break;case'a':case'ArrowLeft':vehicle[_0xb3a300(0x17a)](0x0,0x0),vehicle[_0xb3a300(0x17a)](0x0,0x1);break;case'd':case _0xb3a300(0x15b):vehicle[_0xb3a300(0x17a)](0x0,0x0),vehicle[_0xb3a300(0x17a)](0x0,0x1);break;case'b':vehicle[_0xb3a300(0x19b)](0x0,0x0),vehicle[_0xb3a300(0x19b)](0x0,0x1),vehicle[_0xb3a300(0x19b)](0x0,0x2),vehicle['setBrake'](0x0,0x3);break;}});const controls=new OrbitControls(camera,renderer[_0x20e1ed(0x16f)]);mesh[_0x20e1ed(0x16e)](camera),camera['position']['set'](0x0,0x0,0xa);function animate(){const _0x6e7ce9=_0x20e1ed;requestAnimationFrame(animate),camera[_0x6e7ce9(0x167)](mesh[_0x6e7ce9(0x198)]),world[_0x6e7ce9(0x17b)](),cannonDebugRenderer['update'](),world[_0x6e7ce9(0x16a)]=new _0x42a23e[(_0x6e7ce9(0x175))](world),world['defaultContactMaterial'][_0x6e7ce9(0x15f)]=0x0,mesh[_0x6e7ce9(0x198)][_0x6e7ce9(0x155)](chassisBody[_0x6e7ce9(0x198)]),mesh[_0x6e7ce9(0x165)]['copy'](chassisBody[_0x6e7ce9(0x165)]),renderer['render'](scene,camera);}animate();
