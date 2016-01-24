## Module Data.Base58

#### `Base58`

``` purescript
type Base58 = String
```

#### `decodePrime`

``` purescript
decodePrime :: forall a. Fn3 (a -> Maybe a) (Maybe a) Base58 (Maybe (Array Int))
```

FFI wrapper to decode an Array Byte to a Maybe Base58

#### `decode`

``` purescript
decode :: Base58 -> Maybe (Array Int)
```

#### `encode`

``` purescript
encode :: Array Int -> Base58
```

FFI wrapper to decode an Array Byte to a Maybe Base58


