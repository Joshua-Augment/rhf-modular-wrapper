# rhf-modular-wrapper
A Wrapper for React-Hook-Form using Contextes, allowing for extremely simple Form building, even with deeply nested form types

The main purpose for the development of this plugin was to create a easy to set up, plug and play system for Form development, while still allowing some degree of customization in terms of form styling

This readme will be updated further as we go along, as this is my first time writing documentation on Github, but most of the elements are for the most part self-explanatory, and the storybook page shows common usecases (Coming soon). 


## Use Case (TLDR)
While each Input has a `contextless` prop  that allows it to be used as a standalone input, most of them work within a ``` <Form> ``` component as shown

```
const onSubmit = (returnObjects: any) => new Promise<any>((resolve, reject) => {})
const defaultValues = {name: 'James'}

<Form onSubmit={onSubmit} defaultValues={defaultValues}>
  {
    ... Inputs
  }
</Form>

```

For inputs, the bare minimum needed is the name prop (label props are not required)

```
<Line name="name" />  // Line is used for default input elements, single lined basic inputs (but can be 
                      // extended with the `type` prop)
```

## Validation
Validation is now provided by the use of a Yup resolver, where the schema should be attached to the <Form> as the prop `yupSchema`. 


More options to come soon

## Props

For the <Form> element the props are
Prop | Type | Use | Default
| --- | --- | --- | ---
mode | 'onBlur','onChange','onSubmit','onTouched','all'| Validation Strategy *before* submission | onSubmit
reValidateMode |  "onChange" , "onBlur" , "onSubmit" | Validation Strategy *after* submission | onChange
defaultValues | any | Partial of the form object schema | unedefined
yupSchema | Resolver<yup> | Yup Schema Resolver | undefined
context | FormContext | Form Context to allow deeply nested or complex form structures | FormContext
criteriaMode | "firstError","all" | Show only First error or all errors for any field | "firstError"
shouldFocusError | boolean | Should focus on the error element | true
shouldUnregister | boolean | Unregisters an input value if the input is removed. If false, inputs value is kept even if the input is removed from DOM | false
shouldUseNativeValidation | boolean | If the native validation should be used instead | false
delayError | number | Delay the error message by x milliseconds | undefined

## Types of Input

### Line
The Line element are simply text inputs, using the <input> element as its root, so HTML5 validation using the type attribute still works natively; eg: <Line type="email" {...props} /> validates as an email.

```
 <Line name="some_input" label="Some Label" />
```

### Lines 
Lines are just textarea inputs, so at its core its just a <textarea> element

```
 <Line name="some_input" label="Some Label" />
```

### WYSIWYGEditor (Working but in development)
A WYSIWYG editor, powered by QuillJS. When the form is submitted you'll get the HTML as a plaintext string in the form object

### DatePicker
A Datepicker powered by react-datepicker. Can use all props of react-datepicker as usual, just include them under the option prop; ie <DatePicker options={"react-datepicker props"} />

### Uploaders
Currently two uploaders are available, a dashboard centered image uploader using Uppy, and a drag n drop system using react-dropzone. For Uppy, an endpoint is necessary, while for dropzone, it holds the File objects for submission at the end or for processing

### Dropzone

The Dropzone uploader allows for the Uploading of multiple files, with a preview available for PDF / image / text / doc  files

Use case :
```
  <DropzoneUploader label="Example Uploader" name="uploader" />
```

### List

There are three types of lists available, Basic List, Template Lists, and Table Lists

#### Basic List <FormList />
A Basic List is generated using Bootstrap Row and Col elements. Just add the list of items via the item prop and you're good to go

#### Template List <FormList />
Using the same method as the Basic List, you can also add in a template via the bodyTemplate prop. The template can be constructed via standard DOM or React elements, and add the prop "data-name" to link an element (a div would suffice) to an input (set via the `items` props). To add an index, just add the data-index props and the index will be injected as a child of the element. For Adding or Removing rows, use `data-add` and `data-remove` respectively. Two props are injected into these elements, one is the `onClick` handler that would handle adding/removing the rows. Another prop given is `isEnd` prop, if true means the list cannot handle further clicks. You may use this to style the prop accordingly (active/disabled etc)

#### TableList <TableList />

Tablelist operates the same as <FormList />, with the exception that the inputs are generated as a table Element. a `headerTemplate` and `footerTemplate` prop is available to generate your own Header / Footer for the Table.

### Checkbox
To use checkboxes, similar to native use include a name prop and value prop.

### Radiobox
Ditto on the Radiobox

## Planned Upgrades

Currently more inputs are being planned out, including; 
- [ ]  1. Switches
- [ ]  2. Color-pickers
- [ ]  3. Number Lines
- [ ]  4. Conversion Inputs (height / weight / etc)
- [ ]  5. Persist options
- [X]  6. Listed inputs (Add remove lines of inputs) *Basic lists done*
