"use strict";

import bs58 from "bs58";

// module Data.Base58

export const encode = function(x) {
  return bs58.encode(x)
};

export const decodePrime = function(just, nothing, x) {
  try {
    return just(bs58.decode(x));
  } catch (err) {
    return nothing;
  }
};
