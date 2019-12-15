exports.codeGenerator = function (str, len = 5) {
  `${str}-${Math.random().toString(36).substr(2, len)}`
};
