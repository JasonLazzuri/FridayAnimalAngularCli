import { ZooAppPage } from './app.po';

describe('zoo-app App', () => {
  let page: ZooAppPage;

  beforeEach(() => {
    page = new ZooAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
