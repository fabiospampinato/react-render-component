# React Render Component

Tiny wrapper around React.createElement with support for dumb components and null.

## Install

```shell
$ npm install --save react-render-component
```

## Usage

```jsx
import * as React from 'react';
import renderComponent from 'react-render-component';

renderComponent ( null ); // Not supported by React.createElement
renderComponent ( <div>I'm dumb</div> ); // Not supported by React.createElement
renderComponent ( 'a', { href: '#' }, 'link' );
renderComponent ( () => <div>Stateless</div> );
renderComponent ( class extends React.Component {
  render () {
    return <div>Class</div>
  }
});
```

## License

MIT © Fabio Spampinato
