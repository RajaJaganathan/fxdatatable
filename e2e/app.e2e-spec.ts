import { FxdatatablePage } from './app.po';

describe('fxdatatable App', () => {
  let page: FxdatatablePage;

  beforeEach(() => {
    page = new FxdatatablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
