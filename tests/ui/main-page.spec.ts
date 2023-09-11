import { test } from '@playwright/test'

test.describe('Ui test suite', () => {

    test.only('Verify user can enter new data into the table', async ({ page }) => {
        
        page.goto('https://demoqa.com/')
        page.pause()

    })
    
})
