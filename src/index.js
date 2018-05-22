import ReactFiberReconciler from 'react-reconciler';
import emptyObject from 'fbjs/lib/emptyObject';
import { createElement } from './elements';

const File = 'FILE';
const Copy = 'COPY';
const Move = 'MOVE';
const Delete = 'DELETE';
const FileSystem = 'FILE_SYSTEM';

const renderer = ReactFiberReconciler({
  appendInitialChild(parentInstance, child) {
    parentInstance.appendChild(child);
  },

  createInstance(type, props, internalInstanceHandle) {
    return createElement(type, props);;
  },

  createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
    return text;
  },

  finalizeInitialChildren(domElement, type, props) {
    return false;
  },

  getPublicInstance(instance) {
    return instance;
  },

  prepareForCommit() {
    // noop
  },

  prepareUpdate(domElement, type, oldProps, newProps) {
    return true;
  },

  resetAfterCommit() {
    // noop
  },

  resetTextContent(domElement) {
    // noop
  },

  getRootHostContext() {
    return emptyObject;
  },

  getChildHostContext() {
    return emptyObject;
  },

  shouldSetTextContent(type, props) {
    return false;
  },

  now: () => {},

  useSyncScheduling: true,

  mutation: {
    appendChild(parentInstance, child) {
      parentInstance.appendChild(child);
    },

    appendChildToContainer(parentInstance, child) {
      parentInstance.appendChild(child);
    },

    insertBefore(parentInstance, child, beforeChild) {
      // noob
    },

    insertInContainerBefore(parentInstance, child, beforeChild) {
      // noob
    },

    removeChild(parentInstance, child) {
      // noob
    },

    removeChildFromContainer(parentInstance, child) {
      // noob
    },

    commitTextUpdate(textInstance, oldText, newText) {
      textInstance = newText;
    },

    commitMount(instance, type, newProps) {
      // Noop
    },

    commitUpdate(instance, updatePayload, type, oldProps, newProps) {
      // noop
    },
  },
});

const render = async (element, callback) => {
  const fs = createElement('FILE_SYSTEM');
  const container = renderer.createContainer(fs);
  renderer.updateContainer(element, container, null);
  fs.exec();
  console.log(`📝  Finished!`);
}

export {
  File,
  Copy,
  Move,
  Delete,
  FileSystem,
  render
};
