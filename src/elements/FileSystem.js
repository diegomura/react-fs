class FileSystem {
  constructor(){
    this.children = [];
  }

  appendChild(child) {
    this.children.push(child);
  }

  exec() {
    for (let i = 0; i < this.children.length; i++) {
      setTimeout(() => {
        this.children[i].exec();
      }, i * 2000);
    }
  }
}

export default FileSystem;
