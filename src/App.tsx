import { useRecoilValue } from 'recoil';
import Buttons from './Components/Button';
import Inputs from './Components/Inputs';
import Parent from './Components/Parent';
import { backgroundColorStyle } from './store/recoil';

function App() {
  return (
    <div className='page'>
      <h1>Recoil Demo</h1>
      <Modal />
    </div>
  );
}

const Modal = () => {
  return (
    <ModalBackground>
      <Inputs />
      <ButtonInALeafFarFarAway />
    </ModalBackground>
  );
};

interface ModalBackgroundProps {
  children: React.ReactNode;
}

const ModalBackground = ({ children }: ModalBackgroundProps) => {
  const style = useRecoilValue(backgroundColorStyle);

  return (
    <span style={style} className='modal'>
      {children}
    </span>
  );
};

const ButtonInALeafFarFarAway = () => {
  return (
    <Parent>
      <Parent>
        <Parent>
          <Parent>
            <Parent>
              <Parent>
                <Parent>
                  <Parent>
                    <Parent>
                      <Parent>
                        <Parent>
                          <Parent>
                            <Parent>
                              <Parent>
                                <Parent>
                                  <Parent>
                                    <Parent>
                                      <Parent>
                                        <Parent>
                                          <Parent>
                                            <Parent>
                                              <Parent>
                                                <Parent>
                                                  <Parent>
                                                    <Parent>
                                                      <Parent>
                                                        <Parent>
                                                          <Parent>
                                                            <Parent>
                                                              <Parent>
                                                                <Parent>
                                                                  <Parent>
                                                                    <Parent>
                                                                      <Parent>
                                                                        <Parent>
                                                                          <Parent>
                                                                            <Parent>
                                                                              <Parent>
                                                                                <Parent>
                                                                                  <Parent>
                                                                                    <Parent>
                                                                                      <Buttons />
                                                                                    </Parent>
                                                                                  </Parent>
                                                                                </Parent>
                                                                              </Parent>
                                                                            </Parent>
                                                                          </Parent>
                                                                        </Parent>
                                                                      </Parent>
                                                                    </Parent>
                                                                  </Parent>
                                                                </Parent>
                                                              </Parent>
                                                            </Parent>
                                                          </Parent>
                                                        </Parent>
                                                      </Parent>
                                                    </Parent>
                                                  </Parent>
                                                </Parent>
                                              </Parent>
                                            </Parent>
                                          </Parent>
                                        </Parent>
                                      </Parent>
                                    </Parent>
                                  </Parent>
                                </Parent>
                              </Parent>
                            </Parent>
                          </Parent>
                        </Parent>
                      </Parent>
                    </Parent>
                  </Parent>
                </Parent>
              </Parent>
            </Parent>
          </Parent>
        </Parent>
      </Parent>
    </Parent>
  );
};

export default App;
