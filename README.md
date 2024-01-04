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
elements | {[key: TListItem] : NewElement} | Changes the set element with a custom element. Similar to the as="" prop in other packages | undefined

For any Input, the common props are
|Prop | Type | Required(Y/N) |Description |
|---|---|---| ---|
| name | string | yes | Input Name. It becomes the submitted outputs key for the value. can be dot notated `line.data.first` for nested inputs |
| id | string | no | Id for the input| 
|defaultValue | T | no | A default value injector for the input. |
|disabled | boolean | no | To disable or enable an input|
|customClasses | { wrapperClassName?: string,labelClassName?: string,inputClassName?: string | undefined} | no | Custom ClassNames for the input wrapping elements |
|style | React.CSSProperties | no | Custom CSS Properties for the `InputElemWrapper`|
| label | string | no | Input Label. |
|reversedLabel | boolean | no  | If the label positioning needs to be reversed|
| helperText | string | no | To show a popup or some text to aid users in inputting data|
|placeholder | string | no | Shows a placeholder for inputs |
| noBorder | boolean | no | Removes borders on InputWrapper |
|noLabel | boolean | no | To disabled the label from showing (Usually used in lists) |
| buttons | { wrapper ?: {left ?: JSX.Element, right ?: JSX.Element, all ?: JSX.Element},left ?: {label: React.ReactNode, onClick: (value: T) => void, customButton ?: JSX.Element}[],right ?: {label: React.ReactNode, onClick: (value: T) => void, customButton ?: JSX.Element}[],} | no | If Provided, will render Any number of buttons on the left or right side of the input. Buttons have an onClick which outputs the current input value. The buttons on either side are wrapped in a flex div, but the wrapper can be changed using the wrapper prop, provide a `wrapper.left`,`wrapper.right` for either side, or a `wrapper.all` for both sides. `wrapper.all` supplants either so take note. the buttons also have a customButton prop which allows for other Buttons to be used. The buttons will receive a name and value prop, corresponding to that of the input. |
| inputWrapper | no |ComponentType<FormFrameWrapperProps> | A Custom wrapper for positioning the input, labels, and helper/error texts. Useful when wanting to change the input style |
|calculatedField | {isPromise ?: boolean, find ?: string[], calculate: (currentValue:T, currentName: string, foundFields: any[], allFields: any) => T \| Promise<T>} | no| Calculated fields allow automated filling up of the field based on some other value, for example, cost = unit price x quantity. the `find` argument is the other fields to watch for, and the calculation can return the value (if `isPromise` is undefined or false), or a Promise (if `isPromise` is true) if asynchronous calculations are needed (API Calls etc). |
|externalStateSetter | (a:T) => void | no | Useful if you need to extract the value from the input while not within the context of the <Form> element. |
| onInputChange | (inputValue:T, inputName: string, allValues: any, formMethods : useFormMethods ) => void | no | Helpful event handler that fires a function when your input changes. It ignores the first render (to prevent inputs that go from undefined -> null triggering the function). Any subsequent render is handled as usual. formMethods is an escape hatch for the methods of the react-hook-forms `useForm`, easier access for those that need to handle setting / getting form values programmatically.|
elements | ReactElement | Changes the set element with a custom element. Similar to the as="" prop in other packages | undefined

## Types of Input

### Text

#### Line
The Line element are simply text inputs, using the `input` element as its root, so HTML5 validation using the type attribute still works natively; eg: <Line type="email" {...props} /> validates as an email.

```jsx
 <Line name="some_input" label="Some Label" />
```

#### Lines 
Lines are just textarea inputs, so at its core its just a `textarea` element

```jsx
 <Lines name="some_input" label="Some Label" />
```

#### WYSIWYGEditor (Working but in development)
A WYSIWYG editor, powered by QuillJS. When the form is submitted you'll get the HTML as a plaintext string in the form object

```jsx
  <WYSIWYGEditor name="some_input" label="Some Label" />
```

### DatePicker
A Datepicker powered by react-datepicker. Can use all props of react-datepicker as usual, just include them under the option prop; ie 

```jsx
  <DatePicker name="some_input" label="Some Label" options={/*react-datepicker  props*/} />
```

### Uploaders
Currently two uploaders are available, a dashboard centered image uploader using Uppy, and a drag n drop system using react-dropzone. For Uppy, an endpoint is necessary, while for dropzone, it holds the File objects for submission at the end or for processing

#### Dropzone

The Dropzone uploader allows for the Uploading of multiple files, with a preview available for PDF / image / text / doc  files

Use case :
```jsx
  <DropzoneUploader label="Example Uploader" name="uploader" />
```

#### Uppy Uploader

```jsx
  <UppyDashboardUploader label="Example Uppy" name="uppy" endpoint="api.test.com/photos">
```

### List

There are three types of lists available, Basic List, Template Lists, and Table Lists

#### Basic List <FormList />
A Basic List is generated using Bootstrap Row and Col elements. Just add the list of items via the item prop and you're good to go
```jsx
  <FormList 
    items ={[
      {name: 'list_item_1', type:'text', label: 'List Item 1 Label' },
      {name: 'list_item_2', type:'number', label: 'List Item 2 Label' },
      {name: 'list_item_3', type:'datepicker', label: 'List Item 3 Label' },
      {name: 'list_item_4', label: 'List Item 4 Label' },
      /*Each object element is just the props you'd normally add to the Inputs as if they were standard elements (<Line {...props} />) etc*/
    ]}
    showIndex /* This shows 1,2,3.... before each row of inputs*/
    fixed /*If true list items cannot be added or removed. Suitable if editing a list injected with defaultValues*/
  />
```

#### Template List <FormList />
Using the same method as the Basic List, you can also add in a template via the bodyTemplate prop. The template can be constructed via standard DOM or React elements, and add the prop "data-name" to link an element (a div would suffice) to an input (set via the `items` props). To add an index, just add the data-index props and the index will be injected as a child of the element. For Adding or Removing rows, use `data-add` and `data-remove` respectively. Two props are injected into these elements, one is the `onClick` handler that would handle adding/removing the rows. Another prop given is `isEnd` prop, if true means the list cannot handle further clicks. You may use this to style the prop accordingly (active/disabled etc)

#### TableList <TableList />

Tablelist operates the same as <FormList />, with the exception that the inputs are generated as a table Element. a `headerTemplate` and `footerTemplate` prop is available to generate your own Header / Footer for the Table.

```jsx
  <TableList 
    items ={[
        {name: 'list_item_1', type:'text', label: 'List Item 1 Label' },
        {name: 'list_item_2', type:'number', label: 'List Item 2 Label' },
        {name: 'list_item_3', type:'datepicker', label: 'List Item 3 Label' },
        {name: 'list_item_4', label: 'List Item 4 Label' },
        /*Each object element is just the props you'd normally add to the Inputs as if they were standard elements (<Line {...props} />) etc*/
      ]}
    // headerTemplate / footerTemplates go into the <thead> and <tfoot> components respectively (if added)
    headerTemplate={<tr>
      <th></th>        
      <th>Item1</th>
      <th>Item2</th>
      <th>Item3</th>
      <th>Item4</th>
      <th></th>
    </tr>}
  />
```

#### InputListToTable <InputListToTable /> (New!)

Following similar props to <TableList />, this allows you to use a standard Form which after filling up, you may "Submit" via the (Add Row) button to fill up a table. The data given in the table is a summary of the inputs, so object data will usually be represented by their `label` or `value` key. Suitable if a form like structure better fits the data but batch filling is needed. 


### Select
Powered by React-Select, most options that `react-select` gives are preserved by adding the `rsOptions` prop.

To change a select into a creatable select, just add the `isCreatable` prop. If its boolean (ie, true) then it will add a new object as {value:  x, label: x}. If its a function you will be able to asynchronously add the new entry in instead (perfect if you want to add the entry to DB first)

#### Non-Asynchronous (Normal Select)

```jsx
  <Select 
    name="select_name"
    label="Select Label"
    options={[{value:1,label:'Option 1'}]} 
    isCreatable /*If added makes the input creatable*/
  />
```

#### Asynchronous

There is two methods to load options for asynchronous react-select calls, that is using `allLoad` or `loadOptions`. Note that `loadOptions` is required and thus some function should be included anyhow

|Prop | Type | Description |
|---|---|---|
|loadOptions | (selectInput: string, callback: (A:TSelectOption)[] => void ) | Loads options using a callback |
|allLoad | (selectInput:string, name: string, allValues: any, callback: (A:TSelectOption)[] => void ) | LoadOptions but with the current input name and all other values of the form. Useful if the input name cannot be determined beforehand (dynamic calls or list inputs) |

```jsx

  const handleLoadOption = (input:string, name: string, allValues: any, callback: (A:TSelectOption)[] => void ) => {
    apiCall('test.com/getOptions', {inputString: input, name: name}).then((response) => {
      if (response.status) {
        callback(response.options)
      }
    })
  } 

  <AsyncSelect
    name="async_test"
    label="Example Async Input"
    loadOptions={(a,b) => (b([]))} /* If all Loads is used some function still 
                                      must be passed here. If allLoad is present
                                      this function is then ignored*/
    allLoad={handleLoadOption}
  />
```

### Checkboxes
To use checkboxes, similar to native use include a name prop and value prop.

### Radioboxes
Ditto on the Radiobox

### Range
Range inputs allow for handling a range of values (number usually) with a slider UI. Uses the `react-range-slider-input` library

The prop `sliderOptions` may be used as standard props of the `react-range-slider-input` library

```jsx
 <Slider name="test_slider" label="Test slider" min={1} max={10} steps={2}/>
```

### Custom Elements
To add a custom element plug-and-play style, simply add it to the elements prop of the `<Form>` element. You may use either InputChooser or replacing existing elements. You may use the interface `CustomElementBaseInput` on your element for to aid in setting the props

#### Replacing existing elements

```jsx

  const App = () => {

    return <Form 
    elements={{
      line: CustomElement
    }}
  >
    <Line {...props} />
  </Form>

  }

  // CustomElementBaseInput Interface outputs the methods of react-hook-form, 
  // as well as value, error, and an onchange that is specific to the input name
  const CustomElement = (props : CustomElementBaseInput) => {
    return <SomeNewInputElement 
      name={props.name}
      value={props.value}
      onChange={(a) => props.onChange(a)} /*NOTE. Give the onchange here a value and not an event!*/
    />
  }
```

#### InputChooser

```jsx

  const App = () => {

    return <Form 
      elements={{
        custom1: CustomElem1,
        custom2: CustomElem2
      }}
    >
    <InputChooser {...propsforCustomElem1} type="custom1" /* The type here corresponds with the key of the element in the Forms elements props*/ />
    <InputChooser {...propsforCustomElem2} type="custom2" />
  </Form>

  }
```

## Planned Upgrades

Currently more inputs are being planned out, including; 
- [X]  1. Switches
- [ ]  2. Color-pickers
- [X]  3. Number Lines
- [ ]  4. Conversion Inputs (height / weight / etc)
- [ ]  5. Persist options
- [X]  6. Listed inputs (Add remove lines of inputs) *Basic lists done*


## Updates

1. 22 / 06 / 2023 - Added the onInputChange prop. For those using the calculatedField a minor breaking change will happen, now the 2nd argument is `current_name` representing the name of the input your calculated_field was called in. The foundFields and allFields are pushed further in.

## Changelog

1. 2.5.1 - Issue noticed with InputListToTable, where it renders with edit mode already on. Fixed and now edit works except with WYSIWYG Editor, which does not clear upon adding a new entry. Will be looked at further
2. 2.5.2 - Moved most value catches to a hook. Hook currently used internally but may be used externally, just make sure you are still within the confines of the <Form> context. The hook is called `useInputValAndError`, and it accepts one argument, which is  the input name. It provides the value and error for the said input, as well as all the useform methods. 
An improvement somewhat made is that for InputListToTable, the input forms can be now validated before a new row is generated, but please keep in mind since we're using yup to add a clause to ignore validation if the fields are empty, as the form will still validate it together with the entire form on submission. Will work towards fixing this in the future.
3. 2.5.3 - Sometimes InputListToTable has an error due to a undefined / null value. A guard added to prevent that

## Final words

This library uses storybookjs to test components and for examples. The code should be with the github page so feel free to try it out on your own. If there are any issues please reach out via github and I'll be happy to look into it. This library was made mostly for my convenience but its great if it's able to help out with other projects.