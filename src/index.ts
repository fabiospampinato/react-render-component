
/* IMPORT */

import * as _ from 'lodash';
import * as React from 'react';

/* REACT RENDER COMPONENT */

//TODO: Add some tests

function reactRenderComponent ( type: Function | string | null, props?: object, ...children ) {
  return _.isString ( type ) || _.isFunction ( type ) ? React.createElement ( type as any, props, ...children ) : type;
}

/* EXPORT */

export default reactRenderComponent;
