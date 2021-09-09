import Zombie from './Zombie';

class SmallZombie extends Zombie {
  constructor() {
    super();
    super.getCharacter().scale.set(0.33, 0.33, 0.33);
  }
}

export default SmallZombie;