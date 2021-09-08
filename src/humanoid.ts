import * as THREE from 'three';

class Humanoid {

    public humanoid: THREE.Group;
    
    private _Hands: THREE.Group;
    private _Feet: THREE.Group;

    private _head: THREE.Mesh;
    private _body: THREE.Mesh;
    private _handLeft: THREE.Mesh;
    private _handRight: THREE.Mesh;
    private _footLeft: THREE.Mesh;
    private _footRight: THREE.Mesh;


    constructor() {
        const headGeo = new THREE.BoxGeometry(4,4,4);
        const handGeo = new THREE.BoxGeometry(2,6,2);
        const bodyGeo = new THREE.BoxGeometry(4,6,2);
        const footGeo = new THREE.BoxGeometry(2,6,2);

        const BodyMat = new THREE.MeshPhongMaterial({ color: 0x3f652d});
        const LimbsMat = new THREE.MeshPhongMaterial({ color: 0x3a3189});

        this._head = new THREE.Mesh(headGeo, BodyMat);
        this._head.position.set(0,14,0);

        this._body = new THREE.Mesh(bodyGeo, BodyMat);
        this._body.position.set(0,9,0)
        
        this._handLeft = new THREE.Mesh(handGeo, LimbsMat);
        this._handLeft.position.set(3,9,0);

        this._handRight = new THREE.Mesh(handGeo, LimbsMat);
        this._handRight.position.set(-3,9,0);

        this._footLeft = new THREE.Mesh(footGeo, LimbsMat);
        this._footLeft.position.set(1,3,0);

        this._footRight = new THREE.Mesh(footGeo, LimbsMat);
        this._footRight.position.set(-1,3,0);

        this._Hands = new THREE.Group();
        this._Hands.add(this._handLeft);
        this._Hands.add(this._handRight);

        this._Feet = new THREE.Group();
        this._Feet.add(this._footLeft);
        this._Feet.add(this._footRight);

        this.humanoid = new THREE.Group();
        this.humanoid.add(this._head);
        this.humanoid.add(this._body);
        this.humanoid.add(this._Hands);
        this.humanoid.add(this._Feet);

    }
}

export default Humanoid;