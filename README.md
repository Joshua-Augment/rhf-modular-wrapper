# rhf-modular-wrapper
A Wrapper for React-Hook-Form using Contextes, allowing for extremely simple Form building, even with deeply nested form types

The main purpose for the development of this plugin was to create a easy to set up, plug and play system for Form development, while still allowing some degree of customization in terms of form styling

This readme will be updated further as we go along, as this is my first time writing documentation on Github, but most of the elements are for the most part self-explanatory, and the storybook page shows common usecases (Coming soon). 

## Types of Input

### Line
The Line element are simply text inputs, using the <input> element as its root, so HTML5 validation using the type attribute still works natively; eg: <Line type="email" {...props} /> validates as an email.

### Lines 
Lines are just textarea inputs, so at its core its just a <textarea> element

### WYSIWYG (Working but in development)
A WYSIWYG editor, powered by Lexical. When the form is submitted you'll get the raw editor object as an output, but it also includes the key "html" for a string HTML representation of the output for convenience

### DatePicker
A Datepicker powered by react-datepicker. Can use all props of react-datepicker as usual, just include them under the option prop; ie <DatePicker options={"react-datepicker props"} />

### Uploaders
Currently two uploaders are available, a dashboard centered image uploader using Uppy, and a drag n drop system using react-dropzone. For Uppy, an endpoint is necessary, while for dropzone, it holds the File objects for submission at the end or for processing

### Checkbox
To use checkboxes, similar to native use include a name prop and value prop.

### Radiobox
Ditto on the Radiobox

## Planned Upgrades

Currently more inputs are being planned out, including; 
  1. Switches
  2. Color-pickers
  3. Number Lines
  4. Conversion Inputs (height / weight / etc)
  5. Persist options
