// @flow strict
const Util = {
  direction: function direction(vec: [number, number]): [number, number] {
    if (Math.abs(vec[0]) > 1) vec[0] /= vec[0];
    if (Math.abs(vec[1]) > 1) vec[1] /= vec[1];
    return vec;
  },
  distance: function distance(p1: [number, number], p2: [number, number]): number {;
    return Math.sqrt(((p1[0] - p2[0]) ** 2) + ((p1[1] - p2[1]) ** 2));
  },
  randomVec: function randomVec(length: number): [number, number] {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  scale: function(vec: [number, number], m: number): [number, number] {
    return [vec[0] * m, vec[1] * m];
  }
}

export default Util;