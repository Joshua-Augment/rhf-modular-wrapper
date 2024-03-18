export var compareArrays = function (a, b) {
    // console.log("[compareArrays] - ",a,b)
    if (a === undefined || b === undefined || a === null || b === null) {
        return true;
    }
    if (!Array.isArray(a) || !Array.isArray(b)) {
        return a === b;
    }
    // console.log("[compareArrays] - a",a)
    // console.log("[compareArrays] - b",b)
    var res = ((a === null || a === void 0 ? void 0 : a.length) === (b === null || b === void 0 ? void 0 : b.length)) && a.every(function (element, index) { return Array.isArray(element) ? compareArrays(element, b[index]) : element === b[index]; });
    // console.log("[compareArrays] - result",res)
    return res;
};
//# sourceMappingURL=helpers.js.map