import { XRControllerModelFactory } from '../lib/jsm/webxr/XRControllerModelFactory.js';

export default class Controllers {
    game;
    pointerLine;
    modelFactory = new XRControllerModelFactory();
    list = new Array();
    intersected = new Array();

    constructor(game) {
        this.game = game;

        this.init();
    }

    init() {
        const geometry = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, - 1 ) ] );
        const line = this.pointerLine = new THREE.Line( geometry );
        line.name = 'line';
        line.scale.z = 5;

        this.raycaster = new THREE.Raycaster();

        const left = new Controller( this, 0 );
        left.body.add( line.clone() );
        this.list.push( left );

        const right = new Controller( this, 1 );
        right.body.add( line.clone() );
        this.list.push( right );
    }

    getIntersections( controller ) {
        const { tempMatrix, groupObjects } = this.game;
        const { raycaster } = this;

        tempMatrix.identity().extractRotation( controller.matrixWorld );

        raycaster.ray.origin.setFromMatrixPosition( controller.matrixWorld );
        raycaster.ray.direction.set( 0, 0, - 1 ).applyMatrix4( tempMatrix );

        return raycaster.intersectObjects( groupObjects.children );
    }

    getRaycaster( controller ) {
        const { tempMatrix, groupObjects } = this.game;
        const { raycaster } = this;

        tempMatrix.identity().extractRotation( controller.matrixWorld );

        raycaster.ray.origin.setFromMatrixPosition( controller.matrixWorld );
        raycaster.ray.direction.set( 0, 0, - 1 ).applyMatrix4( tempMatrix );

        return raycaster;
    }

    intersectObjects() {
        this.list.forEach(controller => {
            // Do not highlight when already selected
            if ( !controller || !controller.userData || controller.userData.selected !== undefined ) return;
        
            const line = controller.getObjectByName( 'line' );
            const intersections = getIntersections( controller );
        
            if ( intersections.length > 0 ) {
                const intersection = intersections[ 0 ];
        
                const object = intersection.object;
                object.material.emissive.r = 1;
                this.intersected.push( object );
        
                line.scale.z = intersection.distance;
            } else {
                line.scale.z = 5;
            }
        });
    }

    cleanIntersected() {
        while ( this.intersected.length ) {
            const object = this.intersected.pop();
            object.material.emissive.r = 0;
        }
    }

    set onSelectStart (func) {
        this.list.forEach(controller => {
            controller.onSelectStart = func;
        })
    }

    set onSelectEnd (func) {
        this.list.forEach(controller => {
            controller.onSelectEnd = func;
        })
    }

    set onSqueezeStart (func) {
        this.list.forEach(controller => {
            controller.onSqueezeStart = func;
        })
    }

    set onSqueezeEnd (func) {
        this.list.forEach(controller => {
            controller.onSqueezeEnd = func;
        })
    }

    addTo(scene) {
        this.list.forEach(controller => {
            scene.add( controller.body );
            scene.add( controller.bodyGrip );
        })
    }
}

class Controller {
    controllers;
    index;

    body;
    bodyGrip;

    onSelectStartFunc = () => {};
    onSelectEndFunc = () => {};
    onSqueezeStartFunc = () => {};
    onSqueezeEndFunc = () => {};
    
    constructor(controllers, index ) {
        this.controllers = controllers;
        this.index = index;

        this.init();
    }

    init() {
        const { renderer } = this.controllers.game;
        const { modelFactory } = this.controllers;

        this.body = renderer.xr.getController( this.index );

        this.bodyGrip = renderer.xr.getControllerGrip( this.index );
        this.bodyGrip.add( 
            modelFactory.createControllerModel( 
                this.bodyGrip 
            )
        );
    }

    set onSelectStart (func) {
        this.body.removeEventListener("selectstart", this.onSelectStartFunc);

        this.onSelectStartFunc = func;
        this.body.addEventListener( 'selectstart', this.onSelectStartFunc );
    }

    set onSelectEnd (func) {
        this.body.removeEventListener("selectend", this.onSelectEndFunc);

        this.onSelectEndFunc = func;
        this.body.addEventListener( 'selectend', this.onSelectEndFunc );
    }

    set onSqueezeStart (func) {
        this.body.removeEventListener("squeezestart", this.onSqueezeStartFunc);

        this.onSqueezeStartFunc = func;
        this.body.addEventListener( 'squeezestart', this.onSqueezeStartFunc );
    }

    set onSqueezeEnd (func) {
        this.body.removeEventListener("squeezeend", this.onSqueezeEndFunc);

        this.onSqueezeEndFunc = func;
        this.body.addEventListener( 'squeezeend', this.onSqueezeEndFunc );
    }
}