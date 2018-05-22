import File from './File';
import Move from './Move';
import Copy from './Copy';
import Delete from './Delete';
import FileSystem from './FileSystem';

function createElement(type, props) {
  let instance;

  switch (type) {
    case 'FILE_SYSTEM':
      instance = new FileSystem();
      break;
    case 'FILE':
      instance = new File(props);
      break;
    case 'MOVE':
      instance = new Move(props);
      break;
    case 'COPY':
      instance = new Copy(props);
      break;
    case 'DELETE':
      instance = new Delete(props);
      break;
    default:
      instance = undefined;
  }

  return instance;
}

export { createElement };
