import { AngularQuickstartPage } from './app.po';

describe('angular-quickstart App', () => {
  let page: AngularQuickstartPage;

  beforeEach(() => {
    page = new AngularQuickstartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
