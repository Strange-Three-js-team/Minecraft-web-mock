import * as THREE from 'three';
import EnderManFace from '../../assets/character/enderMan/enderman_face.png';
import EnderManSkin from '../../assets/character/enderMan/enderman_skin.png';

class EnderMan {
  private _enderMan: THREE.Group

  private _head: THREE.Mesh
  private _body: THREE.Mesh
  private _foot1: THREE.Mesh
  private _foot2: THREE.Mesh
  private _hand1: THREE.Mesh
  private _hand2: THREE.Mesh

  constructor () {
    const headGeo = new THREE.BoxGeometry(4,4,4)
    const bodyGeo = new THREE.BoxGeometry(4,6,2)
    const handGeo = new THREE.BoxGeometry(1,12,1)
    const footGeo = new THREE.BoxGeometry(1,16,1)

    // image map
    const headMap = new THREE.TextureLoader().load(EnderManFace);
    const skinMap = new THREE.TextureLoader().load(EnderManSkin);

    // head mat
    const headMat = []
    for (let i = 0; i < 6; ++i) {
      let map = i === 4 ? headMap : skinMap;
      headMat.push(new THREE.MeshStandardMaterial({map : map}))
    }

    // skin mat
    const skinMat = new THREE.MeshStandardMaterial({
      roughness: 0.3,
      metalness: 0.8,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
      map: skinMap
    })


    // head
    this._head = new THREE.Mesh(headGeo, headMat)
    this._head.position.set(0, 22, 0);

    // body
    this._body = new THREE.Mesh(bodyGeo, skinMat);
    this._body.position.set(0, 18, 0);

    // hand(*2)
    this._hand1 = new THREE.Mesh(handGeo, skinMat)
    this._hand1.position.set(-2.5, 14, 0)
    this._hand2 = new THREE.Mesh(handGeo, skinMat)
    this._hand2.position.set(2.5, 14, 0)

    // foot(*2)
    this._foot1 = new THREE.Mesh(footGeo, skinMat)
    this._foot1.position.set(-1, 8, 0)
    this._foot2 = new THREE.Mesh(footGeo, skinMat)
    this._foot2.position.set(1, 8, 0)

    // whole group
    this._enderMan = new THREE.Group();
    this._enderMan.add(this._head, this._body, this._hand1, this._hand2, this._foot1, this._foot2)
    this._enderMan.position.set(-20, 0, 0);
  }

  public getCharacter(): THREE.Group {
    return this._enderMan;
  }
}

export default EnderMan