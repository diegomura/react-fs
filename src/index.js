import ReactFiberReconciler from 'react-reconciler';
import emptyObject from 'fbjs/lib/emptyObject';

const File = 'FILE';
const Copy = 'COPY';
const Move = 'MOVE';
const Delete = 'DELETE';

const renderer = ReactFiberReconciler({
  appendInitialChild(parentInstance, child) {
    console.log('appendInitialChild');
  },

  createInstance(type, props, internalInstanceHandle) {
    console.log('createInstance');
    return { type, props };
  },

  createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
    console.log('createTextInstance');
    return text;
  },

  finalizeInitialChildren(domElement, type, props) {
    console.log('finalizeInitialChildren');
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
      if (parentInstance.appendChild) {
        parentInstance.appendChild(child);
      } else {
        parentInstance.document = child;
      }
    },

    appendChildToContainer(parentInstance, child) {
      if (parentInstance.appendChild) {
        parentInstance.appendChild(child);
      } else {
        parentInstance.document = child;
      }
    },

    insertBefore(parentInstance, child, beforeChild) {
      // noob
    },

    insertInContainerBefore(parentInstance, child, beforeChild) {
      // noob
    },

    removeChild(parentInstance, child) {
      parentInstance.removeChild(child);
    },

    removeChildFromContainer(parentInstance, child) {
      if (parentInstance.removeChild) {
        parentInstance.removeChild(child);
      }
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

const render = async (element, filePath, callback) => {
  try {
    const container = renderer.createContainer();
    renderer.updateContainer(element, container, null);
    console.log(`📝  Finished!`);
  } catch (e) {
    throw e;
  }
}

export {
  File,
  Copy,
  Move,
  Delete,
  render
};
