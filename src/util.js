const Util = {
  direction: function direction(vec) {
    if (Math.abs(vec[0]) > 1) vec[0] /= vec[0];
    if (Math.abs(vec[1]) > 1) vec[1] /= vec[1];
    return vec;
  },
  distance: function distance(p1, p2) {;
    return Math.sqrt(((p1[0] - p2[0]) ** 2) + ((p1[1] - p2[1]) ** 2));
  },
  inherits: function inherits(ChildClass, ParentClass) {
    ChildClass.prototype = Object.create(ParentClass.prototype);
    ChildClass.prototype.constructor = ChildClass;
  },
  randomVec: function randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  scale: function(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
}

module.exports = Util;