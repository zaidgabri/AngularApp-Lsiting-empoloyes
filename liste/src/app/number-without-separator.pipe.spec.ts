import { NumberWithoutSeparatorPipe } from './number-without-separator.pipe';

describe('NumberWithoutSeparatorPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberWithoutSeparatorPipe();
    expect(pipe).toBeTruthy();
  });
});
