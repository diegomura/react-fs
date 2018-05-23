import File from './File';
import Move from './Move';
import Copy from './Copy';
import Delete from './Delete';
import FileSystem from './FileSystem';

function createElement(type, props) {
  let instance;

  const COMPONENTS = {
    FILE_SYSTEM: () => new FileSystem(),
    FILE: () => new File(props),
    MOVE: () => new Move(props),
    COPY: () => new Copy(props),
    DELETE: () => new Delete(props),
    default: undefined,
  };

  return COMPONENTS[type]() || COMPONENTS.default;
}

export { createElement };
