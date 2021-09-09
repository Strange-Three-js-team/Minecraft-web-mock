import * as THREE from 'three';
import Humanoid from './humanoid';

import ZombieFace from '../../assets/character/zombie/zombie_head_face.png';
import ZombieHeadSkin from '../../assets/character/zombie/zombie_head_skin.png';

import ZombieHandSkin from '../../assets/character/zombie/zombie_hand_side.png';
import ZombieHandTopLid from '../../assets/character/zombie/zombie_hand_toplid.png';
import ZombieHandBotLid from '../../assets/character/zombie/zombie_hand_botlid.png';

import ZombieBodyFront from '../../assets/character/zombie/zombie_body_front.png';
import ZombieBodyBack from '../../assets/character/zombie/zombie_body_back.png';
import ZombieBodySide from '../../assets/character/zombie/zombie_body_side.png';
import ZombieBodyLid from '../../assets/character/zombie/zombie_body_lid.png';

import ZombieFootSide from '../../assets/character/zombie/zombie_foot_side.png';
import ZombieFootTopLid from '../../assets/character/zombie/zombie_foot_toplid.png';
import ZombieFootBotLid from '../../assets/character/zombie/zombie_foot_botlid.png';

type Skin = {
  head: Array<THREE.MeshStandardMaterial>,
  body: Array<THREE.MeshStandardMaterial>,
  hand: Array<THREE.MeshStandardMaterial>,
  foot: Array<THREE.MeshStandardMaterial>
}

class Zombie extends Humanoid {
  constructor() {
    super(false);
    const skin = this.getSkin();
    super.init(skin);
  }

  private getSkin(): Skin {
    // image map
    // head
    const faceMap = new THREE.TextureLoader().load(ZombieFace)
    const headSkinMap = new THREE.TextureLoader().load(ZombieHeadSkin);

    // body
    const bodyFrontMap = new THREE.TextureLoader().load(ZombieBodyFront);
    const bodySideMap = new THREE.TextureLoader().load(ZombieBodySide);
    const bodyBackMap = new THREE.TextureLoader().load(ZombieBodyBack);
    const bodyLidMap = new THREE.TextureLoader().load(ZombieBodyLid);

    // hand
    const handSideMap = new THREE.TextureLoader().load(ZombieHandSkin);
    const handBotLidMap = new THREE.TextureLoader().load(ZombieHandBotLid);
    const handTopLidMap = new THREE.TextureLoader().load(ZombieHandTopLid);

    // foot
    const footSideMap = new THREE.TextureLoader().load(ZombieFootSide);
    const footBotLidMap = new THREE.TextureLoader().load(ZombieFootBotLid);
    const footTopLidMap = new THREE.TextureLoader().load(ZombieFootTopLid);

    // mat
    // head
    const headMat = [
      new THREE.MeshStandardMaterial({ map: headSkinMap }),
      new THREE.MeshStandardMaterial({ map: headSkinMap }),
      new THREE.MeshStandardMaterial({ map: headSkinMap }),
      new THREE.MeshStandardMaterial({ map: headSkinMap }),
      new THREE.MeshStandardMaterial({ map: faceMap }),
      new THREE.MeshStandardMaterial({ map: headSkinMap }),
    ]

    // body
    const bodyMat = [
      new THREE.MeshStandardMaterial({ map: bodySideMap }),
      new THREE.MeshStandardMaterial({ map: bodySideMap }),
      new THREE.MeshStandardMaterial({ map: bodyLidMap }),
      new THREE.MeshStandardMaterial({ map: bodyLidMap }),
      new THREE.MeshStandardMaterial({ map: bodyFrontMap }),
      new THREE.MeshStandardMaterial({ map: bodyBackMap }),
    ]

    // hand
    const handMat = [
      new THREE.MeshStandardMaterial({ map: handSideMap }),
      new THREE.MeshStandardMaterial({ map: handSideMap }),
      new THREE.MeshStandardMaterial({ map: handTopLidMap }),
      new THREE.MeshStandardMaterial({ map: handBotLidMap }),
      new THREE.MeshStandardMaterial({ map: handSideMap }),
      new THREE.MeshStandardMaterial({ map: handSideMap }),
    ]

    const footMat = [
      new THREE.MeshStandardMaterial({ map: footSideMap }),
      new THREE.MeshStandardMaterial({ map: footSideMap }),
      new THREE.MeshStandardMaterial({ map: footTopLidMap }),
      new THREE.MeshStandardMaterial({ map: footBotLidMap }),
      new THREE.MeshStandardMaterial({ map: footSideMap }),
      new THREE.MeshStandardMaterial({ map: footSideMap }),
    ]

    return {
      head: headMat,
      body: bodyMat,
      hand: handMat,
      foot: footMat
    }
  }
}

export default Zombie;