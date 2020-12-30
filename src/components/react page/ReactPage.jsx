import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import fetchingData from '../../helpers/fetchingData';

import { AsideMenu } from '../aside menu';

const ReactPageContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

function ReactPage() {

  const { data } = useQuery(['mydata'], ({ data = 'react' }) => fetchingData(data))

  return ( 
    <>
      <ReactPageContainer>

        <AsideMenu title={'React'} state={data} />

      </ReactPageContainer>
    </>
   );
}

export default ReactPage;