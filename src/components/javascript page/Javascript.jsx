import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import fetchingData from '../../helpers/fetchingData';

import { AsideMenu } from '../aside menu'

const JavascriptPage = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`


function Javascript() {

  const { data } = useQuery(['mydata'], ({ data = 'javascript' }) => fetchingData(data))

  return (
    <>
      <JavascriptPage>

        <AsideMenu title={'javaScript'} state={data}/>
        
      </JavascriptPage>
    </>
  )
};


export default Javascript;