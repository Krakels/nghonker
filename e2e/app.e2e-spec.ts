import { Nghonker1Page } from './app.po';

describe('nghonker1 App', () => {
  let page: Nghonker1Page;

  beforeEach(() => {
    page = new Nghonker1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
