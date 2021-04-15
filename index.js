//Escena
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xffffff, 10, 140);
//Camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



//Inicializar el loader
const loader = new THREE.GLTFLoader();


//Cargar Mesh
loader.load(
	// resource URL
	'https://github.com/sebasnunez/ThreeJSBlender/Candelabro.glb',
	// called when the resource is loaded
	function ( gltf ) {

		scene.add( gltf.scene );

	},
    // called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' + error);

	}
);
renderer.outputEncoding = THREE.sRGBEncoding;

//Stats
var stats;
stats = new Stats();
stats.setMode(2); // 0: fps, 1: ms, 2memory
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "100px";
stats.domElement.style.top = "10px";
document.getElementById("myStats").appendChild(stats.domElement);

//Luces
const light = new THREE.AmbientLight( 0xffffff, 1.5 );
light.position.set( 80, 100, 100 );
scene.add( light );

//Controls
controls = new THREE.OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    controls.update();
    stats.update();
}
animate();

