"use strict";

const path = require("path");
const common = require(path.resolve(__dirname, "../common"));

const { createComponentName, createClassName, createModuleName } = common;

const hooksCode = `
import {
  useStableRef,
  usePrevious,
  useEventCallback,
  useDebounceCallback,
  useThrottleCallback,
} from './hooks';
`;

//one i am working on
// for normal without hooks or redux
const createFunctionComponent = (opts = {}) => {
  const { componentName = "", moduleName = "", hooks: isHooks = false } = opts;

  return `
import React from 'react';

const ${componentName} = () =>{
  return (
    <div className="${moduleName}">
      <h3> this is ${componentName} component </h3>
    </div>
  );
};

export default ${componentName};
`;
};
const createFunctionPage = (opts = {}) => {
  const {
    name = "",
    className = "",
    componentName = "",
    hooks: isHooks = false,
  } = opts;

  return `
import React, {
  useRef,
  useMemo,
  useState,
  useEffect,
  useReducer,
  useCallback,
  useLayoutEffect,
  useImperativeHandle,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

${isHooks ? hooksCode : "DELETE_LINE"}
${isHooks ? "" : "DELETE_LINE"}
const ${componentName} = React.forwardRef((props = {}, ref) => {
  ${isHooks ? "ref = useStableRef(ref);" : "DELETE_LINE"}
  ${isHooks ? "" : "DELETE_LINE"}
  const { className } = props;

  const cls = classnames({
    '${className}': true,
    [className]: !!className,
  });

  return (
    <div ref={ref} className={cls}>
      ${name}
    </div>
  );
});

${componentName}.propTypes = {};

${componentName}.defaultProps = {};

export default ${componentName};
`;
};

const createClassComponent = (opts = {}) => {
  const {
    name = "",
    className = "",
    componentName = "",
    hooks: isHooks = false,
  } = opts;

  return `
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class ${componentName} extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  render() {
    const { className, children, ...others } = this.props;

    const cls = classnames({
      '${className}': true,
      [className]: !!className,
    });

    return (
      <div className={cls} {...others}>
        { children }
      </div>
    );
  }
}

export default ${componentName};
`;
};

const createClassPage = (opts = {}) => {
  const {
    name = "",
    className = "",
    componentName = "",
    hooks: isHooks = false,
  } = opts;

  return `
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class ${componentName} extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  render() {
    const { className } = this.props;

    const cls = classnames({
      '${className}': true,
      [className]: !!className,
    });

    return (
      <div className={cls}>
        ${name}
      </div>
    );
  }
}

export default ${componentName};
`;
};

const create = (opts = {}) => {
  const { page = false, function: isFunction = false } = opts;

  let fn;

  if (isFunction) {
    fn = page ? createFunctionPage : createFunctionComponent;
  } else {
    fn = page ? createClassPage : createClassComponent;
  }

  return fn(opts);
};

module.exports = (opts) => {
  const componentName = createComponentName(opts);
  const className = createClassName(opts);
  const moduleName = createModuleName(opts);

  const res = Object.assign({ componentName, className, moduleName }, opts);

  return create(res);
};
