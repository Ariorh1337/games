import { VRButton } from '../lib/jsm/webxr/VRButton.js';
import { OrbitControls } from '../lib/jsm/controls/OrbitControls.js';
import Controllers from "./controllers.js";

export default class Game {
    canvasContainer;
    renderer
    canvas;
    camera;
    tempMatrix;

    scene;
    controllers;

    constructor() {
        this.init();
        this.initObjects();
        this.initControls();
    }

    init() {
        /*** main HTML container */
        this.canvasContainer = document.createElement( 'div' );
        document.body.appendChild( this.canvasContainer );

        /*** Camera */
        this.camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 10 );
        this.camera.position.set( 0, 1.6, 3 );

        /*** */
        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.shadowMap.enabled = true;
        this.renderer.xr.enabled = true;

        this.canvas = this.renderer.domElement;
        this.canvasContainer.appendChild( this.canvas );

        /*** Button to enter XR mode */
        document.body.appendChild( VRButton.createButton( this.renderer ) );

        /*** */
        this.renderer.setAnimationLoop( this.render.bind( this ) );

        /*** */
        this.tempMatrix = new THREE.Matrix4();
    }

    initControls () {
        const { camera, canvasContainer } = this;

        /*** Mouse orbit control before VR entered */
        const mouseOrbitControl = new OrbitControls( camera, canvasContainer );
        mouseOrbitControl.target.set( 0, 1.6, 0 );
        mouseOrbitControl.update();

        /*** Controllers */
        this.controllers = new Controllers( this );
        this.controllers.addTo( this.scene );
    }

    initObjects() {
        const scene = this.scene = new THREE.Scene();
        scene.background = new THREE.Color( 0x808080 );

        /*** Floor */
        const floorGeometry = new THREE.PlaneGeometry( 4, 4 );
        const floorMaterial = new THREE.MeshStandardMaterial( {
            color: 0xeeeeee,
            roughness: 1.0,
            metalness: 0.0
        } );
        const floor = new THREE.Mesh( floorGeometry, floorMaterial );
        floor.rotation.x = - Math.PI / 2;
        floor.receiveShadow = true;
        scene.add( floor );

        /*** Light */
        const light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 0, 6, 0 );
        light.castShadow = true;
        light.shadow.camera.top = 2;
        light.shadow.camera.bottom = - 2;
        light.shadow.camera.right = 2;
        light.shadow.camera.left = - 2;
        light.shadow.mapSize.set( 4096, 4096 );
        scene.add( light );
    

        /*** Geom Items */
        const group = this.groupObjects = new THREE.Group();
        scene.add( group );
    
        const geometries = [
            new THREE.BoxGeometry( 0.2, 0.2, 0.2 ),
            new THREE.ConeGeometry( 0.2, 0.2, 64 ),
            new THREE.CylinderGeometry( 0.2, 0.2, 0.2, 64 ),
            new THREE.IcosahedronGeometry( 0.2, 8 ),
            new THREE.TorusGeometry( 0.2, 0.04, 64, 32 )
        ];

        for ( let i = 0; i < 50; i ++ ) {
            const random = (number) => Math.floor( Math.random() * number );

            const geometry = geometries[ random( geometries.length ) ];
            const material = new THREE.MeshStandardMaterial( {
                color: Math.random() * 0xffffff,
                roughness: 0.7,
                metalness: 0.0
            } );
    
            const object = new THREE.Mesh( geometry, material );
    
            object.position.x = Math.random() * 4 - 2;
            object.position.y = Math.random() * 2;
            object.position.z = Math.random() * 4 - 2;
    
            object.rotation.x = Math.random() * 2 * Math.PI;
            object.rotation.y = Math.random() * 2 * Math.PI;
            object.rotation.z = Math.random() * 2 * Math.PI;
    
            object.scale.setScalar( Math.random() + 0.5 );
    
            object.castShadow = true;
            object.receiveShadow = true;
    
            group.add( object );
        }
    }

    render() {
        if (this?.controllers) {
            this.controllers.cleanIntersected();
            this.controllers.intersectObjects();
        }

        this?.renderer.render( this.scene, this.camera );
    }
}