# create-react-file

Use comman line to create component or something else

## Installation

```sh
npm install -g https://github.com/shreyam1008/create-react-file/tarball/master
```

note: npm install <package> doesnt seem to be working. have to do a "-global -g" install .

## Execution

```sh
$ create-react-file Component
```

Create folder `./Component` and file `Component.jsx`, `index.js`, `Component.css`.

#### Component.jsx

```jsx
import React from 'react';
import './${componentName}.css'

const ${componentName} = () =>
  return (
    <div className="${moduleName}">

    this is ${componentName} component

      <h1> this is ${componentName} component </h1>
    </div>
  );
});

export default ${componentName};
```

#### Component.scss

```css
. ${componentName} {

}
```

#### index.js

```js
import "./Component.css";
import Component from "./Component";

export default Component;
```

## Help

```sh
$ create-react-file --help
  Usage: create-react-file [options] <name> [parentName]

  Options:
    -f, --function  create function component
```

## Simply command-line

Little tip with [oh my zsh](http://ohmyz.sh).
Changing `.zshrc` like this makes the tool be more convenient.

```
alias cf="create-react-file"
alias cfp="create-react-file -p"
```

Original Repo.
https://github.com/xiaoshuangLi/create-react-file
Forked from the repo to make a custom use..
