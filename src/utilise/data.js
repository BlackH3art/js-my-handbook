module.exports = function () {
  return {
    javascript: {
      methods: {
        array: [
          "concat", "copyWithin", "entries", "every", "fill", "filter", "find", "findIndex", "flat", "flatMap", "forEach", "includes", "indexOf", "join", "keys", 
          "lastIndexOf", "map", "pop", "push", "reduce", "reduceRight", "reverse", "shift", "slice", "some", "sort", "splice", "toLocaleString", "toString", "unshift", "values",
        ],
        boolean: ["toString", "valueOf"],
        number: ["toExponential", "toFixed", "toLocaleString", "toPrecision", "toString", "valueOf", "isFinite", "isInteger", "isNaN", "isSafeInteger", "parseFloat", "parseInt"],
        object: [
          "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf", "assign", "create", "defineProperties", "defineProperty",
          "entries", "freeze", "fromEntries", "getOwnPropertyDescriptor", "getOwnPropertyDescriptors", "getOwnPropertyNames", "getOwnPropertySymbols", "getPrototypeOf", "is", "isExtensible", "isFrozen", "isSealed", "keys", "preventExtensions", "prototype", 
          "seal", "setPrototypeOf", "values"
        ],
        string: [
          "anchor", "big", "big", "blink", "bold", "charAt", "charCodeAt", "codePointAt", "concat", "endsWith", "fixed", "fontcolor", "fontsize", "includes", "indexOf", "italics", "lastIndexOf", 
          "link", "localeCompare", "match", "matchAll", "normalize", "padEnd", "padStart", "repeat", "replace", "replaceAll", "search", "slice", "small", "split", "startsWith", "strike", "sub", "substr", 
          "substring", "sup", "toLocaleLowerCase", "toLocaleUpperCase", "toLowerCase", "toUpperCase", "trim", "trimEnd", "trimLeft", "trimRight", "trimStart", "valueOf", 
        ],
        symbol: []
      }, 
      loops: ["for", "do...while", "while", "for...in", "for...of"]
    },
    typescript: {

    }
  }
}