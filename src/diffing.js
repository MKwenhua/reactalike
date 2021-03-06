import CheckHTMLattribute from 'utils/html_attributes'
import { EX_tags } from 'shared/namespace'

const setDiff = (self, createElem) => {

   function removeProp(element, attr) {
      if (CheckHTMLattribute(attr) || EX_tags[attr]) {
         element.removeAttribute(attr);
      }
   };

   function changeProp(element, attr, val) {
      if (CheckHTMLattribute(attr) || EX_tags[attr]) {
         element.setAttribute(attr, val);
      }
   };

   function updateProp(element, name, newVal, oldVal) {
      if (!newVal) {
         removeProp(element, name);
         return
      } else if (!oldVal || newVal !== oldVal) {
         changeProp(element, name, newVal);
      }
   };

   function updateProps(element, newProps, oldProps = {}) {
      const props = Object.assign({}, oldProps, newProps);
      for (let name in props) {
         updateProp(element, name, newProps[name], oldProps[name]);
      };
   };

   function changed(node1, node2) {
      return typeof node1 !== typeof node2 || typeof node1 === 'string' && node1 !== node2 || node1.type !== node2.type
   };

   function checkForEvents(node) {
      if (node.props.ex_attachedFuncs) {
         for (var eventName in node.props.ex_attachedFuncs) {
            node.domElement.removeEventListener(eventName, node.props.ex_attachedFuncs[eventName]);
         }
      }
   };

   function updateElement(parent, newNode, oldNode, index = 0) {
      if ((typeof newNode === 'string' || typeof newNode === 'number') || (typeof oldNode === 'string' || typeof oldNode === 'number')) {
         let vdomid = parent.props.trace + '.' + index;
         if (changed(newNode, oldNode)) {
            parent.domElement.replaceChild(createElem(newNode, vdomid, parent.trace), parent.domElement.childNodes[index]);
         }

         return
      };

      if (!oldNode) {
         let vdomid = parent.props.trace + '.' + index;
         newNode.domElement = createElem(newNode, vdomid, parent.props.trace);
         parent.domElement.appendChild(newNode.domElement);
         return
      };
      if (!newNode) {
         checkForEvents(oldNode);
         parent.domElement.removeChild(oldNode.domElement);
         return
      };
      if (changed(newNode, oldNode)) {

         let vdomid = parent.props.trace + '.' + index;
         newNode.domElement = createElem(newNode, vdomid, newNode.props.parent);
         let repl = typeof oldNode === 'string' ? parent.domElement.children[index] : oldNode.domElement;
         parent.domElement.replaceChild(newNode.domElement, repl);

         return
      };
      if (newNode.type) {

         newNode.domElement = oldNode.domElement ? oldNode.domElement : createElem(newNode, newNode.trace, newNode.parent);

         updateProps(newNode.domElement, newNode.props, oldNode.props);
         if (oldNode.props.ex_attachedFuncs) {
            self.replaceListenerFunctions(oldNode.props.ex_attachedFuncs, newNode)
         }

         const newLength = newNode.nested ? newNode.nested.length : 0;

         if (typeof oldNode === 'string' || typeof oldNode === 'number') {
            for (let i = 0; i < newLength; i++) {
               updateElement(newNode, newNode.nested[i], null, i);
            }
            return updateElement;
         };
         oldNode.nested = oldNode.nested ? oldNode.nested : [];
         const oldLength = oldNode.nested.length;

         for (let i = 0; i < newLength || i < oldLength; i++) {
            updateElement(oldNode, newNode.nested[i], oldNode.nested[i], i);
         }
      }
   };
   return updateElement;
};

export default setDiff
