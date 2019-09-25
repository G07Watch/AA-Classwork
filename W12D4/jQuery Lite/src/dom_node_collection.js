export default class DomNodeCollection {
  constructor(collection) {
    this.collection = collection;
    //return this.collection; somehow return it
    this.eventCallbacks = [];
  }

  html(str) {
    if (str) {
      this.collection.forEach(node => {
        node.innerHTML = str;
      });
    } else {
      return this.collection[0].innerHTML;
    }
  }

  empty() {
    this.collection.forEach(node => {
      node.innerHTML = "";
    });
  }

  append(arg) {
    if (arg instanceof DomNodeCollection) {
      this.collection.forEach(node => {
        arg.collection.forEach(argNode => {
          node.innerHTML += argNode.outerHTML;
        });
      });
    } else if (arg instanceof HTMLElement) {
      this.collection.forEach(node => {
        node.innerHTML += arg.outerHTML;
      });
    } else if (typeof arg === "string") {
      this.collection.forEach(node => {
        node.innerHTML += arg;
      });
    }
  }

  attr(attributeName, value) {

    if (value || typeof (value) === 'string') {
      this.collection.forEach(node => {
        node.setAttribute(attributeName, value)
      })
    } else {
      return this.collection[0].getAttribute(attributeName);
    }
  }

  addClass(className) {

    let currentClasses = this.attr("class");
    currentClasses = currentClasses ? currentClasses + " " : "";
    this.attr("class", currentClasses + className);

  }

  removeClass(className) {
    let currentClasses = this.attr("class");
    if (currentClasses.split(" ").includes(className)) {
      let keptClasses = currentClasses.replace(className, "");
      if (keptClasses === "") {
        this.collection.forEach(node => { node.removeAttribute("class") })

      } else {
        if (keptClasses[0] === " ") { keptClasses = keptClasses.slice(1) }
        if (keptClasses[keptClasses.length - 1] === " ") {
          keptClasses = keptClasses.slice(0, keptClasses.length - 1)
        }
        this.attr("class", keptClasses);
      }
    }
  }

  children(selector) {
    let childs = [];
    if (selector) {
      this.collection.forEach(node => {
        let nodeChilds = Array.from(node.querySelectorAll(selector))
        childs = childs.concat(nodeChilds);
      });
    } else {
      this.collection.forEach(node => {
        childs = childs.concat(Array.from(node.children));
      });
    }

    return new DomNodeCollection(childs);
  }

  parent(selector) {

    let parents = [];
    this.collection.forEach(  node => {
      parents.push(node.parentElement);
    });

    if (selector) {
      parents = parents.filter(parent => parent.matches(selector))
    }

    return new DomNodeCollection(parents);
  }
  
  find(selector) {
    return this.children(selector);
  }

  remove(selector) {
    if (selector) {
        let removed = this.collection.filter(node => node.matches(selector));
        this.collection = this.collection.filter(node => !removed.includes(node));
        removed.forEach(node => { 
            node.innerHTML = "";
            node.outerHTML = ""; 
        });
    } else {
        this.collection.forEach(node => {
            node.innerHTML = "";
            node.outerHTML = "";
        });
        this.collection = [];
    }
  }

  on(event, callback) {
    this.eventCallbacks.push(callback);
    this.collection.forEach(node => {
        node.addEventListener(event, callback);
    });
  }

  off(event, callback) {
    if (this.eventCallbacks.includes(callback)) {
        this.collection.forEach(node => {
            node.removeEventListener(event, callback);
        });
    }
  }
}