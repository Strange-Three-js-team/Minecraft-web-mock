import * as THREE from 'three'

class AxeHelper {
  private _axes: THREE.AxesHelper

  constructor() {
    this._axes = new THREE.AxesHelper(20)
  }

  public getAxes(): THREE.AxesHelper {
    return this._axes;
  }
}

export default AxeHelper