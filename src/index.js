var repeat = function repeat(string, times, callback) {
  var result = '';
  var err = null;

  if (times === null) {
    err = new Error('times must be not null');
    return callback(err);
  }

  if (isNaN(times)) {
    err = new Error('times must be a number');
    return callback(err);
  }

  if (times < 0) {
    err = new Error('times must be greater than or equals 0');
    return callback(err);
  }

  if (times === Infinity) {
    err = new Error('times must not be infinity');
    return callback(err);
  }

  if (string === null) {
    err = new Error('string must be not null');
    return callback(err);
  }

  if (typeof string !== 'string') {
    err = new Error('string must be a string');
    return callback(err);
  }

  result = new Array(times + 1).join(string);
  return callback(null, result);
};

module.exports = {
  repeat
};
