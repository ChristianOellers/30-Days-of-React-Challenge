// @flow

/**
 * Generate random hex color as text.
 */
const randomHexColor = (): string => {
  const str: string = '0123456789abcdef';
  let color: string = '';

  for (let i: number = 0; i < 6; i += 1) {
    const index: number = Math.floor(Math.random() * str.length);
    color += str[index];
  }

  return `#${color}`;
};

export default randomHexColor;
