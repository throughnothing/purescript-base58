module Data.Base58 where

import Data.Function
import Data.Maybe

type Base58 = String

-- | FFI wrapper to decode an Array Byte to a Maybe Base58
foreign import decodePrime :: forall a. Fn3 (a -> Maybe a) (Maybe a) Base58 (Maybe (Array Int))

decode :: Base58 -> Maybe (Array Int)
decode = runFn3 decodePrime Just Nothing

-- | FFI wrapper to decode an Array Byte to a Maybe Base58
foreign import encode :: (Array Int) -> Base58
