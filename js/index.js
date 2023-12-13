import * as THREE from '../library/three.module.js';
import { OrbitControls } from '../library/OrbitControls.js';


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight);
camera.position.z = 4;

const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x)


const material = new THREE.LineBasicMaterial( {
    color: 0x6D05FF
} );

// Cube1 and cube2
const geometryCube1 = new THREE.BoxGeometry( 1.25, 1.25, 1.25 ); 
const geometryCube2 = new THREE.BoxGeometry( 2, 2, 2 ); 
const edges = new THREE.EdgesGeometry( geometryCube1 ); 
const edges1 = new THREE.EdgesGeometry( geometryCube2 );

const lineCube1 = new THREE.LineSegments(edges, material ); 
const lineCube2 = new THREE.LineSegments(edges1, material ); 

// lines
const firstPoint = 0.39;
const secondPoint = 1;

// line1
const points1 = [];
points1.push( new THREE.Vector3( Math.sqrt(firstPoint), Math.sqrt(firstPoint), Math.sqrt(firstPoint) ) );
points1.push( new THREE.Vector3(  Math.sqrt(secondPoint), Math.sqrt(secondPoint), Math.sqrt(secondPoint)  ) );

const geometryLine1 = new THREE.BufferGeometry().setFromPoints( points1 );

const line1 = new THREE.Line( geometryLine1, material );

// line2
const points2 = [];
points2.push( new THREE.Vector3( -(Math.sqrt(firstPoint)), -(Math.sqrt(firstPoint)), -(Math.sqrt(firstPoint)) ) );
points2.push( new THREE.Vector3(  -((Math.sqrt(secondPoint))), -(Math.sqrt(secondPoint)), -(Math.sqrt(secondPoint))  ) );

const geometryLine2 = new THREE.BufferGeometry().setFromPoints( points2 );

const line2 = new THREE.Line( geometryLine2, material );

// line3
const points3 = [];
points3.push( new THREE.Vector3( (Math.sqrt(firstPoint)), -(Math.sqrt(firstPoint)), -(Math.sqrt(firstPoint)) ) );
points3.push( new THREE.Vector3(  ((Math.sqrt(secondPoint))), -(Math.sqrt(secondPoint)), -(Math.sqrt(secondPoint))  ) );

const geometryLIne3 = new THREE.BufferGeometry().setFromPoints( points3 );

const line3 = new THREE.Line( geometryLIne3, material );

// line4
const points4 = [];
points4.push( new THREE.Vector3( (Math.sqrt(firstPoint)), (Math.sqrt(firstPoint)), -(Math.sqrt(firstPoint)) ) );
points4.push( new THREE.Vector3(  ((Math.sqrt(secondPoint))), (Math.sqrt(secondPoint)), -(Math.sqrt(secondPoint))  ) );

const geometryLine4 = new THREE.BufferGeometry().setFromPoints( points4 );

const line4 = new THREE.Line( geometryLine4, material );

// line5
const points5 = [];
points5.push( new THREE.Vector3( -(Math.sqrt(firstPoint)), -(Math.sqrt(firstPoint)), (Math.sqrt(firstPoint)) ) );
points5.push( new THREE.Vector3(  -((Math.sqrt(secondPoint))), -(Math.sqrt(secondPoint)), (Math.sqrt(secondPoint))  ) );

const geometryLine5 = new THREE.BufferGeometry().setFromPoints( points5 );

const line5 = new THREE.Line( geometryLine5, material );

// line6
const points6 = [];
points6.push( new THREE.Vector3( -(Math.sqrt(firstPoint)), (Math.sqrt(firstPoint)), (Math.sqrt(firstPoint)) ) );
points6.push( new THREE.Vector3(  -((Math.sqrt(secondPoint))), (Math.sqrt(secondPoint)), (Math.sqrt(secondPoint))  ) );

const geometryLine6 = new THREE.BufferGeometry().setFromPoints( points6 );

const line6 = new THREE.Line( geometryLine6, material );

// line7
const points7 = [];
points7.push( new THREE.Vector3( -(Math.sqrt(firstPoint)), (Math.sqrt(firstPoint)), -(Math.sqrt(firstPoint)) ) );
points7.push( new THREE.Vector3(  -((Math.sqrt(secondPoint))), (Math.sqrt(secondPoint)), -(Math.sqrt(secondPoint))  ) );

const geometryLine7 = new THREE.BufferGeometry().setFromPoints( points7 );

const line7 = new THREE.Line( geometryLine7, material );

// line8
const points8 = [];
points8.push( new THREE.Vector3( (Math.sqrt(firstPoint)), -(Math.sqrt(firstPoint)), (Math.sqrt(firstPoint)) ) );
points8.push( new THREE.Vector3(  ((Math.sqrt(secondPoint))), -(Math.sqrt(secondPoint)), (Math.sqrt(secondPoint))  ) );

const geometryLine8 = new THREE.BufferGeometry().setFromPoints( points8 );

const line8 = new THREE.Line( geometryLine8, material );

// grouping
const group = new THREE.Group();
group.add( lineCube1 )
group.add( lineCube2 );
group.add( line1 );
group.add( line2 );
group.add( line3 );
group.add( line4 );
group.add( line5 );
group.add( line6 );
group.add( line7 );
group.add( line8 );

scene.add(group);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

renderer.render( scene, camera );

function animate() {
    controls.update();
    
    // group.rotation.x += 0.01;
    // group.rotation.y += 0.01;
    // group.rotation.z += 0.001;

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();


