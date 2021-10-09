export default function Recond(_a) {
    var methods = _a.methods, conditions = _a.conditions, defaultValue = _a.defaultValue;
    if (typeof methods !== "object" || typeof conditions !== "object") {
        return "";
    }
    var k = null;
    for (var _i = 0, _b = Object.entries(conditions); _i < _b.length; _i++) {
        var _c = _b[_i], key = _c[0], cond = _c[1];
        if (cond) {
            k = typeof methods[key] === "function" ? key : "";
            break;
        }
    }
    if (!k && defaultValue)
        return typeof defaultValue === "function" ? defaultValue.call() : defaultValue;
    if (!k)
        return "";
    return methods[k]();
}
