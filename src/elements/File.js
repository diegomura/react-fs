import fs from 'fs';

class File {
  constructor(props){
    this.props = props;
    this.children = null;
  }

  appendChild(child){
    this.children = child;
  }

  exec() {
    const { name, extension = 'txt' } = this.props;

    fs.writeFileSync(`${name}.${extension}`, this.children);
  }
}

export default File;
