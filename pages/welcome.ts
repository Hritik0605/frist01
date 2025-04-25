import {Page} from '@playwright/test'
import { DatePicker } from './helper';
export class Welcome{
    // pause() {
    //     throw new Error('Method not implemented.');
    // }
    private page:Page;
   
    constructor(page:Page){
        this.page=page;
    }
    async pause() {
        await this.page.pause();
    }
    async loginCross(){
        await this.page.locator('section').filter({ hasText: 'Personal AccountMyBiz Account' }).locator('span').first().click();
    }
    
  async selectRandomFromCity() {
   
    await this.page.mouse.click(10, 10);

    
    await this.page.getByRole('textbox', { name: 'From DEL, Delhi Airport India' }).click();

   
    await this.page.fill('input[placeholder="From"]', 'm');

   
    await this.page.waitForSelector('.react-autosuggest__suggestions-list > li', {
      timeout: 5000
    });

  
    const suggestions = await this.page.$$('.react-autosuggest__suggestions-list > li');

  
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    await suggestions[randomIndex].click();
  }
  async selectRandomToCity() {
  
    await this.page.mouse.click(10, 10);
  
    
    await this.page.click('input[data-cy="toCity"]');
  
    
    await this.page.fill('input[placeholder="To"]', 'm');
  
    
    await this.page.waitForSelector('.react-autosuggest__suggestions-list > li');
  
   
    const suggestions = await this.page.$$('.react-autosuggest__suggestions-list > li');
  
    
    const randomIndex = Math.floor(Math.random() * suggestions.length);
  
    
    await suggestions[randomIndex].click();
  }
  // async selectRandomDepartureDate() {
   
  //   await this.page.mouse.click(10, 10);
  
   
  //   //await this.page.click('input[data-cy="departure"]');
  //  // await this.page.getByLabel('Departure').click();
  //  await this.page.getByText('Departure', { exact: true });

  
    
  //   //await this.page.waitForSelector('.DayPicker-Day');
  
   
  //   const availableDates = await this.page.$$('');
  
    
  //   const randomIndex = Math.floor(Math.random() * availableDates.length);
  
    
  //   await availableDates[randomIndex].click();
  // }

  // async selectDepartureDate(){
  //   await datePicker.selectDateByAriaLabel('Fri Apr 25 2025');
  // }

  async searchButton(){
    const searching=await this.page.getByText('Search');
    searching.click();
    const text=searching.textContent();
    console.log(text);
    

    
  }
  async offerText(){
    const offerText = await this.page.locator('font[color="#393939"]').textContent();
    console.log(offerText);

  }
  
  
    async navigation(){
        await this.page.goto('https://www.makemytrip.com/');
    }
    async mouse(){
      await this.page.mouse.wheel(0,1000);
    }
    async footerview(){
      await this.page.locator('section').first().scrollIntoViewIfNeeded();
    }
    async hovermover(){
      await this.page.locator('.minContainer').hover();
      await this.page.mouse.wheel(0,1000);
    }

    //async cross(){
     //   await this.page.locator()
   // }
}