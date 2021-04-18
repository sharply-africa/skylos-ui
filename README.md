# Skylos UI

Skylos UI provides a set of accessible, reusable, and composable React components for skylos web apps.

## Installing Skylos UI

To use Skylos UI components, all you need to do is install the skylos-ui package and its peer dependencies:

```
$ yarn add https://github.com/skyeops/skylos-ui @emotion/react @emotion/styled react-toastify

# or

$ npm i https://github.com/skyeops/skylos-ui @emotion/react @emotion/styled react-toastify
```

## Usage

To start using the components, please follow these steps:

1. Wrap your application with the `SkylosProvider` provided by
   **skylos-ui**.

```jsx
import { SkylosProvider } from "skylos-ui";

// Do this at the root of your application
function App({ children }) {
  return <SkylosProvider>{children}</SkylosProvider>;
}
```

2. Now you can start using components like so!:

```jsx
import { Button } from "skylos-ui";

function Example() {
  return <Button>Click me</Button>;
}
```
