const Util = {
  inherits: function inherits(childClass, ParentClass) {
    childClass.prototype = Object.create(ParentClass.prototype);
    childClass.prototype.constructor = childClass;
  }
}