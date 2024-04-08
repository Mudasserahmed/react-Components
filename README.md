# Basic Input Component :

A basic Input for texbox that accepts alphanumeric values (v0.5)

# usage

`<BasicInput
        name="myInput"
        type="text"
        placeholder="Enter text here..."
        inputValue={inputValue}
        onChange={handleChange}
        minLength={3}
        maxLength={20}
        size={30}
      />`

# Props:

**placeholder**: (String) Placeholder text displayed when the input is empty.  
**minLength**: (Number) Minimum length of the input value.  
**maxLength**: (Number) Maximum length of the input value.  
**label**: (String) Title or label for the input field.  
**type**: (String) Type of the input field (e.g., "text", "password", "email").  
**inputValue**: (String) Value of the input field.  
**name**: (String) Name attribute for the input field.  
**onChange**: (Function) Callback function triggered when the input value changes.  
**size**: (Number) Width of the input field in characters.  
**...props**: Additional props to be passed to Input Component.

# Select Component:
The Select Component is a reusable component that allows users to select an option from a dropdown list. (v0.5)

# usage :

`<SelectComponent
      value={selectedOption}
      onChange={handleChange}
      options={options}
    />`

# Props:

**value**: (required) The currently selected option.  
**onChange**: (required) Function to handle the change event when a new option is selected.  
**options**: (required) An array of objects representing the options to be displayed in the dropdown.  
**...props**: Additional props to be passed to the <select> element.

# Basic CheckBox:

This is a simple React component that generates a basic checkbox with a label and onchange value .(v0.5)

# usage

` <BasicCheckbox
      label="My Checkbox"
      checked={checked}
      onChange={handleChange}
    />`

#  Props:
**checked**: (boolean, required): Indicates whether the checkbox is checked or not.
**onChange**:  (function, required): A callback function that is called whenever the checkbox is clicked.
**label**: (string, required): The label text for the checkbox.
