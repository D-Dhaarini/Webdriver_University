import { Page, Locator, expect } from '@playwright/test';

export class DropdownCheckboxRadioPage {
    readonly page: Page;

    // Dropdown
    readonly programmingLanguageDropdown: Locator;

    // Checkboxes
    readonly checkboxes: Locator;

    // Radio Buttons
    readonly radioButtons: Locator;

    // Selected & Disabled Elements
    readonly cabbageRadio: Locator;
    readonly pumpkinRadio: Locator;
    readonly fruitDropdown: Locator;

    constructor(page: Page) {
        this.page = page;

        this.programmingLanguageDropdown = page.locator('#dropdowm-menu-1');

        this.checkboxes = page.locator(
            'input[type="checkbox"]'
        );

        this.radioButtons = page.locator(
            'input[type="radio"][name="color"]'
        );

        this.cabbageRadio = page.locator('input[value="cabbage"]');
        this.pumpkinRadio = page.locator('input[value="pumpkin"]');
        this.fruitDropdown = page.locator('#fruit-selects');
    }

    async navigate() {
        await this.page.goto(
            'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html'
        );
        console.log('Navigated to Dropdown, Checkbox, and Radio Buttons page');
    }

    // F1
    async selectPythonDropdown() {
        await this.programmingLanguageDropdown.selectOption('python');

        await expect(this.programmingLanguageDropdown).toHaveValue(
            'python'
        );
        console.log('The value of the dropdown is: ' + (await this.programmingLanguageDropdown.inputValue()));
    }

    // F2
    async verifyDefaultCheckboxes() {
        const count = await this.checkboxes.count();

        for (let i = 0; i < count; i++) {
            const checkbox = this.checkboxes.nth(i);

            if (await checkbox.isChecked()) {
                console.log(`Default selected checkbox is Checkbox ${i + 1}`);
            }
        }

        await expect(this.checkboxes.nth(2)).toBeChecked();
    }

    // F3
    async selectAllCheckboxes() {
        const count = await this.checkboxes.count();

        for (let i = 0; i < count; i++) {
            const checkbox = this.checkboxes.nth(i);

            if (!(await checkbox.isChecked())) {
                await checkbox.check();
            }
            if (await checkbox.isChecked()) {
                console.log(`Selected checkbox is Checkbox ${i + 1}`);
            }

            await expect(checkbox).toBeChecked();
        }
    }

    // F4
    async verifyAllRadioButtons() {
        const count = await this.radioButtons.count();

        for (let i = 0; i < count; i++) {
            const radio = this.radioButtons.nth(i);

            await radio.check();
            console.log("Selected radio button is: " + (await radio.getAttribute('value')));

            await expect(radio).toBeChecked();

            for (let j = 0; j < count; j++) {
                if (i !== j) {
                    await expect(this.radioButtons.nth(j)).not.toBeChecked();
                }
            }
        }
    }

    // F5
    async verifySelectedAndDisabledSection() {
        await expect(this.cabbageRadio).toBeDisabled();

        await expect(this.pumpkinRadio).toBeChecked();
        console.log("Selected radio button is: " + (await this.pumpkinRadio.getAttribute('value')));
    

        const orangeOption = this.page.locator(
            '#fruit-selects option[value="orange"]'
        );

        await expect(orangeOption).toBeDisabled();
    }
}