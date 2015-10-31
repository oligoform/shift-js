var expect = require('chai').expect;
var escodegen = require('escodegen');
var generator = escodegen.generate;

var removeIndentation = function(str) {
  return str.replace(/\n\s*/gm, "\n").replace(/\s*/, "");
};

describe('Generator: Third Milestone', function() {

    describe('Functions', function() {

      // input = String.raw`func someFunction(var a: Int) -> Int {
      //                         a = a + 1;
      //                         return a;
      //                     }
      //                     someFunction(5);`;
      // AST Explorer input:
      // var someFunction = function(a) {
      //   a = a + 1;
      //   return a;
      // }
      // someFunction(5);
      xit('should handle function declaration and invocation with no spacing and with var in function parameters', function() {
        input = {
          "range": [
            0,
            76
          ],
          "type": "Program",
          "body": [
            {
              "range": [
                0,
                59
              ],
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "range": [
                    4,
                    59
                  ],
                  "type": "VariableDeclarator",
                  "id": {
                    "range": [
                      4,
                      16
                    ],
                    "type": "Identifier",
                    "name": "someFunction"
                  },
                  "init": {
                    "range": [
                      19,
                      59
                    ],
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "range": [
                          28,
                          29
                        ],
                        "type": "Identifier",
                        "name": "a"
                      }
                    ],
                    "defaults": [],
                    "body": {
                      "range": [
                        31,
                        59
                      ],
                      "type": "BlockStatement",
                      "body": [
                        {
                          "range": [
                            35,
                            45
                          ],
                          "type": "ExpressionStatement",
                          "expression": {
                            "range": [
                              35,
                              44
                            ],
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "range": [
                                35,
                                36
                              ],
                              "type": "Identifier",
                              "name": "a"
                            },
                            "right": {
                              "range": [
                                39,
                                44
                              ],
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "range": [
                                  39,
                                  40
                                ],
                                "type": "Identifier",
                                "name": "a"
                              },
                              "right": {
                                "range": [
                                  43,
                                  44
                                ],
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              }
                            }
                          }
                        },
                        {
                          "range": [
                            48,
                            57
                          ],
                          "type": "ReturnStatement",
                          "argument": {
                            "range": [
                              55,
                              56
                            ],
                            "type": "Identifier",
                            "name": "a"
                          }
                        }
                      ]
                    },
                    "generator": false,
                    "expression": false
                  }
                }
              ],
              "kind": "var"
            },
            {
              "range": [
                60,
                76
              ],
              "type": "ExpressionStatement",
              "expression": {
                "range": [
                  60,
                  75
                ],
                "type": "CallExpression",
                "callee": {
                  "range": [
                    60,
                    72
                  ],
                  "type": "Identifier",
                  "name": "someFunction"
                },
                "arguments": [
                  {
                    "range": [
                      73,
                      74
                    ],
                    "type": "Literal",
                    "value": 5,
                    "raw": "5"
                  }
                ]
              }
            }
          ],
          "sourceType": "module"
        };
        output = `var someFunction = function(a) {
                    a = a + 1;
                    return a;
                  }
                  someFunction(5);`;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func someFunction(a: Int)->Int{
      //                           let a = a + 1;
      //                           return a
      //                       }
      //                       someFunction(5);`;
      // AST Explorer input:
      // var someFunction = function(a) {
      //   a = a + 1;
      //   return a;
      // }
      // someFunction(5);
      xit('should handle function declaration and invocation with no spacing', function() {
        input = {
          "range": [
            0,
            76
          ],
          "type": "Program",
          "body": [
            {
              "range": [
                0,
                59
              ],
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "range": [
                    4,
                    59
                  ],
                  "type": "VariableDeclarator",
                  "id": {
                    "range": [
                      4,
                      16
                    ],
                    "type": "Identifier",
                    "name": "someFunction"
                  },
                  "init": {
                    "range": [
                      19,
                      59
                    ],
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "range": [
                          28,
                          29
                        ],
                        "type": "Identifier",
                        "name": "a"
                      }
                    ],
                    "defaults": [],
                    "body": {
                      "range": [
                        31,
                        59
                      ],
                      "type": "BlockStatement",
                      "body": [
                        {
                          "range": [
                            35,
                            45
                          ],
                          "type": "ExpressionStatement",
                          "expression": {
                            "range": [
                              35,
                              44
                            ],
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "range": [
                                35,
                                36
                              ],
                              "type": "Identifier",
                              "name": "a"
                            },
                            "right": {
                              "range": [
                                39,
                                44
                              ],
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "range": [
                                  39,
                                  40
                                ],
                                "type": "Identifier",
                                "name": "a"
                              },
                              "right": {
                                "range": [
                                  43,
                                  44
                                ],
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              }
                            }
                          }
                        },
                        {
                          "range": [
                            48,
                            57
                          ],
                          "type": "ReturnStatement",
                          "argument": {
                            "range": [
                              55,
                              56
                            ],
                            "type": "Identifier",
                            "name": "a"
                          }
                        }
                      ]
                    },
                    "generator": false,
                    "expression": false
                  }
                }
              ],
              "kind": "var"
            },
            {
              "range": [
                60,
                76
              ],
              "type": "ExpressionStatement",
              "expression": {
                "range": [
                  60,
                  75
                ],
                "type": "CallExpression",
                "callee": {
                  "range": [
                    60,
                    72
                  ],
                  "type": "Identifier",
                  "name": "someFunction"
                },
                "arguments": [
                  {
                    "range": [
                      73,
                      74
                    ],
                    "type": "Literal",
                    "value": 5,
                    "raw": "5"
                  }
                ]
              }
            }
          ],
          "sourceType": "module"
        };
        output = `var someFunction = function(a) {
                    a = a + 1;
                    return a;
                  }
                  someFunction(5);`;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func someFunction (a: Int) -> Int {
      //                         let a = a + 1;
      //                         return a
      //                     }
      //                     someFunction(5);`
      // AST Explorer input:
      // var someFunction = function(a) {
      //   a = a + 1;
      //   return a;
      // }
      // someFunction(5);
      xit('should handle function declaration and invocation with spaces between each part of the declaration', function() {
        input = {
          "range": [
            0,
            76
          ],
          "type": "Program",
          "body": [
            {
              "range": [
                0,
                59
              ],
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "range": [
                    4,
                    59
                  ],
                  "type": "VariableDeclarator",
                  "id": {
                    "range": [
                      4,
                      16
                    ],
                    "type": "Identifier",
                    "name": "someFunction"
                  },
                  "init": {
                    "range": [
                      19,
                      59
                    ],
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "range": [
                          28,
                          29
                        ],
                        "type": "Identifier",
                        "name": "a"
                      }
                    ],
                    "defaults": [],
                    "body": {
                      "range": [
                        31,
                        59
                      ],
                      "type": "BlockStatement",
                      "body": [
                        {
                          "range": [
                            35,
                            45
                          ],
                          "type": "ExpressionStatement",
                          "expression": {
                            "range": [
                              35,
                              44
                            ],
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "range": [
                                35,
                                36
                              ],
                              "type": "Identifier",
                              "name": "a"
                            },
                            "right": {
                              "range": [
                                39,
                                44
                              ],
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "range": [
                                  39,
                                  40
                                ],
                                "type": "Identifier",
                                "name": "a"
                              },
                              "right": {
                                "range": [
                                  43,
                                  44
                                ],
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              }
                            }
                          }
                        },
                        {
                          "range": [
                            48,
                            57
                          ],
                          "type": "ReturnStatement",
                          "argument": {
                            "range": [
                              55,
                              56
                            ],
                            "type": "Identifier",
                            "name": "a"
                          }
                        }
                      ]
                    },
                    "generator": false,
                    "expression": false
                  }
                }
              ],
              "kind": "var"
            },
            {
              "range": [
                60,
                76
              ],
              "type": "ExpressionStatement",
              "expression": {
                "range": [
                  60,
                  75
                ],
                "type": "CallExpression",
                "callee": {
                  "range": [
                    60,
                    72
                  ],
                  "type": "Identifier",
                  "name": "someFunction"
                },
                "arguments": [
                  {
                    "range": [
                      73,
                      74
                    ],
                    "type": "Literal",
                    "value": 5,
                    "raw": "5"
                  }
                ]
              }
            }
          ],
          "sourceType": "module"
        };
        output = `var someFunction = function(a) {
                    a = a + 1;
                    return a;
                  }
                  someFunction(5);`;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func someFunction(a: Int) -> Int {
      //                                   let a = a + 1;
      //                                   return a
      //                               }
      //                               someFunction(5);`;
      // AST Explorer input:
      // var someFunction = function(a) {
      //   a = a + 1;
      //   return a;
      // }
      // someFunction(5);
      xit('should handle function declaration and invocation with no space after the function name', function() {
        input = {
          "range": [
            0,
            76
          ],
          "type": "Program",
          "body": [
            {
              "range": [
                0,
                59
              ],
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "range": [
                    4,
                    59
                  ],
                  "type": "VariableDeclarator",
                  "id": {
                    "range": [
                      4,
                      16
                    ],
                    "type": "Identifier",
                    "name": "someFunction"
                  },
                  "init": {
                    "range": [
                      19,
                      59
                    ],
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "range": [
                          28,
                          29
                        ],
                        "type": "Identifier",
                        "name": "a"
                      }
                    ],
                    "defaults": [],
                    "body": {
                      "range": [
                        31,
                        59
                      ],
                      "type": "BlockStatement",
                      "body": [
                        {
                          "range": [
                            35,
                            45
                          ],
                          "type": "ExpressionStatement",
                          "expression": {
                            "range": [
                              35,
                              44
                            ],
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "range": [
                                35,
                                36
                              ],
                              "type": "Identifier",
                              "name": "a"
                            },
                            "right": {
                              "range": [
                                39,
                                44
                              ],
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "range": [
                                  39,
                                  40
                                ],
                                "type": "Identifier",
                                "name": "a"
                              },
                              "right": {
                                "range": [
                                  43,
                                  44
                                ],
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              }
                            }
                          }
                        },
                        {
                          "range": [
                            48,
                            57
                          ],
                          "type": "ReturnStatement",
                          "argument": {
                            "range": [
                              55,
                              56
                            ],
                            "type": "Identifier",
                            "name": "a"
                          }
                        }
                      ]
                    },
                    "generator": false,
                    "expression": false
                  }
                }
              ],
              "kind": "var"
            },
            {
              "range": [
                60,
                76
              ],
              "type": "ExpressionStatement",
              "expression": {
                "range": [
                  60,
                  75
                ],
                "type": "CallExpression",
                "callee": {
                  "range": [
                    60,
                    72
                  ],
                  "type": "Identifier",
                  "name": "someFunction"
                },
                "arguments": [
                  {
                    "range": [
                      73,
                      74
                    ],
                    "type": "Literal",
                    "value": 5,
                    "raw": "5"
                  }
                ]
              }
            }
          ],
          "sourceType": "module"
        };
        output = `var someFunction = function(a) {
                    a = a + 1;
                    return a;
                  }
                  someFunction(5);`;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func someFunction(a: Int)-> Int {
      //                         let a = a + 1;
      //                         return a
      //                     }
      //                     someFunction(5);`
      // AST Explorer input:
      // var someFunction = function(a) {
      //   a = a + 1;
      //   return a;
      // }
      // someFunction(5);
      xit('should handle function declaration and invocation with no space after the parameter declaration', function() {
        input = {
          "range": [
            0,
            76
          ],
          "type": "Program",
          "body": [
            {
              "range": [
                0,
                59
              ],
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "range": [
                    4,
                    59
                  ],
                  "type": "VariableDeclarator",
                  "id": {
                    "range": [
                      4,
                      16
                    ],
                    "type": "Identifier",
                    "name": "someFunction"
                  },
                  "init": {
                    "range": [
                      19,
                      59
                    ],
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "range": [
                          28,
                          29
                        ],
                        "type": "Identifier",
                        "name": "a"
                      }
                    ],
                    "defaults": [],
                    "body": {
                      "range": [
                        31,
                        59
                      ],
                      "type": "BlockStatement",
                      "body": [
                        {
                          "range": [
                            35,
                            45
                          ],
                          "type": "ExpressionStatement",
                          "expression": {
                            "range": [
                              35,
                              44
                            ],
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "range": [
                                35,
                                36
                              ],
                              "type": "Identifier",
                              "name": "a"
                            },
                            "right": {
                              "range": [
                                39,
                                44
                              ],
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "range": [
                                  39,
                                  40
                                ],
                                "type": "Identifier",
                                "name": "a"
                              },
                              "right": {
                                "range": [
                                  43,
                                  44
                                ],
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              }
                            }
                          }
                        },
                        {
                          "range": [
                            48,
                            57
                          ],
                          "type": "ReturnStatement",
                          "argument": {
                            "range": [
                              55,
                              56
                            ],
                            "type": "Identifier",
                            "name": "a"
                          }
                        }
                      ]
                    },
                    "generator": false,
                    "expression": false
                  }
                }
              ],
              "kind": "var"
            },
            {
              "range": [
                60,
                76
              ],
              "type": "ExpressionStatement",
              "expression": {
                "range": [
                  60,
                  75
                ],
                "type": "CallExpression",
                "callee": {
                  "range": [
                    60,
                    72
                  ],
                  "type": "Identifier",
                  "name": "someFunction"
                },
                "arguments": [
                  {
                    "range": [
                      73,
                      74
                    ],
                    "type": "Literal",
                    "value": 5,
                    "raw": "5"
                  }
                ]
              }
            }
          ],
          "sourceType": "module"
        };
        output = `var someFunction = function(a) {
                    a = a + 1;
                    return a;
                  }
                  someFunction(5);`;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func  someFunction(a: Int)           ->  Int{
      //                         let a = a +               1;
      //                         return                                  a
      //                     }
      //                     someFunction           (5)       ;`;
      // AST Explorer input:
      // var someFunction = function(a) {
      //   a = a + 1;
      //   return a;
      // }
      // someFunction(5);
      xit('should handle function declaration and invocation with erratic spacing', function() {
        input = {
          "range": [
            0,
            76
          ],
          "type": "Program",
          "body": [
            {
              "range": [
                0,
                59
              ],
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "range": [
                    4,
                    59
                  ],
                  "type": "VariableDeclarator",
                  "id": {
                    "range": [
                      4,
                      16
                    ],
                    "type": "Identifier",
                    "name": "someFunction"
                  },
                  "init": {
                    "range": [
                      19,
                      59
                    ],
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "range": [
                          28,
                          29
                        ],
                        "type": "Identifier",
                        "name": "a"
                      }
                    ],
                    "defaults": [],
                    "body": {
                      "range": [
                        31,
                        59
                      ],
                      "type": "BlockStatement",
                      "body": [
                        {
                          "range": [
                            35,
                            45
                          ],
                          "type": "ExpressionStatement",
                          "expression": {
                            "range": [
                              35,
                              44
                            ],
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "range": [
                                35,
                                36
                              ],
                              "type": "Identifier",
                              "name": "a"
                            },
                            "right": {
                              "range": [
                                39,
                                44
                              ],
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "range": [
                                  39,
                                  40
                                ],
                                "type": "Identifier",
                                "name": "a"
                              },
                              "right": {
                                "range": [
                                  43,
                                  44
                                ],
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              }
                            }
                          }
                        },
                        {
                          "range": [
                            48,
                            57
                          ],
                          "type": "ReturnStatement",
                          "argument": {
                            "range": [
                              55,
                              56
                            ],
                            "type": "Identifier",
                            "name": "a"
                          }
                        }
                      ]
                    },
                    "generator": false,
                    "expression": false
                  }
                }
              ],
              "kind": "var"
            },
            {
              "range": [
                60,
                76
              ],
              "type": "ExpressionStatement",
              "expression": {
                "range": [
                  60,
                  75
                ],
                "type": "CallExpression",
                "callee": {
                  "range": [
                    60,
                    72
                  ],
                  "type": "Identifier",
                  "name": "someFunction"
                },
                "arguments": [
                  {
                    "range": [
                      73,
                      74
                    ],
                    "type": "Literal",
                    "value": 5,
                    "raw": "5"
                  }
                ]
              }
            }
          ],
          "sourceType": "module"
        };
        output = `var someFunction = function(a) {
                    a = a + 1;
                    return a;
                  }
                  someFunction(5);`;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func sayHelloWorld() -> String {
      //                        return "hello, world"
      //                    }`;
      xit('should handle functions that return strings', function() {
        input = {
          "range": [
            0,
            57
          ],
          "type": "Program",
          "body": [
            {
              "range": [
                0,
                57
              ],
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "range": [
                    4,
                    57
                  ],
                  "type": "VariableDeclarator",
                  "id": {
                    "range": [
                      4,
                      17
                    ],
                    "type": "Identifier",
                    "name": "sayHelloWorld"
                  },
                  "init": {
                    "range": [
                      20,
                      57
                    ],
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [],
                    "defaults": [],
                    "body": {
                      "range": [
                        31,
                        57
                      ],
                      "type": "BlockStatement",
                      "body": [
                        {
                          "range": [
                            34,
                            55
                          ],
                          "type": "ReturnStatement",
                          "argument": {
                            "range": [
                              41,
                              55
                            ],
                            "type": "Literal",
                            "value": "hello, world",
                            "raw": "\"hello, world\""
                          }
                        }
                      ]
                    },
                    "generator": false,
                    "expression": false
                  }
                }
              ],
              "kind": "var"
            }
          ],
          "sourceType": "module"
        };
        output = `var sayHelloWorld = function() {
                    return "hello, world"
                  }`;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func sayHello(personName: String) -> String {
      //                       let greeting = "Hello, " + personName + "!"
      //                       return greeting
      //                   }`;
      xit('should handle functions with an input that return strings', function() {
        input = {
          "range": [
            0,
            103
          ],
          "type": "Program",
          "body": [
            {
              "range": [
                0,
                103
              ],
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "range": [
                    4,
                    103
                  ],
                  "type": "VariableDeclarator",
                  "id": {
                    "range": [
                      4,
                      12
                    ],
                    "type": "Identifier",
                    "name": "sayHello"
                  },
                  "init": {
                    "range": [
                      15,
                      103
                    ],
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "range": [
                          24,
                          34
                        ],
                        "type": "Identifier",
                        "name": "personName"
                      }
                    ],
                    "defaults": [],
                    "body": {
                      "range": [
                        36,
                        103
                      ],
                      "type": "BlockStatement",
                      "body": [
                        {
                          "range": [
                            40,
                            83
                          ],
                          "type": "VariableDeclaration",
                          "declarations": [
                            {
                              "range": [
                                44,
                                83
                              ],
                              "type": "VariableDeclarator",
                              "id": {
                                "range": [
                                  44,
                                  52
                                ],
                                "type": "Identifier",
                                "name": "greeting"
                              },
                              "init": {
                                "range": [
                                  55,
                                  83
                                ],
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "range": [
                                    55,
                                    77
                                  ],
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "range": [
                                      55,
                                      64
                                    ],
                                    "type": "Literal",
                                    "value": "Hello, ",
                                    "raw": "\"Hello, \""
                                  },
                                  "right": {
                                    "range": [
                                      67,
                                      77
                                    ],
                                    "type": "Identifier",
                                    "name": "personName"
                                  }
                                },
                                "right": {
                                  "range": [
                                    80,
                                    83
                                  ],
                                  "type": "Literal",
                                  "value": "!",
                                  "raw": "\"!\""
                                }
                              }
                            }
                          ],
                          "kind": "var"
                        },
                        {
                          "range": [
                            86,
                            101
                          ],
                          "type": "ReturnStatement",
                          "argument": {
                            "range": [
                              93,
                              101
                            ],
                            "type": "Identifier",
                            "name": "greeting"
                          }
                        }
                      ]
                    },
                    "generator": false,
                    "expression": false
                  }
                }
              ],
              "kind": "var"
            }
          ],
          "sourceType": "module"
        };
        output = `var sayHello = function(personName) {
                    var greeting = "Hello, " + personName + "!"
                    return greeting
                  }`;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func sayHello(alreadyGreeted: Bool) -> String {
      //                         if alreadyGreeted {
      //                             return "blah"
      //                         } else {
      //                             return "hello"
      //                         }
      //                     }
      //                     sayHello(true)`;
      xit('should handle functions that have if else statements that use curly braces and have a return value', function() {
        input = {
          "range": [
            0,
            134
          ],
          "type": "Program",
          "body": [
            {
              "range": [
                0,
                119
              ],
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "range": [
                    4,
                    119
                  ],
                  "type": "VariableDeclarator",
                  "id": {
                    "range": [
                      4,
                      12
                    ],
                    "type": "Identifier",
                    "name": "sayHello"
                  },
                  "init": {
                    "range": [
                      15,
                      119
                    ],
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "range": [
                          24,
                          38
                        ],
                        "type": "Identifier",
                        "name": "alreadyGreeted"
                      }
                    ],
                    "defaults": [],
                    "body": {
                      "range": [
                        40,
                        119
                      ],
                      "type": "BlockStatement",
                      "body": [
                        {
                          "range": [
                            44,
                            117
                          ],
                          "type": "IfStatement",
                          "test": {
                            "range": [
                              48,
                              62
                            ],
                            "type": "Identifier",
                            "name": "alreadyGreeted"
                          },
                          "consequent": {
                            "range": [
                              64,
                              87
                            ],
                            "type": "BlockStatement",
                            "body": [
                              {
                                "range": [
                                  70,
                                  83
                                ],
                                "type": "ReturnStatement",
                                "argument": {
                                  "range": [
                                    77,
                                    83
                                  ],
                                  "type": "Literal",
                                  "value": "blah",
                                  "raw": "\"blah\""
                                }
                              }
                            ]
                          },
                          "alternate": {
                            "range": [
                              93,
                              117
                            ],
                            "type": "BlockStatement",
                            "body": [
                              {
                                "range": [
                                  99,
                                  113
                                ],
                                "type": "ReturnStatement",
                                "argument": {
                                  "range": [
                                    106,
                                    113
                                  ],
                                  "type": "Literal",
                                  "value": "hello",
                                  "raw": "\"hello\""
                                }
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "generator": false,
                    "expression": false
                  }
                }
              ],
              "kind": "var"
            },
            {
              "range": [
                120,
                134
              ],
              "type": "ExpressionStatement",
              "expression": {
                "range": [
                  120,
                  134
                ],
                "type": "CallExpression",
                "callee": {
                  "range": [
                    120,
                    128
                  ],
                  "type": "Identifier",
                  "name": "sayHello"
                },
                "arguments": [
                  {
                    "range": [
                      129,
                      133
                    ],
                    "type": "Literal",
                    "value": true,
                    "raw": "true"
                  }
                ]
              }
            }
          ],
          "sourceType": "module"
        };
        output = `var sayHello = function(alreadyGreeted) {
                    if (alreadyGreeted) {
                      return "blah"
                    } else {
                      return "hello"
                    }
                  }
                  sayHello(true)`;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func sayHello(firstName: String, lastName: String) -> String {
      //             func giveString() -> String {
      //               return firstName + " " + lastName
      //             }
      //             return giveString()
      //         }`;
      xit('should handle nested functions with function invocation', function() {
        input = {
          "range": [
            0,
            144
          ],
          "type": "Program",
          "body": [
            {
              "range": [
                0,
                144
              ],
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "range": [
                    4,
                    144
                  ],
                  "type": "VariableDeclarator",
                  "id": {
                    "range": [
                      4,
                      12
                    ],
                    "type": "Identifier",
                    "name": "sayHello"
                  },
                  "init": {
                    "range": [
                      15,
                      144
                    ],
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "range": [
                          24,
                          33
                        ],
                        "type": "Identifier",
                        "name": "firstName"
                      },
                      {
                        "range": [
                          35,
                          43
                        ],
                        "type": "Identifier",
                        "name": "lastName"
                      }
                    ],
                    "defaults": [],
                    "body": {
                      "range": [
                        45,
                        144
                      ],
                      "type": "BlockStatement",
                      "body": [
                        {
                          "range": [
                            49,
                            120
                          ],
                          "type": "VariableDeclaration",
                          "declarations": [
                            {
                              "range": [
                                53,
                                120
                              ],
                              "type": "VariableDeclarator",
                              "id": {
                                "range": [
                                  53,
                                  63
                                ],
                                "type": "Identifier",
                                "name": "giveString"
                              },
                              "init": {
                                "range": [
                                  66,
                                  120
                                ],
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [],
                                "defaults": [],
                                "body": {
                                  "range": [
                                    77,
                                    120
                                  ],
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "range": [
                                        83,
                                        116
                                      ],
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "range": [
                                          90,
                                          116
                                        ],
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "range": [
                                            90,
                                            105
                                          ],
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "range": [
                                              90,
                                              99
                                            ],
                                            "type": "Identifier",
                                            "name": "firstName"
                                          },
                                          "right": {
                                            "range": [
                                              102,
                                              105
                                            ],
                                            "type": "Literal",
                                            "value": " ",
                                            "raw": "\" \""
                                          }
                                        },
                                        "right": {
                                          "range": [
                                            108,
                                            116
                                          ],
                                          "type": "Identifier",
                                          "name": "lastName"
                                        }
                                      }
                                    }
                                  ]
                                },
                                "generator": false,
                                "expression": false
                              }
                            }
                          ],
                          "kind": "var"
                        },
                        {
                          "range": [
                            123,
                            142
                          ],
                          "type": "ReturnStatement",
                          "argument": {
                            "range": [
                              130,
                              142
                            ],
                            "type": "CallExpression",
                            "callee": {
                              "range": [
                                130,
                                140
                              ],
                              "type": "Identifier",
                              "name": "giveString"
                            },
                            "arguments": []
                          }
                        }
                      ]
                    },
                    "generator": false,
                    "expression": false
                  }
                }
              ],
              "kind": "var"
            }
          ],
          "sourceType": "module"
        };
        output = `var sayHello = function(firstName, lastName) {
                    var giveString = function() {
                      return firstName + " " + lastName
                    }
                    return giveString()
                  }`;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func greet(name: String, day: String) -> String {
      //                 return "Hello \(name), today is \(day)."
      //             }
      //             greet("Bob", day: "Tuesday")`;
      xit('should handle functions with string interpolation', function () {
        input = {
          "range": [
            0,
            113
          ],
          "type": "Program",
          "body": [
            {
              "range": [
                0,
                89
              ],
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "range": [
                    4,
                    89
                  ],
                  "type": "VariableDeclarator",
                  "id": {
                    "range": [
                      4,
                      9
                    ],
                    "type": "Identifier",
                    "name": "greet"
                  },
                  "init": {
                    "range": [
                      12,
                      89
                    ],
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "range": [
                          21,
                          25
                        ],
                        "type": "Identifier",
                        "name": "name"
                      },
                      {
                        "range": [
                          27,
                          30
                        ],
                        "type": "Identifier",
                        "name": "day"
                      }
                    ],
                    "defaults": [],
                    "body": {
                      "range": [
                        32,
                        89
                      ],
                      "type": "BlockStatement",
                      "body": [
                        {
                          "range": [
                            36,
                            86
                          ],
                          "type": "ReturnStatement",
                          "argument": {
                            "range": [
                              43,
                              86
                            ],
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "range": [
                                43,
                                80
                              ],
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "range": [
                                  43,
                                  74
                                ],
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "range": [
                                    43,
                                    58
                                  ],
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "range": [
                                      43,
                                      51
                                    ],
                                    "type": "Literal",
                                    "value": "Hello ",
                                    "raw": "\"Hello \""
                                  },
                                  "right": {
                                    "range": [
                                      54,
                                      58
                                    ],
                                    "type": "Identifier",
                                    "name": "name"
                                  }
                                },
                                "right": {
                                  "range": [
                                    61,
                                    74
                                  ],
                                  "type": "Literal",
                                  "value": ", today is ",
                                  "raw": "\", today is \""
                                }
                              },
                              "right": {
                                "range": [
                                  77,
                                  80
                                ],
                                "type": "Identifier",
                                "name": "day"
                              }
                            },
                            "right": {
                              "range": [
                                83,
                                86
                              ],
                              "type": "Literal",
                              "value": ".",
                              "raw": "\".\""
                            }
                          }
                        }
                      ]
                    },
                    "generator": false,
                    "expression": false
                  }
                }
              ],
              "kind": "var"
            },
            {
              "range": [
                90,
                113
              ],
              "type": "ExpressionStatement",
              "expression": {
                "range": [
                  90,
                  113
                ],
                "type": "CallExpression",
                "callee": {
                  "range": [
                    90,
                    95
                  ],
                  "type": "Identifier",
                  "name": "greet"
                },
                "arguments": [
                  {
                    "range": [
                      96,
                      101
                    ],
                    "type": "Literal",
                    "value": "Bob",
                    "raw": "\"Bob\""
                  },
                  {
                    "range": [
                      103,
                      112
                    ],
                    "type": "Literal",
                    "value": "Tuesday",
                    "raw": "\"Tuesday\""
                  }
                ]
              }
            }
          ],
          "sourceType": "module"
        };
        output = `var greet = function(name, day) {
                    return "Hello " + name + ", today is " + day + "."
                  }
                  greet("Bob", "Tuesday")`;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func addSevenInts(first: Int, second: Int, third: Int, fourth: Int, fifth: Int, sixth: Int, seventh: Int) -> Int {
      //                   let sum = first + second + third + fourth + fifth + sixth + seventh
      //                   return sum
      //               }
      //               addSevenInts(143242134, second: 34543, third: 4, fourth: 6, fifth: 0, sixth: 56, seventh: 5)`;
      xit('should handle functions with many arguments', function () {
        input = {
          "range": [
            0,
            210
          ],
          "type": "Program",
          "body": [
            {
              "range": [
                0,
                163
              ],
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "range": [
                    4,
                    163
                  ],
                  "type": "VariableDeclarator",
                  "id": {
                    "range": [
                      4,
                      16
                    ],
                    "type": "Identifier",
                    "name": "addSevenInts"
                  },
                  "init": {
                    "range": [
                      19,
                      163
                    ],
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "range": [
                          28,
                          33
                        ],
                        "type": "Identifier",
                        "name": "first"
                      },
                      {
                        "range": [
                          35,
                          41
                        ],
                        "type": "Identifier",
                        "name": "second"
                      },
                      {
                        "range": [
                          43,
                          48
                        ],
                        "type": "Identifier",
                        "name": "third"
                      },
                      {
                        "range": [
                          50,
                          56
                        ],
                        "type": "Identifier",
                        "name": "fourth"
                      },
                      {
                        "range": [
                          58,
                          63
                        ],
                        "type": "Identifier",
                        "name": "fifth"
                      },
                      {
                        "range": [
                          65,
                          70
                        ],
                        "type": "Identifier",
                        "name": "sixth"
                      },
                      {
                        "range": [
                          72,
                          79
                        ],
                        "type": "Identifier",
                        "name": "seventh"
                      }
                    ],
                    "defaults": [],
                    "body": {
                      "range": [
                        81,
                        163
                      ],
                      "type": "BlockStatement",
                      "body": [
                        {
                          "range": [
                            85,
                            148
                          ],
                          "type": "ExpressionStatement",
                          "expression": {
                            "range": [
                              85,
                              148
                            ],
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "range": [
                                85,
                                88
                              ],
                              "type": "Identifier",
                              "name": "sum"
                            },
                            "right": {
                              "range": [
                                91,
                                148
                              ],
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "range": [
                                  91,
                                  138
                                ],
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "range": [
                                    91,
                                    130
                                  ],
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "range": [
                                      91,
                                      122
                                    ],
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "range": [
                                        91,
                                        113
                                      ],
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "range": [
                                          91,
                                          105
                                        ],
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "range": [
                                            91,
                                            96
                                          ],
                                          "type": "Identifier",
                                          "name": "first"
                                        },
                                        "right": {
                                          "range": [
                                            99,
                                            105
                                          ],
                                          "type": "Identifier",
                                          "name": "second"
                                        }
                                      },
                                      "right": {
                                        "range": [
                                          108,
                                          113
                                        ],
                                        "type": "Identifier",
                                        "name": "third"
                                      }
                                    },
                                    "right": {
                                      "range": [
                                        116,
                                        122
                                      ],
                                      "type": "Identifier",
                                      "name": "fourth"
                                    }
                                  },
                                  "right": {
                                    "range": [
                                      125,
                                      130
                                    ],
                                    "type": "Identifier",
                                    "name": "fifth"
                                  }
                                },
                                "right": {
                                  "range": [
                                    133,
                                    138
                                  ],
                                  "type": "Identifier",
                                  "name": "sixth"
                                }
                              },
                              "right": {
                                "range": [
                                  141,
                                  148
                                ],
                                "type": "Identifier",
                                "name": "seventh"
                              }
                            }
                          }
                        },
                        {
                          "range": [
                            151,
                            161
                          ],
                          "type": "ReturnStatement",
                          "argument": {
                            "range": [
                              158,
                              161
                            ],
                            "type": "Identifier",
                            "name": "sum"
                          }
                        }
                      ]
                    },
                    "generator": false,
                    "expression": false
                  }
                }
              ],
              "kind": "var"
            },
            {
              "range": [
                164,
                210
              ],
              "type": "ExpressionStatement",
              "expression": {
                "range": [
                  164,
                  210
                ],
                "type": "CallExpression",
                "callee": {
                  "range": [
                    164,
                    176
                  ],
                  "type": "Identifier",
                  "name": "addSevenInts"
                },
                "arguments": [
                  {
                    "range": [
                      177,
                      186
                    ],
                    "type": "Literal",
                    "value": 143242134,
                    "raw": "143242134"
                  },
                  {
                    "range": [
                      188,
                      193
                    ],
                    "type": "Literal",
                    "value": 34543,
                    "raw": "34543"
                  },
                  {
                    "range": [
                      195,
                      196
                    ],
                    "type": "Literal",
                    "value": 4,
                    "raw": "4"
                  },
                  {
                    "range": [
                      198,
                      199
                    ],
                    "type": "Literal",
                    "value": 6,
                    "raw": "6"
                  },
                  {
                    "range": [
                      201,
                      202
                    ],
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  },
                  {
                    "range": [
                      204,
                      206
                    ],
                    "type": "Literal",
                    "value": 56,
                    "raw": "56"
                  },
                  {
                    "range": [
                      208,
                      209
                    ],
                    "type": "Literal",
                    "value": 5,
                    "raw": "5"
                  }
                ]
              }
            }
          ],
          "sourceType": "module"
        };
        output = `var addSevenInts = function(first, second, third, fourth, fifth, sixth, seventh) {
                    sum = first + second + third + fourth + fifth + sixth + seventh
                    return sum
                  }
                  addSevenInts(143242134, 34543, 4, 6, 0, 56, 5)`;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func addOne(input: Int) -> Int {
      //                         return input + 1
      //                     }
      //                     addOne(((17 * 4) - 3) * 5)`;
      xit('should handle function invocations with internal parentheses', function () {
        input = {
          "range": [
            0,
            78
          ],
          "type": "Program",
          "body": [
            {
              "range": [
                0,
                51
              ],
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "range": [
                    4,
                    51
                  ],
                  "type": "VariableDeclarator",
                  "id": {
                    "range": [
                      4,
                      10
                    ],
                    "type": "Identifier",
                    "name": "addOne"
                  },
                  "init": {
                    "range": [
                      13,
                      51
                    ],
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "range": [
                          22,
                          27
                        ],
                        "type": "Identifier",
                        "name": "input"
                      }
                    ],
                    "defaults": [],
                    "body": {
                      "range": [
                        29,
                        51
                      ],
                      "type": "BlockStatement",
                      "body": [
                        {
                          "range": [
                            33,
                            49
                          ],
                          "type": "ReturnStatement",
                          "argument": {
                            "range": [
                              40,
                              49
                            ],
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "range": [
                                40,
                                45
                              ],
                              "type": "Identifier",
                              "name": "input"
                            },
                            "right": {
                              "range": [
                                48,
                                49
                              ],
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        }
                      ]
                    },
                    "generator": false,
                    "expression": false
                  }
                }
              ],
              "kind": "var"
            },
            {
              "range": [
                52,
                78
              ],
              "type": "ExpressionStatement",
              "expression": {
                "range": [
                  52,
                  78
                ],
                "type": "CallExpression",
                "callee": {
                  "range": [
                    52,
                    58
                  ],
                  "type": "Identifier",
                  "name": "addOne"
                },
                "arguments": [
                  {
                    "range": [
                      59,
                      77
                    ],
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "range": [
                        60,
                        72
                      ],
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "range": [
                          61,
                          67
                        ],
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "range": [
                            61,
                            63
                          ],
                          "type": "Literal",
                          "value": 17,
                          "raw": "17"
                        },
                        "right": {
                          "range": [
                            66,
                            67
                          ],
                          "type": "Literal",
                          "value": 4,
                          "raw": "4"
                        }
                      },
                      "right": {
                        "range": [
                          71,
                          72
                        ],
                        "type": "Literal",
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "right": {
                      "range": [
                        76,
                        77
                      ],
                      "type": "Literal",
                      "value": 5,
                      "raw": "5"
                    }
                  }
                ]
              }
            }
          ],
          "sourceType": "module"
        };
        output = `var addOne = function(input) {
                    return input + 1
                  }
                  addOne(((17 * 4) - 3) * 5)`;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func returnTuple(num: Int) -> (plusFive: Int, timesFive: Int) {
      //                   let plusFiveResult = num + 5
      //                   let timesFiveResult = num * 5
      //                   return (plusFiveResult, timesFiveResult)
      //               }
      //               returnTuple(5)`;
      xit('should handle functions that return tuples', function () {
        input = "FILL_ME_IN";
        output = ``;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func nameAndAge(name: String, age: Int) -> (name: String, age: Int) {
      //                   return (name, age)
      //               }
      //               let person = nameAndAge("Steve", age: 45)`;
      xit('should handle functions that return tuples with mixed values', function () {
        input = "FILL_ME_IN";
        output = ``;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func minMax(array: [Int]) -> (min: Int, max: Int) {
      //             var currentMin = array[0]
      //             var currentMax = array[0]
      //             for value in array[1..<array.count] {
      //                 if value < currentMin {
      //                     currentMin = value
      //                 } else if value > currentMax {
      //                     currentMax = value
      //                 }
      //             }
      //             return (currentMin, currentMax)
      //         }`;
      xit('should handle functions with for loops, if and else if statments, and native count methods', function () {
        input = "FILL_ME_IN";
        output = ``;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func minMax(array: [Int]) -> (min: Int, max: Int) {
      //             var currentMin = array[0]
      //             var currentMax = array[0]
      //             for value in array[1..<2] {
      //                 if value < currentMin {
      //                     currentMin = value
      //                 } else if value > currentMax {
      //                     currentMax = value
      //                 }
      //             }
      //             return (currentMin, currentMax)
      //         }`;
      xit('should handle functions with for loops and if and else if statments', function () {
        input = "FILL_ME_IN";
        output = ``;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func sumOf(numbers: Int...) -> Int {
      //                   var sum = 0
      //                   for number in numbers {
      //                       sum += number
      //                   }
      //                   return sum
      //               }
      //               sumOf(1,2,3)`;
      xit('should handle functions that have variadic parameters', function () {
        input = {
          "range": [
            0,
            172
          ],
          "type": "Program",
          "body": [
            {
              "range": [
                0,
                159
              ],
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "range": [
                    4,
                    159
                  ],
                  "type": "VariableDeclarator",
                  "id": {
                    "range": [
                      4,
                      9
                    ],
                    "type": "Identifier",
                    "name": "sumOf"
                  },
                  "init": {
                    "range": [
                      12,
                      159
                    ],
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [],
                    "defaults": [],
                    "body": {
                      "range": [
                        23,
                        159
                      ],
                      "type": "BlockStatement",
                      "body": [
                        {
                          "range": [
                            27,
                            79
                          ],
                          "type": "VariableDeclaration",
                          "declarations": [
                            {
                              "range": [
                                31,
                                78
                              ],
                              "type": "VariableDeclarator",
                              "id": {
                                "range": [
                                  31,
                                  38
                                ],
                                "type": "Identifier",
                                "name": "numbers"
                              },
                              "init": {
                                "range": [
                                  41,
                                  78
                                ],
                                "type": "CallExpression",
                                "callee": {
                                  "range": [
                                    41,
                                    67
                                  ],
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "range": [
                                      41,
                                      62
                                    ],
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "range": [
                                        41,
                                        56
                                      ],
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "range": [
                                          41,
                                          46
                                        ],
                                        "type": "Identifier",
                                        "name": "Array"
                                      },
                                      "property": {
                                        "range": [
                                          47,
                                          56
                                        ],
                                        "type": "Identifier",
                                        "name": "prototype"
                                      }
                                    },
                                    "property": {
                                      "range": [
                                        57,
                                        62
                                      ],
                                      "type": "Identifier",
                                      "name": "slice"
                                    }
                                  },
                                  "property": {
                                    "range": [
                                      63,
                                      67
                                    ],
                                    "type": "Identifier",
                                    "name": "call"
                                  }
                                },
                                "arguments": [
                                  {
                                    "range": [
                                      68,
                                      77
                                    ],
                                    "type": "Identifier",
                                    "name": "arguments"
                                  }
                                ]
                              }
                            }
                          ],
                          "kind": "var"
                        },
                        {
                          "range": [
                            82,
                            94
                          ],
                          "type": "VariableDeclaration",
                          "declarations": [
                            {
                              "range": [
                                86,
                                93
                              ],
                              "type": "VariableDeclarator",
                              "id": {
                                "range": [
                                  86,
                                  89
                                ],
                                "type": "Identifier",
                                "name": "sum"
                              },
                              "init": {
                                "range": [
                                  92,
                                  93
                                ],
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              }
                            }
                          ],
                          "kind": "var"
                        },
                        {
                          "range": [
                            97,
                            144
                          ],
                          "type": "ForInStatement",
                          "left": {
                            "range": [
                              102,
                              108
                            ],
                            "type": "Identifier",
                            "name": "number"
                          },
                          "right": {
                            "range": [
                              112,
                              119
                            ],
                            "type": "Identifier",
                            "name": "numbers"
                          },
                          "body": {
                            "range": [
                              121,
                              144
                            ],
                            "type": "BlockStatement",
                            "body": [
                              {
                                "range": [
                                  127,
                                  140
                                ],
                                "type": "ExpressionStatement",
                                "expression": {
                                  "range": [
                                    127,
                                    140
                                  ],
                                  "type": "AssignmentExpression",
                                  "operator": "+=",
                                  "left": {
                                    "range": [
                                      127,
                                      130
                                    ],
                                    "type": "Identifier",
                                    "name": "sum"
                                  },
                                  "right": {
                                    "range": [
                                      134,
                                      140
                                    ],
                                    "type": "Identifier",
                                    "name": "number"
                                  }
                                }
                              }
                            ]
                          },
                          "each": false
                        },
                        {
                          "range": [
                            147,
                            157
                          ],
                          "type": "ReturnStatement",
                          "argument": {
                            "range": [
                              154,
                              157
                            ],
                            "type": "Identifier",
                            "name": "sum"
                          }
                        }
                      ]
                    },
                    "generator": false,
                    "expression": false
                  }
                }
              ],
              "kind": "var"
            },
            {
              "range": [
                160,
                172
              ],
              "type": "ExpressionStatement",
              "expression": {
                "range": [
                  160,
                  172
                ],
                "type": "CallExpression",
                "callee": {
                  "range": [
                    160,
                    165
                  ],
                  "type": "Identifier",
                  "name": "sumOf"
                },
                "arguments": [
                  {
                    "range": [
                      166,
                      167
                    ],
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "range": [
                      168,
                      169
                    ],
                    "type": "Literal",
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "range": [
                      170,
                      171
                    ],
                    "type": "Literal",
                    "value": 3,
                    "raw": "3"
                  }
                ]
              }
            }
          ],
          "sourceType": "module"
        };
        output = `var sumOf = function() {
                    var numbers = Array.prototype.slice.call(arguments);
                    var sum = 0;
                    for (number in numbers) {
                      sum += number
                    }
                    return sum
                  }
                  sumOf(1,2,3)`;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func makeIncrementer() -> ((Int) -> Int) {
      //                       func addOne(number: Int) -> Int {
      //                           return 1 + number
      //                       }
      //                       return addOne
      //                   }`;
      xit('should handle functions that return functions where the return function is specified within parentheses', function () {
        input = {
          "range": [
            0,
            112
          ],
          "type": "Program",
          "body": [
            {
              "range": [
                0,
                112
              ],
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "range": [
                    4,
                    112
                  ],
                  "type": "VariableDeclarator",
                  "id": {
                    "range": [
                      4,
                      19
                    ],
                    "type": "Identifier",
                    "name": "makeIncrementer"
                  },
                  "init": {
                    "range": [
                      22,
                      112
                    ],
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [],
                    "defaults": [],
                    "body": {
                      "range": [
                        33,
                        112
                      ],
                      "type": "BlockStatement",
                      "body": [
                        {
                          "range": [
                            37,
                            94
                          ],
                          "type": "VariableDeclaration",
                          "declarations": [
                            {
                              "range": [
                                41,
                                94
                              ],
                              "type": "VariableDeclarator",
                              "id": {
                                "range": [
                                  41,
                                  47
                                ],
                                "type": "Identifier",
                                "name": "addOne"
                              },
                              "init": {
                                "range": [
                                  50,
                                  94
                                ],
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [
                                  {
                                    "range": [
                                      59,
                                      65
                                    ],
                                    "type": "Identifier",
                                    "name": "number"
                                  }
                                ],
                                "defaults": [],
                                "body": {
                                  "range": [
                                    67,
                                    94
                                  ],
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "range": [
                                        73,
                                        90
                                      ],
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "range": [
                                          80,
                                          90
                                        ],
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "range": [
                                            80,
                                            81
                                          ],
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1"
                                        },
                                        "right": {
                                          "range": [
                                            84,
                                            90
                                          ],
                                          "type": "Identifier",
                                          "name": "number"
                                        }
                                      }
                                    }
                                  ]
                                },
                                "generator": false,
                                "expression": false
                              }
                            }
                          ],
                          "kind": "var"
                        },
                        {
                          "range": [
                            97,
                            110
                          ],
                          "type": "ReturnStatement",
                          "argument": {
                            "range": [
                              104,
                              110
                            ],
                            "type": "Identifier",
                            "name": "addOne"
                          }
                        }
                      ]
                    },
                    "generator": false,
                    "expression": false
                  }
                }
              ],
              "kind": "var"
            }
          ],
          "sourceType": "module"
        };
        output = `var makeIncrementer = function() {
                    var addOne = function(number) {
                      return 1 + number
                    }
                    return addOne
                  }`;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func makeIncrementer() -> (Int) -> Int {
      //                       func addOne(number: Int) -> Int {
      //                           return 1 + number
      //                       }
      //                       return addOne
      //                   }`;
      xit('should handle functions that return functions where the return function is specified without parentheses', function () {
        input = {
          "range": [
            0,
            112
          ],
          "type": "Program",
          "body": [
            {
              "range": [
                0,
                112
              ],
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "range": [
                    4,
                    112
                  ],
                  "type": "VariableDeclarator",
                  "id": {
                    "range": [
                      4,
                      19
                    ],
                    "type": "Identifier",
                    "name": "makeIncrementer"
                  },
                  "init": {
                    "range": [
                      22,
                      112
                    ],
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [],
                    "defaults": [],
                    "body": {
                      "range": [
                        33,
                        112
                      ],
                      "type": "BlockStatement",
                      "body": [
                        {
                          "range": [
                            37,
                            94
                          ],
                          "type": "VariableDeclaration",
                          "declarations": [
                            {
                              "range": [
                                41,
                                94
                              ],
                              "type": "VariableDeclarator",
                              "id": {
                                "range": [
                                  41,
                                  47
                                ],
                                "type": "Identifier",
                                "name": "addOne"
                              },
                              "init": {
                                "range": [
                                  50,
                                  94
                                ],
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [
                                  {
                                    "range": [
                                      59,
                                      65
                                    ],
                                    "type": "Identifier",
                                    "name": "number"
                                  }
                                ],
                                "defaults": [],
                                "body": {
                                  "range": [
                                    67,
                                    94
                                  ],
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "range": [
                                        73,
                                        90
                                      ],
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "range": [
                                          80,
                                          90
                                        ],
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "range": [
                                            80,
                                            81
                                          ],
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1"
                                        },
                                        "right": {
                                          "range": [
                                            84,
                                            90
                                          ],
                                          "type": "Identifier",
                                          "name": "number"
                                        }
                                      }
                                    }
                                  ]
                                },
                                "generator": false,
                                "expression": false
                              }
                            }
                          ],
                          "kind": "var"
                        },
                        {
                          "range": [
                            97,
                            110
                          ],
                          "type": "ReturnStatement",
                          "argument": {
                            "range": [
                              104,
                              110
                            ],
                            "type": "Identifier",
                            "name": "addOne"
                          }
                        }
                      ]
                    },
                    "generator": false,
                    "expression": false
                  }
                }
              ],
              "kind": "var"
            }
          ],
          "sourceType": "module"
        };
        output = `var makeIncrementer = function() {
                    var addOne = function(number) {
                      return 1 + number
                    }
                    return addOne
                  }`;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func any(list: [Int], condition: ((Int) -> Bool)) -> Bool {
      //                         for item in list {
      //                             if condition(item) {
      //                                 return true
      //                             }
      //                         }
      //                         return false
      //                     }`;
      xit('should handle functions that take a function specified with parentheses as an argument', function () {
        input = {
          "range": [
            0,
            132
          ],
          "type": "Program",
          "body": [
            {
              "range": [
                0,
                132
              ],
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "range": [
                    4,
                    132
                  ],
                  "type": "VariableDeclarator",
                  "id": {
                    "range": [
                      4,
                      7
                    ],
                    "type": "Identifier",
                    "name": "any"
                  },
                  "init": {
                    "range": [
                      10,
                      132
                    ],
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "range": [
                          19,
                          23
                        ],
                        "type": "Identifier",
                        "name": "list"
                      },
                      {
                        "range": [
                          25,
                          34
                        ],
                        "type": "Identifier",
                        "name": "condition"
                      }
                    ],
                    "defaults": [],
                    "body": {
                      "range": [
                        36,
                        132
                      ],
                      "type": "BlockStatement",
                      "body": [
                        {
                          "range": [
                            40,
                            115
                          ],
                          "type": "ForInStatement",
                          "left": {
                            "range": [
                              45,
                              49
                            ],
                            "type": "Identifier",
                            "name": "item"
                          },
                          "right": {
                            "range": [
                              53,
                              57
                            ],
                            "type": "Identifier",
                            "name": "list"
                          },
                          "body": {
                            "range": [
                              59,
                              115
                            ],
                            "type": "BlockStatement",
                            "body": [
                              {
                                "range": [
                                  65,
                                  111
                                ],
                                "type": "IfStatement",
                                "test": {
                                  "range": [
                                    69,
                                    84
                                  ],
                                  "type": "CallExpression",
                                  "callee": {
                                    "range": [
                                      69,
                                      78
                                    ],
                                    "type": "Identifier",
                                    "name": "condition"
                                  },
                                  "arguments": [
                                    {
                                      "range": [
                                        79,
                                        83
                                      ],
                                      "type": "Identifier",
                                      "name": "item"
                                    }
                                  ]
                                },
                                "consequent": {
                                  "range": [
                                    86,
                                    111
                                  ],
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "range": [
                                        94,
                                        105
                                      ],
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "range": [
                                          101,
                                          105
                                        ],
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true"
                                      }
                                    }
                                  ]
                                },
                                "alternate": null
                              }
                            ]
                          },
                          "each": false
                        },
                        {
                          "range": [
                            118,
                            130
                          ],
                          "type": "ReturnStatement",
                          "argument": {
                            "range": [
                              125,
                              130
                            ],
                            "type": "Literal",
                            "value": false,
                            "raw": "false"
                          }
                        }
                      ]
                    },
                    "generator": false,
                    "expression": false
                  }
                }
              ],
              "kind": "var"
            }
          ],
          "sourceType": "module"
        };
        output = `var any = function(list, condition) {
                    for (item in list) {
                      if (condition(item)) {
                        return true
                      }
                    }
                    return false
                  }`;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func any(list: [Int], condition: (Int) -> Bool) -> Bool {
      //                         for item in list {
      //                             if condition(item) {
      //                                 return true
      //                             }
      //                         }
      //                         return false
      //                     }`;
      xit('should handle functions that take a function specified without parentheses as an argument', function () {
        input = {
          "range": [
            0,
            132
          ],
          "type": "Program",
          "body": [
            {
              "range": [
                0,
                132
              ],
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "range": [
                    4,
                    132
                  ],
                  "type": "VariableDeclarator",
                  "id": {
                    "range": [
                      4,
                      7
                    ],
                    "type": "Identifier",
                    "name": "any"
                  },
                  "init": {
                    "range": [
                      10,
                      132
                    ],
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "range": [
                          19,
                          23
                        ],
                        "type": "Identifier",
                        "name": "list"
                      },
                      {
                        "range": [
                          25,
                          34
                        ],
                        "type": "Identifier",
                        "name": "condition"
                      }
                    ],
                    "defaults": [],
                    "body": {
                      "range": [
                        36,
                        132
                      ],
                      "type": "BlockStatement",
                      "body": [
                        {
                          "range": [
                            40,
                            115
                          ],
                          "type": "ForInStatement",
                          "left": {
                            "range": [
                              45,
                              49
                            ],
                            "type": "Identifier",
                            "name": "item"
                          },
                          "right": {
                            "range": [
                              53,
                              57
                            ],
                            "type": "Identifier",
                            "name": "list"
                          },
                          "body": {
                            "range": [
                              59,
                              115
                            ],
                            "type": "BlockStatement",
                            "body": [
                              {
                                "range": [
                                  65,
                                  111
                                ],
                                "type": "IfStatement",
                                "test": {
                                  "range": [
                                    69,
                                    84
                                  ],
                                  "type": "CallExpression",
                                  "callee": {
                                    "range": [
                                      69,
                                      78
                                    ],
                                    "type": "Identifier",
                                    "name": "condition"
                                  },
                                  "arguments": [
                                    {
                                      "range": [
                                        79,
                                        83
                                      ],
                                      "type": "Identifier",
                                      "name": "item"
                                    }
                                  ]
                                },
                                "consequent": {
                                  "range": [
                                    86,
                                    111
                                  ],
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "range": [
                                        94,
                                        105
                                      ],
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "range": [
                                          101,
                                          105
                                        ],
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true"
                                      }
                                    }
                                  ]
                                },
                                "alternate": null
                              }
                            ]
                          },
                          "each": false
                        },
                        {
                          "range": [
                            118,
                            130
                          ],
                          "type": "ReturnStatement",
                          "argument": {
                            "range": [
                              125,
                              130
                            ],
                            "type": "Literal",
                            "value": false,
                            "raw": "false"
                          }
                        }
                      ]
                    },
                    "generator": false,
                    "expression": false
                  }
                }
              ],
              "kind": "var"
            }
          ],
          "sourceType": "module"
        };
        output = `var any = function(list, condition) {
                    for (item in list) {
                      if (condition(item)) {
                        return true
                      }
                    }
                    return false
                  }`;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });

      // input = String.raw`func returnWorld() -> String {
      //                         return "World"
      //                     }
      //                     func printInput(input: String) {
      //                         print(input)
      //                     }
      //                     printInput("Hello, \(returnWorld())!")`;
      xit('should handle functions whose invocation contains string interpolation that contains a function invocation', function () {
        input = {
          "range": [
            0,
            145
          ],
          "type": "Program",
          "body": [
            {
              "range": [
                0,
                49
              ],
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "range": [
                    4,
                    49
                  ],
                  "type": "VariableDeclarator",
                  "id": {
                    "range": [
                      4,
                      15
                    ],
                    "type": "Identifier",
                    "name": "returnWorld"
                  },
                  "init": {
                    "range": [
                      18,
                      49
                    ],
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [],
                    "defaults": [],
                    "body": {
                      "range": [
                        29,
                        49
                      ],
                      "type": "BlockStatement",
                      "body": [
                        {
                          "range": [
                            33,
                            47
                          ],
                          "type": "ReturnStatement",
                          "argument": {
                            "range": [
                              40,
                              47
                            ],
                            "type": "Literal",
                            "value": "World",
                            "raw": "\"World\""
                          }
                        }
                      ]
                    },
                    "generator": false,
                    "expression": false
                  }
                }
              ],
              "kind": "var"
            },
            {
              "range": [
                50,
                101
              ],
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "range": [
                    54,
                    101
                  ],
                  "type": "VariableDeclarator",
                  "id": {
                    "range": [
                      54,
                      64
                    ],
                    "type": "Identifier",
                    "name": "printInput"
                  },
                  "init": {
                    "range": [
                      67,
                      101
                    ],
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                      {
                        "range": [
                          76,
                          81
                        ],
                        "type": "Identifier",
                        "name": "input"
                      }
                    ],
                    "defaults": [],
                    "body": {
                      "range": [
                        83,
                        101
                      ],
                      "type": "BlockStatement",
                      "body": [
                        {
                          "range": [
                            87,
                            99
                          ],
                          "type": "ExpressionStatement",
                          "expression": {
                            "range": [
                              87,
                              99
                            ],
                            "type": "CallExpression",
                            "callee": {
                              "range": [
                                87,
                                92
                              ],
                              "type": "Identifier",
                              "name": "print"
                            },
                            "arguments": [
                              {
                                "range": [
                                  93,
                                  98
                                ],
                                "type": "Identifier",
                                "name": "input"
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "generator": false,
                    "expression": false
                  }
                }
              ],
              "kind": "var"
            },
            {
              "range": [
                102,
                145
              ],
              "type": "ExpressionStatement",
              "expression": {
                "range": [
                  102,
                  145
                ],
                "type": "CallExpression",
                "callee": {
                  "range": [
                    102,
                    112
                  ],
                  "type": "Identifier",
                  "name": "printInput"
                },
                "arguments": [
                  {
                    "range": [
                      113,
                      144
                    ],
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "range": [
                        113,
                        138
                      ],
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "range": [
                          113,
                          122
                        ],
                        "type": "Literal",
                        "value": "Hello, ",
                        "raw": "\"Hello, \""
                      },
                      "right": {
                        "range": [
                          125,
                          138
                        ],
                        "type": "CallExpression",
                        "callee": {
                          "range": [
                            125,
                            136
                          ],
                          "type": "Identifier",
                          "name": "returnWorld"
                        },
                        "arguments": []
                      }
                    },
                    "right": {
                      "range": [
                        141,
                        144
                      ],
                      "type": "Literal",
                      "value": "!",
                      "raw": "\"!\""
                    }
                  }
                ]
              }
            }
          ],
          "sourceType": "module"
        };
        output = `var returnWorld = function() {
                    return "World"
                  }
                  var printInput = function(input) {
                    print(input)
                  }
                  printInput("Hello, " + returnWorld() + "!")`;
        expect(removeIndentation(generator(input))).to.equal(removeIndentation(output));
      });
    });
});