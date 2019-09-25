import DomNodeCollection from "./dom_node_collection";

let queue = [
  function () { console.log("HERE") },
  function () { console.log("WE") },
  function() { console.log("ARE!") }
]

window.$l = function (arg) {
  let nodeList;
  let domNodeCollection;

  if (arg instanceof Function) {
    queue.push(arg);
  }
  if (arg instanceof HTMLElement) {
    nodeList = [arg];
    domNodeCollection = new DomNodeCollection(nodeList);
  } else if (typeof arg === "string") {
    const elements = document.querySelectorAll(arg);
    nodeList = Array.from(elements);
    domNodeCollection = new DomNodeCollection(nodeList);
  }

  return domNodeCollection;
}

window.$l.extend = function (...objects) {
    
}

window.addEventListener('DOMContentLoaded', event => {
    queue.forEach(fn => fn());
    queue = [];
});