import { useRecoilState } from 'recoil';
import { backgroundColorVal3, backgroundColorVal2, backgroundColorVal1 } from '../store/recoil';

const Inputs = () => {
  const [r, setR] = useRecoilState(backgroundColorVal1);
  const [g, setG] = useRecoilState(backgroundColorVal2);
  const [b, setB] = useRecoilState(backgroundColorVal3);

  return (
    <div className='inputs'>
      <input min={0} max={255} type='number' value={r} onChange={(e) => setR(+e.target.value)} />
      <input min={0} max={255} type='number' value={g} onChange={(e) => setG(+e.target.value)} />
      <input min={0} max={255} type='number' value={b} onChange={(e) => setB(+e.target.value)} />
    </div>
  );
};

export default Inputs;
