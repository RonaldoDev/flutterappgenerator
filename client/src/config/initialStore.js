
const dataDisplays = ['text'];
const inputs = ['textField', 'checkBox', 'select'];
const buttons = ['button', 'iconButton'];
const resources = ['camera', 'map', 'webview'];

export const componentsList = [
  'data-displays',
  ...dataDisplays,
  'inputs',
  ...inputs,
  'buttons',
  ...buttons,
  'resources',
  ...resources];

export const firstView = {
  id: 0,
  title: "view0",
  appName: "App Example",
  componentId: 0,
  components: [],
  selectedComponent: {}
};

export const theme = {
  typography: {
    useNextVariants: true,
    fontSize: 14,
    color: "#009be5"
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#009be5',
      dark: '#002884',
      contrastText: '#FFFFFF',
      textPrimary: '#FFFFFF'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#FFFFFF',
      textPrimary: '#FFFFFF'
    },
  }
};    