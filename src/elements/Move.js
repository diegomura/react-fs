import fs from 'fs';

class Move {
  constructor(props){
    this.props = props;
  }

  exec() {
    const { from, to } = this.props;

    fs.renameSync(from, to);
  }
}

export default Move;
