[![NPM](https://nodei.co/npm/react-bootstrap-4-pagination.png?downloads=true)](https://nodei.co/npm/react-bootstrap-4-pagination/)

# react-bootstrap-pagination

**A React component to render and manage Bootstrap 4 pagination quickly and easily.**

Your project must have [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) in order to properly render the component

Check [Live example](https://codesandbox.io/s/react-bootstrap-4-pagination-12efe)

## Installation

Install `react-bootstrap-4-pagination` with [npm](https://www.npmjs.com/):

```
$ npm install react-bootstrap-pagination
```

## Usage

Very easy to use. Just provide props with total amount of things that you want to display on the page.

#### With href

```js
import React from 'react';
import Pagination from 'react-pagination';

let paginationConfig = {
  totalPages: 7,
  currentPage: 3,
  showMax: 5,
  size: "lg",
  threeDots: true,
  prevNext: true,
  href: 'https://example.com/items?page=*', // * will be replaced by the page number
  pageOneHref: 'https://example.com/items'
};

function App() {
  return (
    <div className="App">
      <Pagination {...paginationConfig} />
    </div>
  );
}

export default App;

```

#### With function

```js
import React from 'react';
import Pagination from 'react-pagination';

let paginationConfig = {
  totalPages: 7,
  currentPage: 3,
  showMax: 5,
  size: "lg",
  threeDots: true,
  prevNext: true,
  onClick: function (page) {
     console.log(page);
   }
};

function App() {
  return (
    <div className="App">
      <Pagination {...paginationConfig} />
    </div>
  );
}

export default App;

```



## Params

Name | Type | Default | Description
--- | --- | --- | --- |
`totalPages` | Number |  | **Required.** Total number of pages.
`currentPage` | Number | `1` |  Current page
`showMax` | Number | 5 | Total page items to display excluding navigation blocks (prev, next, first, last pages)
`onClick` | Function | | Page item click handler. Receive pageNumber as arg. If you pass onClick prop, href prop will stop having effect
`size` | String | `md` | Pagination component size. Options: `sm` `lg`
`prevNext` | Boolean | `true` | Set to `false` if you don't want to show next and prev buttons
`prevText` | String | `⟨` | Text of prev page navigation button
`nextText` | String | `⟩` | Text of prev page navigation button
`href` | String | | Href template. Example: `https://example.com/items?page=*&sessionId=Khf3124nfj` * will be replaced by the page item number
`pageOneHref` | String | | Href template for first page. Example: `https://example.com/items?sessionId=Khf3124nfj` if pageOneHref is not set, page one links will have the href template
`threeDots` | Boolean | `false` | Set to `true`if you want to show threeDots items
`activeClass` | String | `active` | Class name of active `<li>` tag
`disabledClass` | String | `disabled` | Class name of the first, previous, next and last `<li>` tags when disabled
`hideDisabled` | Boolean | `false` | Hide navigation buttons (prev, next, first, last) if they are disabled.