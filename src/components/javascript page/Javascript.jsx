import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import fetchingData from '../../helpers/fetchingData';

import { AsideMenu } from '../aside menu';
import { MapMethod } from '../javascript page/components';


const JavascriptPage = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  margin-top: 60px;
`


function Javascript() {

  const { data } = useQuery(['mydata'], ({ data = 'javascript' }) => fetchingData(data));

  return (
    <>
      <JavascriptPage>

        <AsideMenu title={'javaScript'} state={data}/>

        <MapMethod />

      </JavascriptPage>
    </>
  )
};


export default Javascript;