import * as THREE from 'three';

type Skin = {
    head: Array<THREE.MeshStandardMaterial>,
    body: Array<THREE.MeshStandardMaterial>,
    hand: Array<THREE.MeshStandardMaterial>,
    foot: Array<THREE.MeshStandardMaterial>
}

class Humanoid {
    private _headGeo: THREE.BoxGeometry;
    private _handGeo: THREE.BoxGeometry;
    private _bodyGeo: THREE.BoxGeometry;
    private _footGeo: THREE.BoxGeometry;

    private _skin: Skin | null;

    private _humanoid: THREE.Group;
    
    private _Hands: THREE.Group;
    private _Feet: THREE.Group;

    private _head: THREE.Mesh;
    private _body: THREE.Mesh;
    private _handLeft: THREE.Mesh;
    private _handRight: THREE.Mesh;
    private _footLeft: THREE.Mesh;
    private _footRight: THREE.Mesh;


    constructor(init = true) {
        this._headGeo = new THREE.BoxGeometry(4,4,4);
        this._handGeo = new THREE.BoxGeometry(2,6,2);
        this._bodyGeo = new THREE.BoxGeometry(4,6,2);
        this._footGeo = new THREE.BoxGeometry(2,6,2);

        if (init) this.init();
    }

    public init(skin: Skin = null) {
        this._skin = skin;

        const defaultMat = new THREE.MeshPhongMaterial({ color: 0x3f652d});

        const headMat = this._skin?.head || defaultMat;
        const bodyMat = this._skin?.body || defaultMat;
        const handMat = this._skin?.hand || defaultMat;
        const footMat = this._skin?.foot || defaultMat;

        this._head = new THREE.Mesh(this._headGeo, headMat);
        this._head.position.set(0,14,0);

        this._body = new THREE.Mesh(this._bodyGeo, bodyMat);
        this._body.position.set(0,9,0)
        
        this._handLeft = new THREE.Mesh(this._handGeo, handMat);
        this._handLeft.position.set(3,9,0);

        this._handRight = new THREE.Mesh(this._handGeo, handMat);
        this._handRight.position.set(-3,9,0);

        this._footLeft = new THREE.Mesh(this._footGeo, footMat);
        this._footLeft.position.set(1,3,0);

        this._footRight = new THREE.Mesh(this._footGeo, footMat);
        this._footRight.position.set(-1,3,0);

        this._Hands = new THREE.Group();
        this._Hands.add(this._handLeft);
        this._Hands.add(this._handRight);

        this._Feet = new THREE.Group();
        this._Feet.add(this._footLeft);
        this._Feet.add(this._footRight);

        this._humanoid = new THREE.Group();
        this._humanoid.add(this._head);
        this._humanoid.add(this._body);
        this._humanoid.add(this._Hands);
        this._humanoid.add(this._Feet);

        this._humanoid.position.set(0, 0, -20)
    }

    public getCharacter(): THREE.Group {
        return this._humanoid;
    }
}

export default Humanoid;