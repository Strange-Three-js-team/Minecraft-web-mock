import * as THREE from 'three';
import CreeperFace from '../../assets/character/creeper/creeper_face.png';
import CreeperSkin from '../../assets/character/creeper/creeper_skin.png';


class Creeper {
  private _creeper: THREE.Group
  private _feet: THREE.Group

  private _head: THREE.Mesh
  private _body: THREE.Mesh
  private _foot1: THREE.Mesh
  private _foot2: THREE.Mesh
  private _foot3: THREE.Mesh
  private _foot4: THREE.Mesh

  constructor() {
    // image map
    const headMap = new THREE.TextureLoader().load(CreeperFace);
    const skinMap = new THREE.TextureLoader().load(CreeperSkin);

    // head mat
    const headMat = []
    for (let i = 0; i < 6; ++i) {
      let map = i === 4 ? headMap : skinMap
      headMat.push(new THREE.MeshStandardMaterial({map: map}))
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

    // head, body, foot size setting
    const headGeo = new THREE.BoxGeometry(4,4,4)
    const bodyGeo = new THREE.BoxGeometry(4,8,2)
    const footGeo = new THREE.BoxGeometry(2,3,2)


    // head
    this._head = new THREE.Mesh(headGeo, headMat)
    this._head.position.set(0, 11.5, 0);
    this._head.rotation.y = 0.5;

    // body
    this._body = new THREE.Mesh(bodyGeo, skinMat);
    this._body.position.set(0, 5.5, 0);

    // foot(*4)
    this._foot1 = new THREE.Mesh(footGeo, skinMat);
    this._foot1.position.set(-1, 1.5, 2);
    this._foot2 = this._foot1.clone();
    this._foot2.position.set(-1, 1.5, -2);
    this._foot3 = this._foot1.clone();
    this._foot3.position.set(1, 1.5, 2);
    this._foot4 = this._foot1.clone();
    this._foot4.position.set(1, 1.5, -2);

    // feet group
    this._feet = new THREE.Group();
    this._feet.add(this._foot1, this._foot2, this._foot3, this._foot4)

    // whole group
    this._creeper = new THREE.Group();
    this._creeper.add(this._head, this._body, this._feet)
    this._creeper.position.set(20, 0, 0);
  }

  public getCharacter(): THREE.Group {
    return this._creeper;
  }
}

export default Creeper