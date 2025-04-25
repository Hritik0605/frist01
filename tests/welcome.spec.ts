import {test,expect} from '@playwright/test'

import {Welcome} from '/home/my/Desktop/makemytrip/pages/welcome.ts'
import { DatePicker } from '../pages/helper';

test.describe('Login Page tests',()=>{
    let welcome:Welcome;
    let datePicker:DatePicker;

    test.beforeEach (async ({page})=>{
        welcome = new Welcome(page);
        datePicker = new DatePicker(page);
        await welcome.navigation();
    });
    test('here i am testing',async () =>{
        await welcome.pause();
        
        await welcome.loginCross();
       // await welcome.mouse();
        await welcome.selectRandomFromCity();
        
        await welcome.selectRandomToCity();
        await datePicker.selectDateByAriaLabel('Fri Apr 25 2025');
        //await welcome.selectRandomDepartureDate();
        
       // await welcome.searchButton();
       await welcome.offerText();
       await welcome.mouse();
       await welcome.footerview();
       await welcome.hovermover();
        await welcome.pause();
        console.log("this is a properly run");
console.log("this is a properly run2"):

        
        

    })
})
