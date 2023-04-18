"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareArrays = void 0;
const compareArrays = (a, b) => {
    console.log("[compareArrays] - a", a);
    console.log("[compareArrays] - b", b);
    const res = a.length === b.length && a.every((element, index) => Array.isArray(element) ? (0, exports.compareArrays)(element, b[index]) : element === b[index]);
    console.log("[compareArrays] - result", res);
    return res;
};
exports.compareArrays = compareArrays;
//# sourceMappingURL=helpers.js.map