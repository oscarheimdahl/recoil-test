import { useRecoilState } from 'recoil';
import { colorMode } from '../store/recoil';

interface ShowerProps {}

const Buttons = ({}: ShowerProps) => {
  const [mode, setMode] = useRecoilState(colorMode);

  const changeMode = () => {
    if (mode === 'HSL') setMode('RGB');
    if (mode === 'RGB') setMode('HSL');
  };

  return (
    <div className='button-row'>
      <button onClick={changeMode}>{mode}</button>
    </div>
  );
};

export default Buttons;
