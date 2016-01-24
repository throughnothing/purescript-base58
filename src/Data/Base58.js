// Module Text.Base58
"use strict";

var bs58 = require("bs58");

// module Data.Base58

exports.encode = function(x) {
  return bs58.encode(x)
}

exports.decodePrime = function(just, nothing, x) {
  try {
    return just(bs58.decode(x));
  } catch (err) {
    return nothing;
  }
};
