# WebdriverUniversity – Dropdowns, Checkboxes, Radio Buttons

## Application Details

**Application:** WebdriverUniversity – Dropdowns, Checkboxes, Radio Buttons

**URL:** https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html

## Page Class

- DropdownCheckboxRadioPage

## Flows to Automate

### F1: Select "Python" in Dropdown 1
**Steps**
1. Navigate to the page.
2. Select "Python" from Dropdown 1.

**Expected Result**
- Selected value should be "python".

---

### F2: Read Default Checkbox State
**Steps**
1. Navigate to the Checkboxes section.
2. Read all checkbox states.

**Expected Result**
- Option 3 is checked.
- Options 1, 2, and 4 are unchecked.

---

### F3: Tick All Checkboxes
**Steps**
1. Identify all checkboxes.
2. Select unchecked checkboxes.

**Expected Result**
- All 4 checkboxes are checked.

---

### F4: Select Each Colour Radio Button in a Loop
**Steps**
1. Get all colour radio buttons.
2. Iterate through each radio button.
3. Click and validate selection.

**Expected Result**
- Only the clicked radio button is selected.
- Validation is completed for every colour radio button using a loop.

---

### F5: Validate Selected & Disabled Section
**Steps**
1. Navigate to the Selected & Disabled section.
2. Verify radio button states.
3. Verify dropdown option states.

**Expected Result**
- Cabbage radio button is disabled.
- Pumpkin radio button is selected.
- Orange option is disabled in the fruit dropdown.

---

## Assertions

| Flow | Assertion |
|------|-----------|
| F1 | Selected value = "python" |
| F2 | Option 3 checked, others unchecked |
| F3 | All 4 checkboxes checked |
| F4 | Only clicked radio button selected |
| F5 | Cabbage disabled, Pumpkin selected, Orange disabled |

## Expected Outcome

- All 5 test scenarios pass successfully.
- Page Object Model (POM) is implemented.
- Reusable page class: `DropdownCheckboxRadioPage`.
- Radio button validation is performed through iteration instead of separate test cases.
- Assertions validate both functionality and UI state.
