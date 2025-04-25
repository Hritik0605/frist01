import { Page } from '@playwright/test';

export class DatePicker {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Select date using aria-label
  async selectDateByAriaLabel(dateLabel: string) {
    const dateLocator = this.page.locator(`.DayPicker-Day[aria-label="${dateLabel}"]`);
    await dateLocator.waitFor(); // wait until it's visible
    await dateLocator.click();
  }
}
