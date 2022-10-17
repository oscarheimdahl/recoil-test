import { useRecoilState, useRecoilValue } from 'recoil';
import { colorMode, backgroundColorStyle } from '../store/recoil';

interface ShowerProps {}

const Buttons = ({}: ShowerProps) => {
  const [mode, setMode] = useRecoilState(colorMode);
  const style = useRecoilValue(backgroundColorStyle);

  const changeMode = () => {
    if (mode === 'HSL') setMode('RGB');
    if (mode === 'RGB') setMode('HSL');
  };

  return (
    <div className='button-row'>
      <button onClick={changeMode}>{style.background}</button>
    </div>
  );
};

export default Buttons;
