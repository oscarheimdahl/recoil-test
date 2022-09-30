import { atom, selector } from 'recoil';

export const colorMode = atom<'RGB' | 'HSL'>({
  key: 'colorMode',
  default: 'HSL',
});

export const backgroundColorVal1 = atom({
  key: 'backgroundColorVal1',
  default: 25,
});

export const backgroundColorVal2 = atom({
  key: 'backgroundColorVal2',
  default: 223,
});

export const backgroundColorVal3 = atom({
  key: 'backgroundColorVal3',
  default: 167,
});

export const backgroundColorStyle = selector({
  key: 'backgroundColorStyle',
  get: ({ get }) => {
    const c1 = get(backgroundColorVal1);
    const c2 = get(backgroundColorVal2);
    const c3 = get(backgroundColorVal3);
    const mode = get(colorMode);

    let background;
    if (mode === 'RGB') background = toRGB(c1, c2, c3);
    if (mode === 'HSL') background = toHSL(c1, c2, c3);

    return { background };
  },
});

const toRGB = (c1: number, c2: number, c3: number) => {
  return `rgb(${c1}, ${c2}, ${c3})`;
};

const toHSL = (c1: number, c2: number, c3: number) => {
  const toPercent = (n: number) => ((n / 255) * 100).toFixed(2);
  const h = c1;
  const s = toPercent(c2);
  const l = toPercent(c3);
  return `hsl(${h}, ${s}%, ${l}%)`;
};
