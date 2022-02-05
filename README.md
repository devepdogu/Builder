# Builder
- This is a factory pattern for react.js and next.js
- Create or use easly component in json files
- Fill the data from api
- Use the variable inside the fetching data and configure prefix variable
- Configure error messages
- [Online Demo](https://builder-app-seven.vercel.app/)
 

## Getting Started

We need the *html-react-parser* package 

```bash
npm install html-react-parser
```

- After installing package throw builder folder into the your project
- Then call the Builder into *builder/index.js* give data with data props 

```react.js
<Builder data={data}></Builder>
```
      
import into the *builder/data/example.json* file if you want the example json file

```react.js
import data from '../builder/data/example.json'
```

# JSON
- Json file must be start with **components** property and **components** chaing!
  -  ```json
     {
      "components": [
      ]
     }
     ```
- Inside components must be **componentName** property 
  -  *builder/layouts/**componentName**.js* if this file exist use or create named of *componentName* component

## Predefined Structures
## text
- Add text into created or used component

```json 
"componentName": "p",
"text": "Example this text"
```
Output in HTML
```html 
<p>Example this text</p>
```

## props
- Add props *created*  component
  - *Not* used component
- Be careful giving the data format cause react.js may raise error

```json 
"componentName": "section",
"text": "Example this section",
"props": {
  "className": "sectionClass",
  "x":5,
  "y":10
}
```
Output in HTML
```html 
<section class="sectionClass" x="5" y="10" >Example this section</section>
```


## fetch
Get api data and load the data into component

If the componentName exist into *builder/layouts/* folder add the component props with **items** and use api data

- ## url
## Exist Component
```json 
"componentName": "container",
"fetch": {
  "url": "https://jsonplaceholder.typicode.com/users/"
}
```
Output in HTML
```html 
<div class="p-3">This page have a fetch data page here<code class="d-block">layouts/container.js</code><span class="d-block bg-primary p-2 text-white">Found 0 item</span></div>
```
## Not Exist Component
- These propertys will be active (**each**,**component**)
- ## each
     - This property determine how to the result in html
     - Use '**>**' char into the add new element
     - *"each": "li > a > span"* this command give this html
     - ```html
          <li>
            <a>
              <span></span>
            </a>
          </li>
       ```
     - Each tags could be props  between *[]* chars 
     - Props need this type [key:value,key2:value] **value must not string**
     - "each": "p[className:ps,x:5,author:dogu] > a[className:aTag]" this command give this html
     - ```html
          <p class="ps" x="5" author="dogu">
            <a class="aTag">
            </a>
          </p>
       ```
     - If you need the counter use between props and inside value **$_i** tag
     - "each": "p[className:ps,counter:$_i] > span[data-counter:$_i]" this command give this html
     - ```html
          <p class="ps" data-counter="0">
            <span class="0">
            </span>
          </p>
          <p class="ps" data-counter="1">
            <span class="1">
            </span>
          </p>
       ```
- ## text
  - This property add value into last element
  - Catch into api data with object property key *$_'Object Key'*
  - Support html tags
  - ```json
          "fetch": {
                "url": "https://jsonplaceholder.typicode.com/users/",
                "each": "p[className=p,counter:$_i] > span",
                "text": "<b>$_name</b>"
            }
       ```
  - ```html
          <p class="p" counter="0">
            <span>
              <b>Leanne Graham</b>
            </span>
          </p>
          <p class="p" counter="1">
            <span>
              <b>Ervin Howell</b>
            </span>
          </p>
          ...
       ```
## component
- If the component exists under the layout folder, it adds it as props in the item name.
