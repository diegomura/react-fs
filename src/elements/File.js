class File {
  constructor(props){
    this.props = props;
    this.children = null;
  }

  appendChild(child){
    this.children = child;
  }

  exec() {

  }
}

export default File;
