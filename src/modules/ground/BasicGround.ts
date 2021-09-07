import * as THREE from 'three'

class BasicGround {
  private _plane: THREE.Mesh

  constructor() {
    const planeGeo = new THREE.PlaneGeometry(60, 60);
    const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff})

    this._plane = new THREE.Mesh(planeGeo, planeMaterial);
    this._plane.rotation.x = -0.5 * Math.PI;
    this._plane.position.set(0, 0, 0);
  }

  public getPlane(): THREE.Mesh {
    return this._plane;
  }
}

export default BasicGround