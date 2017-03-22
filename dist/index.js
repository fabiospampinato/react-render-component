/* IMPORT */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var React = require("react");
/* REACT RENDER COMPONENT */
//TODO: Add some tests
function reactRenderComponent(type, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    return _.isString(type) || _.isFunction(type) ? React.createElement.apply(React, [type, props].concat(children)) : type;
}
/* EXPORT */
exports.default = reactRenderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsWUFBWTs7O0FBRVosMEJBQTRCO0FBQzVCLDZCQUErQjtBQUUvQiw0QkFBNEI7QUFFNUIsc0JBQXNCO0FBRXRCLDhCQUFnQyxJQUE4QixFQUFFLEtBQWM7SUFBRSxrQkFBVztTQUFYLFVBQVcsRUFBWCxxQkFBVyxFQUFYLElBQVc7UUFBWCxpQ0FBVzs7SUFDekYsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUcsSUFBSSxDQUFFLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBRyxJQUFJLENBQUUsR0FBRyxLQUFLLENBQUMsYUFBYSxPQUFuQixLQUFLLEdBQWlCLElBQVcsRUFBRSxLQUFLLFNBQUssUUFBUSxLQUFLLElBQUksQ0FBQztBQUN2SCxDQUFDO0FBRUQsWUFBWTtBQUVaLGtCQUFlLG9CQUFvQixDQUFDIn0=