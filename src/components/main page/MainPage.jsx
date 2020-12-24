import styled from 'styled-components';
import { motion } from 'framer-motion';

import background from '../../images/lib.jpg';
import './styles/main_page.css';


const BackgroundDiv = styled.div`
  background-image: url("${background}");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
`;

const TitleH1 = styled.h1`
  font-size: ${props => props.theme.spacing.xl * 4}px;
  margin: 0 0;
`
const SubtitleH2 = styled.h2`
  font-size: ${props => props.theme.spacing.xl}px;
  margin: 10px 0;

`


function MainPage() {

  const initialTitleState = {
    opacity: 0,
    x: +200,
  }

  const animateTitleState = {
    opacity: 1,
    x: 0,
  }

  const transitionTitleState = {
    duration: 1,
    ease: "easeOut",
    delay: .4
  }

  return ( 
    <>
      <BackgroundDiv>

        <motion.div className="title-container" 
          initial={initialTitleState} 
          animate={animateTitleState} 
          transition={transitionTitleState}
        >
          <TitleH1>My-Lib</TitleH1>
          <SubtitleH2>Miejsce gdzie gromadzę i buduję swoją wiedzę</SubtitleH2>

        </motion.div>

      </BackgroundDiv>
    </>
  );
}
 
export default MainPage;