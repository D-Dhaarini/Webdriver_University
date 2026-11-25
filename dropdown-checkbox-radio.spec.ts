import { test } from '@playwright/test';
import { DropdownCheckboxRadioPage } from '../pages/DropdownCheckboxRadioPage';

test.describe('Dropdown Checkbox Radio Buttons', () => {

    test.beforeEach(async ({ page }) => {
        const radioPage = new DropdownCheckboxRadioPage(page);
        await radioPage.navigate();
    });

    test('Select Python in Dropdown', async ({ page }) => {
        const radioPage = new DropdownCheckboxRadioPage(page);

        await radioPage.selectPythonDropdown();
    });

    test('Verify Default Checkboxes', async ({ page }) => {
        const radioPage = new DropdownCheckboxRadioPage(page);

        await radioPage.verifyDefaultCheckboxes();
    });

    test(' Tick All Checkboxes', async ({ page }) => {
        const radioPage = new DropdownCheckboxRadioPage(page);

        await radioPage.selectAllCheckboxes();
    });

    test('Verify Radio Buttons Using Loop', async ({ page }) => {
        const radioPage = new DropdownCheckboxRadioPage(page);

        await radioPage.verifyAllRadioButtons();
    });

    test('Verify Selected and Disabled Section', async ({ page }) => {
        const radioPage = new DropdownCheckboxRadioPage(page);

        await radioPage.verifySelectedAndDisabledSection();
    });
    test.afterAll(async () => {
        console.log('All tests are validated for Dropdown, Checkbox, and Radio Buttons page');
        
    });

});
