import dateText from './date-text';

it('shows date as text', () => {
  const fn = dateText(new Date());
  const match = expect.stringMatching(/^Date:/);

  expect(fn).toEqual(match);
});
