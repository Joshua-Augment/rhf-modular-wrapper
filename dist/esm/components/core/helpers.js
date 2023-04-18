export const compareArrays = (a, b) => {
    console.log("[compareArrays] - a", a);
    console.log("[compareArrays] - b", b);
    const res = a.length === b.length && a.every((element, index) => Array.isArray(element) ? compareArrays(element, b[index]) : element === b[index]);
    console.log("[compareArrays] - result", res);
    return res;
};
//# sourceMappingURL=helpers.js.map