# component no 1 :
A basic Input for texbox that accepts alphanumeric values (v0.5)
#usage
<BasicInput
        name="myInput"
        type="text"
        placeholder="Enter text here..."
        inputValue={inputValue}
        onChange={handleChange}
        minLength={3}
        maxLength={20}
        size={30}
      />
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


