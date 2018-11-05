
/* IMPORT */

import isString = require ( 'lodash/isString' );
import isFunction = require ( 'lodash/isFunction' );
import * as React from 'react';

/* REACT RENDER COMPONENT */

//TODO: Add some tests

function reactRenderComponent ( type: Function | string | null, props?: object, ...children ) {
  return isString ( type ) || isFunction ( type ) ? React.createElement ( type as any, props, ...children ) : type;
}

/* EXPORT */

export default reactRenderComponent;
