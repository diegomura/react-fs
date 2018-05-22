import fs from 'fs';

class Copy {
  constructor(props){
    this.props = props;
  }

  exec() {
    const { from, to } = this.props;

    fs.createReadStream(from).pipe(fs.createWriteStream(to));
  }
}

export default Copy;
