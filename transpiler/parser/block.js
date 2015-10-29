var advance = require('./advance');

var block = function(state) {
  var t = state.token;
  state = advance(state, "{");
  if(state.token.value === "\\n") {
    state = advance(state);
  }
  var stdReturnVal = t.std();
  var blockStmtChildNode;

  /* Logic as to whether statement node needs a parent node wrapper */
  if(stdReturnVal.type === "IfStatement") {
    blockStmtChildNode = stdReturnVal;
  } else if(stdReturnVal.type === "ForStatement") {
    blockStmtChildNode = stdReturnVal;
  } else if(stdReturnVal.type !== "ExpressionStatement") {
    blockStmtChildNode = {
      type: 'ExpressionStatement',
      expression: stdReturnVal
    };
  }
  else {
    blockStmtChildNode = stdReturnVal;
  }

  return {
    type: 'BlockStatement',
    body: [ blockStmtChildNode ]
  };
};

module.exports = block;