const _0x5d0fc6=_0x3c30;(function(_0x3f57ce,_0x3b01bd){const _0x195656=_0x3c30,_0x4c84e2=_0x3f57ce();while(!![]){try{const _0x11991c=parseInt(_0x195656(0x84))/0x1+parseInt(_0x195656(0x89))/0x2*(parseInt(_0x195656(0x7a))/0x3)+parseInt(_0x195656(0x7e))/0x4*(parseInt(_0x195656(0x81))/0x5)+parseInt(_0x195656(0x90))/0x6*(-parseInt(_0x195656(0x82))/0x7)+parseInt(_0x195656(0x85))/0x8+parseInt(_0x195656(0x8e))/0x9*(-parseInt(_0x195656(0x7d))/0xa)+parseInt(_0x195656(0x7c))/0xb*(-parseInt(_0x195656(0x8d))/0xc);if(_0x11991c===_0x3b01bd)break;else _0x4c84e2['push'](_0x4c84e2['shift']());}catch(_0x5e7d85){_0x4c84e2['push'](_0x4c84e2['shift']());}}}(_0x4190,0x82dd3));import*as _0x424e9c from'../jsm/three.module.js';import{OrbitControls}from'/jsm/OrbitControls.js';import*as _0x1e58f0 from'/jsm/cannon-es.js';function _0x3c30(_0x556f68,_0x13fe80){const _0x41900b=_0x4190();return _0x3c30=function(_0x3c30c1,_0x48cb9e){_0x3c30c1=_0x3c30c1-0x7a;let _0x1fec3e=_0x41900b[_0x3c30c1];return _0x1fec3e;},_0x3c30(_0x556f68,_0x13fe80);}import _0x4ec0ed from'/jsm/CannonDebugRenderer.js';function _0x4190(){const _0x4e514a=['642004pqgbJd','10NWmbwq','20FAdwsh','Scene','add','661965YvoDiH','2660245UjYkga','AmbientLight','719629Skirvv','3301288scegmx','innerWidth','PerspectiveCamera','setSize','2pimoMA','gray','domElement','type','276rASzEE','2647755WlmyNZ','innerHeight','6LLhgft','enabled','PCFSoftShadowMap','2275098FGtvxw','shadowMap'];_0x4190=function(){return _0x4e514a;};return _0x4190();}const scene=new _0x424e9c[(_0x5d0fc6(0x7f))](),camera=new _0x424e9c[(_0x5d0fc6(0x87))](0x4b,window[_0x5d0fc6(0x86)]/window[_0x5d0fc6(0x8f)],0.1,0xc350),renderer=new _0x424e9c['WebGLRenderer']();renderer[_0x5d0fc6(0x7b)][_0x5d0fc6(0x91)]=!![],renderer[_0x5d0fc6(0x7b)][_0x5d0fc6(0x8c)]=_0x424e9c[_0x5d0fc6(0x92)],renderer[_0x5d0fc6(0x88)](window['innerWidth'],window['innerHeight']),document['body']['appendChild'](renderer[_0x5d0fc6(0x8b)]),renderer['setClearColor'](_0x5d0fc6(0x8a));var light=new _0x424e9c[(_0x5d0fc6(0x83))](0xffffff,0.5);scene[_0x5d0fc6(0x80)](light);const _0x2a03ce=_0x3878;(function(_0x40dce6,_0x146702){const _0x6e4a26=_0x3878,_0x178571=_0x40dce6();while(!![]){try{const _0x1e4845=-parseInt(_0x6e4a26(0xc7))/0x1*(parseInt(_0x6e4a26(0xc3))/0x2)+-parseInt(_0x6e4a26(0xbf))/0x3+parseInt(_0x6e4a26(0xbc))/0x4*(-parseInt(_0x6e4a26(0xbb))/0x5)+parseInt(_0x6e4a26(0xbd))/0x6*(-parseInt(_0x6e4a26(0xc6))/0x7)+parseInt(_0x6e4a26(0xbe))/0x8*(-parseInt(_0x6e4a26(0xca))/0x9)+parseInt(_0x6e4a26(0xc8))/0xa*(parseInt(_0x6e4a26(0xc5))/0xb)+parseInt(_0x6e4a26(0xc2))/0xc*(parseInt(_0x6e4a26(0xb9))/0xd);if(_0x1e4845===_0x146702)break;else _0x178571['push'](_0x178571['shift']());}catch(_0x37df8e){_0x178571['push'](_0x178571['shift']());}}}(_0x35de,0x6917e));function _0x3878(_0x5c2fb0,_0x54289b){const _0x35dee0=_0x35de();return _0x3878=function(_0x3878ed,_0x4d4a11){_0x3878ed=_0x3878ed-0xb9;let _0x1e7270=_0x35dee0[_0x3878ed];return _0x1e7270;},_0x3878(_0x5c2fb0,_0x54289b);}var light1=new THREE[(_0x2a03ce(0xba))](0xffffff,0.5);function _0x35de(){const _0x2e9d5c=['Vec3','2344078KBKaTS','1946RqWhud','3357adsbPf','40uQkDvk','add','6984CztTsO','3732768leAAYO','PointLight','1992700MycACP','8Lbvrez','9588qYRsVs','8464WgjXYl','1567893SGdbwt','addBody','World','120wTwpXQ','422TJntqU'];_0x35de=function(){return _0x2e9d5c;};return _0x35de();}scene[_0x2a03ce(0xc9)](light1);const world=new CANNON[(_0x2a03ce(0xc1))]({'gravity':new CANNON[(_0x2a03ce(0xc4))](0x0,-9.82,0x0)}),cannonDebugRenderer=new CannonDebugRenderer(scene,world),p=new CANNON['Body']({'mass':0x0,'shape':new CANNON['Box'](new CANNON['Vec3'](0x64,0x1,0x64))});world[_0x2a03ce(0xc0)](p);
//_______

const s = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(10,0.2,10)),
  position:new CANNON.Vec3(5,1,0)
});
world.addBody(s)


//_______

const s1 = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Box(new CANNON.Vec3(10,0.2,10)),
  position:new CANNON.Vec3(30,1,0)
});
world.addBody(s1)






//_______________
var geometry = new THREE.BoxGeometry(4, 1, 2); 
 
  var material = new THREE.MeshLambertMaterial( 
  { 
   color: 0xF3FFE2 
  }); 
 
  var mesh = new THREE.Mesh(geometry, material); 
  
  scene.add(mesh); 
 


//_______________
function _0x35a5(_0x455adf,_0x2bfcb1){const _0x1f1e55=_0x1f1e();return _0x35a5=function(_0x35a5f8,_0x564407){_0x35a5f8=_0x35a5f8-0x16c;let _0x28028a=_0x1f1e55[_0x35a5f8];return _0x28028a;},_0x35a5(_0x455adf,_0x2bfcb1);}const _0x5205ea=_0x35a5;(function(_0x542238,_0x9d8fae){const _0x25e7e9=_0x35a5,_0xd2419d=_0x542238();while(!![]){try{const _0x5391ad=-parseInt(_0x25e7e9(0x17a))/0x1*(parseInt(_0x25e7e9(0x17b))/0x2)+parseInt(_0x25e7e9(0x173))/0x3*(parseInt(_0x25e7e9(0x175))/0x4)+-parseInt(_0x25e7e9(0x17c))/0x5+-parseInt(_0x25e7e9(0x16e))/0x6*(parseInt(_0x25e7e9(0x16f))/0x7)+-parseInt(_0x25e7e9(0x16d))/0x8*(parseInt(_0x25e7e9(0x174))/0x9)+parseInt(_0x25e7e9(0x17f))/0xa+-parseInt(_0x25e7e9(0x172))/0xb*(-parseInt(_0x25e7e9(0x171))/0xc);if(_0x5391ad===_0x9d8fae)break;else _0xd2419d['push'](_0xd2419d['shift']());}catch(_0x45adf2){_0xd2419d['push'](_0xd2419d['shift']());}}}(_0x1f1e,0x5664a));function _0x1f1e(){const _0x1530cd=['Box','276576xhbfMx','781XkXNXb','89637iDGAmc','2512557eqparo','8XnflMj','position','set','addShape','RaycastVehicle','125hIYzhH','3594IMgIWS','2984745SQnrlG','addBody','Vec3','1522650YpWKHn','angularVelocity','8gIjCwN','1338ShuOxx','12362inkMZm'];_0x1f1e=function(){return _0x1530cd;};return _0x1f1e();}const chassisShape=new CANNON[(_0x5205ea(0x170))](new CANNON[(_0x5205ea(0x17e))](0x2,0.5,0x1)),chassisBody=new CANNON['Body']({'mass':0x96});chassisBody[_0x5205ea(0x178)](chassisShape),chassisBody[_0x5205ea(0x176)][_0x5205ea(0x177)](0xa,1.9,0x0),chassisBody[_0x5205ea(0x16c)][_0x5205ea(0x177)](0x0,0.5,0x0),world[_0x5205ea(0x17d)](chassisBody);const vehicle=new CANNON[(_0x5205ea(0x179))]({'chassisBody':chassisBody});





//_______
const wheelOptions = {
  radius: 0.5,
  directionLocal: new CANNON.Vec3(0,-1, 0),
  suspensionStiffness: 30,
  suspensionRestLength: 0.3,
  frictionSlip: 1.4,
  dampingRelaxation: 2.3,
  dampingCompression: 4.4,
  maxSuspensionForce: 100000,
  rollInfluence: 0.01,
  axleLocal: new CANNON.Vec3(0, 0, 1),
  chassisConnectionPointLocal: new CANNON.Vec3(-1, 0, 1),
  maxSuspensionTravel: 0.3,
  customSlidingRotationalSpeed: -30,
  useCustomSlidingRotationalSpeed: true,
}


function _0x45fd(){var _0xd165fa=['6507259bFMHZI','set','3slWQKi','10130590kocbfz','9udFyqe','addWheel','5657224PGZkCn','2qFYVnX','6571644INbXyn','chassisConnectionPointLocal','75065ozjkjD','606LpHQQu','1070792ggEKAK','91RjkhKN','1477961BiBJAs'];_0x45fd=function(){return _0xd165fa;};return _0x45fd();}var _0x716f81=_0x3956;function _0x3956(_0x3959e2,_0x4fd011){var _0x45fda1=_0x45fd();return _0x3956=function(_0x3956c6,_0x2c3f88){_0x3956c6=_0x3956c6-0xda;var _0x5e96bf=_0x45fda1[_0x3956c6];return _0x5e96bf;},_0x3956(_0x3959e2,_0x4fd011);}(function(_0x5e935d,_0x105313){var _0x5be6f4=_0x3956,_0x1fbd65=_0x5e935d();while(!![]){try{var _0x1622de=-parseInt(_0x5be6f4(0xe2))/0x1*(-parseInt(_0x5be6f4(0xdb))/0x2)+parseInt(_0x5be6f4(0xe5))/0x3*(parseInt(_0x5be6f4(0xda))/0x4)+-parseInt(_0x5be6f4(0xde))/0x5*(parseInt(_0x5be6f4(0xdf))/0x6)+parseInt(_0x5be6f4(0xe1))/0x7*(parseInt(_0x5be6f4(0xe0))/0x8)+-parseInt(_0x5be6f4(0xe7))/0x9*(parseInt(_0x5be6f4(0xe6))/0xa)+-parseInt(_0x5be6f4(0xe3))/0xb+-parseInt(_0x5be6f4(0xdc))/0xc;if(_0x1622de===_0x105313)break;else _0x1fbd65['push'](_0x1fbd65['shift']());}catch(_0x5bee02){_0x1fbd65['push'](_0x1fbd65['shift']());}}}(_0x45fd,0xeb48e),wheelOptions['chassisConnectionPointLocal'][_0x716f81(0xe4)](-0x1,0x0,0x1),vehicle['addWheel'](wheelOptions),wheelOptions[_0x716f81(0xdd)][_0x716f81(0xe4)](-0x1,0x0,-0x1),vehicle['addWheel'](wheelOptions),wheelOptions['chassisConnectionPointLocal'][_0x716f81(0xe4)](0x1,0x0,0x1),vehicle['addWheel'](wheelOptions),wheelOptions['chassisConnectionPointLocal'][_0x716f81(0xe4)](0x1,0x0,-0x1),vehicle[_0x716f81(0xe8)](wheelOptions),wheelOptions[_0x716f81(0xdd)][_0x716f81(0xe4)](0x0,1.3,0x0),vehicle['addWheel'](wheelOptions));
vehicle.addToWorld(world)



      // Add the wheel bodies
  
  
  var geometry = new THREE.SphereGeometry(0.6);
  var material = new THREE.MeshLambertMaterial(
  {
    color:'red'
  });
  var mesh1 = new THREE.Mesh(geometry, material);
  scene.add(mesh1);
  //==========
var geometry = new THREE.SphereGeometry(0.6);
var material = new THREE.MeshLambertMaterial(
{
  color: 'red'
});
var mesh2 = new THREE.Mesh(geometry, material);
scene.add(mesh2);  

  //==========
var geometry = new THREE.SphereGeometry(0.6);
var material = new THREE.MeshLambertMaterial(
{
  color: 'red'
});
var mesh3 = new THREE.Mesh(geometry, material);
scene.add(mesh3);  

  //==========
var geometry = new THREE.SphereGeometry(0.6);
var material = new THREE.MeshLambertMaterial(
{
  color: 'red'
});
var mesh4 = new THREE.Mesh(geometry, material);
scene.add(mesh4);  


  
  
  
  //******************************
  const wheelBodies = []
  const wheelBodies1 = []
  
  let wi,boxA;
   wi = new CANNON.Sphere(0.6)
   boxA= new CANNON.Box(new CANNON.Vec3(0.9,1,0.5))
   const sp = new CANNON.Body({
     mass:1,
     material:boxA
   });
   world.addBody(sp);
   
  
   
   
  const wheelMaterial = new CANNON.Material('wheel')
        
  vehicle.wheelInfos.forEach((wheel)=>{
  const cylinderShape = new CANNON.Cylinder(wheel.radius, wheel.radius, wheel.radius / 2, 20)
  //wheel.radius, wheel.radius, wheel.radius / 2, 20
  
  
  const wheelBody = new CANNON.Body({
    mass: 0,
    material: wheelMaterial,
  })
  wheelBody.type = CANNON.Body.KINEMATIC
  wheelBody.collisionFilterGroup = 0
  
  
  const wheelBody1 = new CANNON.Body({
    mass: 0,
    material: wheelMaterial,
  })
  wheelBody1.type = CANNON.Body.KINEMATIC
  wheelBody1.collisionFilterGroup = 0
  
  
  
  
  
  
  
  
  const quaternion = new CANNON.Quaternion().setFromEuler(-Math.PI / 2, 0, 0)
  
  
  
   
  
  
  
  wheelBody.addShape(wi, new CANNON.Vec3(), quaternion)
  wheelBodies.push(wheelBody)
  world.addBody(wheelBody)
//______________ 
 
 wheelBody1.addShape(boxA, new CANNON.Vec3(), quaternion)
  wheelBodies1.push(wheelBody1)
  world.addBody(wheelBody1)
 
 
 
 
    
  })







        // Update the wheel bodies
  world.addEventListener('postStep',() =>{
  for (let i = 0; i < vehicle.wheelInfos.length; i++){
    
    
  vehicle.updateWheelTransform(i)
  
  const transform = vehicle.wheelInfos[0].worldTransform
 
  const wheelBody = wheelBodies[0]
  wheelBody.position.copy(transform.position)
  wheelBody.quaternion.copy(transform.quaternion)
  //-----------
 mesh1.position.copy(transform.position)
 mesh1.quaternion.copy(transform.quaternion)
 
 
   //-----1
   const transform1 = vehicle.wheelInfos[1].worldTransform
  
  const wheelBody1 = wheelBodies[1]
  wheelBody1.position.copy(transform1.position)
  wheelBody1.quaternion.copy(transform1.quaternion)
 
 mesh2.position.copy(transform1.position)
 mesh2.quaternion.copy(transform1.quaternion)
 
 
 
    //-----2
   const transform2 = vehicle.wheelInfos[2].worldTransform
  
  const wheelBody2 = wheelBodies[2]
  wheelBody2.position.copy(transform2.position)
  wheelBody2.quaternion.copy(transform2.quaternion)
 
 mesh3.position.copy(transform2.position)
 mesh3.quaternion.copy(transform2.quaternion)
 
 
     //-----3
const transform3 = vehicle.wheelInfos[3].worldTransform
 
const wheelBody3 = wheelBodies[3]
wheelBody3.position.copy(transform3.position)
wheelBody3.quaternion.copy(transform3.quaternion)
 
mesh4.position.copy(transform3.position)
mesh4.quaternion.copy(transform3.quaternion)
 
 
 
 
 
 
 
      //-----4
      const transform4 = vehicle.wheelInfos[4].worldTransform
 
      const wheelBody4 = wheelBodies1[4]
      wheelBody4.position.copy(transform4.position)
      wheelBody4.quaternion.copy(transform4.quaternion)
 
  //mesh.position.copy(transform4.position)
  //mesh.quaternion.copy(transform4.quaternion)
 
 
 
 
  
 }

 
 
})
//______________________________________

const move1=document.getElementById('m1');
const move2=document.getElementById('m2');     
const move3=document.getElementById('m3');     

const move4=document.getElementById('m4');   
const move5=document.getElementById('m5');   

move1.addEventListener('click',function(){
  
  const maxForce = 100
  vehicle.applyEngineForce(-maxForce, 2)
  vehicle.applyEngineForce(-maxForce, 3)
  vehicle.setBrake(0, 0)
  vehicle.setBrake(0, 1)
  vehicle.setBrake(0, 2)
  vehicle.setBrake(0, 3)
});        


move2.addEventListener('touchstart',function(){
const maxSteerVal = 0.5  
vehicle.setSteeringValue(maxSteerVal, 0)
vehicle.setSteeringValue(maxSteerVal, 1)
});
move2.addEventListener('touchend',function(){
  const maxSteerVal1 = 0
  vehicle.setSteeringValue(maxSteerVal1, 0)
  vehicle.setSteeringValue(maxSteerVal1, 1)
  
  
});


move3.addEventListener('touchstart', function() {
  const maxSteerVal = 0.5
  vehicle.setSteeringValue(-maxSteerVal, 0)
  vehicle.setSteeringValue(-maxSteerVal, 1)
});

move3.addEventListener('touchend', function() {
  const maxSteerVal2 = 0
  vehicle.setSteeringValue(maxSteerVal2, 0)
  vehicle.setSteeringValue(maxSteerVal2, 1)
});



move4.addEventListener('touchstart', function() {
  const brakeForce =5
    vehicle.setBrake(brakeForce, 0)
    vehicle.setBrake(brakeForce, 1)
    vehicle.setBrake(brakeForce, 2)
    vehicle.setBrake(brakeForce, 3)
   const maxForce2 = false
  
  
  vehicle.applyEngineForce(-maxForce2, 2)
  vehicle.applyEngineForce(-maxForce2, 3)
 
    
    
  });
  /*
move4.addEventListener('touchend',function(){
  vehicle.setBrake(0, 0)
  vehicle.setBrake(0, 1)
  vehicle.setBrake(0, 2)
  vehicle.setBrake(0, 3)
})
*/
move5.addEventListener('touchstart', function() {
  const maxForce1 = 100
  vehicle.applyEngineForce(maxForce1, 2)
  vehicle.applyEngineForce(maxForce1, 3)
  vehicle.setBrake(0, 0)
  vehicle.setBrake(0, 1)
  vehicle.setBrake(0, 2)
  vehicle.setBrake(0, 3)
})

 
document.addEventListener('keydown', (event) => {
  const maxSteerVal = 0.5
         const maxForce = 100
         const brakeForce = 5

         switch (event.key) {
           case 'w':
           case 'ArrowUp':
             vehicle.applyEngineForce(-maxForce, 2)
             vehicle.applyEngineForce(-maxForce, 3)
             break

           case 's':
           case 'ArrowDown':
             vehicle.applyEngineForce(maxForce, 2)
             vehicle.applyEngineForce(maxForce, 3)
             break

           case 'a':
           case 'ArrowLeft':
             vehicle.setSteeringValue(maxSteerVal, 0)
             vehicle.setSteeringValue(maxSteerVal, 1)
             break
             case 'd':
              case 'ArrowRight':
                vehicle.setSteeringValue(-maxSteerVal, 0)
                vehicle.setSteeringValue(-maxSteerVal, 1)
                break
  
              case 'b':
                vehicle.setBrake(brakeForce, 0)
                vehicle.setBrake(brakeForce, 1)
                vehicle.setBrake(brakeForce, 2)
                vehicle.setBrake(brakeForce, 3)
                break
            }
          })

          

  // Reset force on keyup
  document.addEventListener('keyup', (event) => {
    switch (event.key) {
      case 'w':
      case 'ArrowUp':
        vehicle.applyEngineForce(0, 2)
        vehicle.applyEngineForce(0, 3)
        break

      case 's':
      case 'ArrowDown':
        vehicle.applyEngineForce(0, 2)
        vehicle.applyEngineForce(0, 3)
        break

      case 'a':
      case 'ArrowLeft':
        vehicle.setSteeringValue(0, 0)
        vehicle.setSteeringValue(0, 1)
        break
        case 'd':
          case 'ArrowRight':
            vehicle.setSteeringValue(0, 0)
            vehicle.setSteeringValue(0, 1)
            break

          case 'b':
            vehicle.setBrake(0, 0)
            vehicle.setBrake(0, 1)
            vehicle.setBrake(0, 2)
            vehicle.setBrake(0, 3)
            break
        }
        })   
            
                        







 
 
 
 const controls = new OrbitControls(camera, renderer.domElement);
 mesh.add(camera);
 camera.position.set(0,0,10);
//=================================== 
function animate(){
  requestAnimationFrame(animate);
  camera.lookAt(mesh.position);
  world.fixedStep();
  cannonDebugRenderer.update();
  world.broadphase = new CANNON.SAPBroadphase(world);
  world.defaultContactMaterial.friction = 0;
  
  
  mesh.position.copy(chassisBody.position)
  mesh.quaternion.copy(chassisBody.quaternion)
  
  

  
  
  renderer.render(scene,camera);
}
animate();
 
 
 
 
