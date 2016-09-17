import { LolifiedPage } from './app.po';

describe('lolified App', function() {
  let page: LolifiedPage;

  beforeEach(() => {
    page = new LolifiedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
