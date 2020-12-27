import { useState } from 'react';
import styled from 'styled-components';

import { LoadingIndicator } from '../loading indicator';
import { AsideMenu } from '../aside menu';

const JavascriptPage = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`


function Javascript() {

  const [pseudoData, setPseudoData] = useState({
    javascript: {
      methods: {
        array: ["concat", "copyWithin", "entries", "every", "fill", "filter", "find", "findIndex", "flat", "flatMap", "forEach", "includes"],
        boolean: ["toString", "valueOf"],
        number: ["toExponential", "toFixed", "toLocaleString", "toPrecision", "toString", "valueOf", "isFinite"],
        object: ["hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf", "assign", "create", ],
        string: ["anchor", "big", "big", "blink", "bold", "charAt", "charCodeAt", "codePointAt", "concat", "endsWith", "fixed"],
        symbol: []
      }, 
      loops: {
        for: ["for", "for...in", "for...of"],
        do: ["do...while", "while"]
      }
    },
    typescript: {

    }
  })

  return (
    <>
      <JavascriptPage>
        <LoadingIndicator />
        <AsideMenu title={'javaScript'} state={pseudoData.javascript}/>
      </JavascriptPage>
    </>
  )
};


export default Javascript;