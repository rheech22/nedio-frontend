import styled from 'styled-components';
import { Provider, ReactReduxContext } from 'react-redux';
import { Debug, Physics } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import DomTheme from '../DomTheme';
import ModernTheme from '../ModernTheme';
import JazzTheme from '../JazzTheme';

interface Props {
  pickItem: (item: any) => void;
}

function Hall({ pickItem }: Props) {
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <Container>
          <Canvas>
            <Provider store={store}>
              <Physics gravity={[0, 0, 0]}>
                {/* <Debug color="black" scale={1.1}> */}
                <DomTheme pickItem={pickItem} />
                {/* </Debug>
                <OrbitControls /> */}
              </Physics>
            </Provider>
          </Canvas>
        </Container>
      )}
    </ReactReduxContext.Consumer>
  );
}

export default Hall;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
