import { MarketingPage } from './app.po';

describe('marketing App', function() {
  let page: MarketingPage;

  beforeEach(() => {
    page = new MarketingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
