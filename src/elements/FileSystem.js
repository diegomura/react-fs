class FileSystem {
  constructor(){
    this.children = [];
  }

  appendChild(child) {
    this.children.push(child);
  }

  async exec() {
    for (let i = 0; i < this.children.length; i++) {
      await this.children[i].exec();
    }
  }
}

export default FileSystem;
