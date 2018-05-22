import fs from 'fs';

class Delete {
  constructor(props){
    this.props = props;
  }

  exec() {
    fs.unlinkSync(this.props.file);
  }
}

export default Delete;
