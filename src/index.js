exports.min = function min(array) {
    return arguments.length && arguments[0].length ? Math.min(...array) : 0;
};

exports.max = function max(array) {
    return arguments.length && arguments[0].length ? Math.max(...array) : 0;
};

exports.avg = function avg(array) {
    return arguments.length && arguments[0].length
        ? array.reduce((acc, el) => acc + el) / arguments[0].length
        : 0;
};
