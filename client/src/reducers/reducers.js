import { 
  ADD_COMPONENT,
  UPDATE_COMPONENTS,
  SELECT_COMPONENT,
  EDIT_COMPONENT,
  SELECT_TAB,
  ADD_VIEW, 
  SAVE_VIEWS,
  FETCH_VIEWS,
  CHANGE_THEME
} from "./actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
  compId: 0,
  components: ['textField', 'button', 'checkBox', 'appbar', 'select'],
  componentsRender: [],
  views: [{ id: 0, title: "view0",   componentId: 0, components: [], selectedComponent: {}}],
  currentTab: { id: 0, title: "view0",   componentId: 0, components: [], selectedComponent: {}},
  theme: {
    typography: {
      useNextVariants: true,
      fontSize: 14
    },
    palette: {
      primary: {
        light: '#757ce8',
        main: '#009be5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    }
  }

};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_COMPONENT: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,        
            completed: false
          }
        },
        compId: ++state.compId, 
        componentsRender: [...state.componentsRender, content], 
        currentTab: { ...state.currentTab,  componentId : content.id, components: [...state.componentsRender, content]}
      };
    };
    case UPDATE_COMPONENTS: {
      const { content } = action.payload;
      return {
        ...state,
        componentsRender: [...content],
        currentTab: { ...state.currentTab, components: [...content]}
      };
    }
    case SELECT_COMPONENT: {
      const { content } = action.payload;
      return {
        ...state,
        currentTab: {...state.currentTab, selectedComponent: content}
      };
    }
    case EDIT_COMPONENT: {
      const { content } = action.payload;
      return {
        ...state,
        currentTab: {...state.currentTab, selectedComponent: content}
      };
    }
    case SELECT_TAB: {
      const { content } = action.payload;
      return {
        ...state,
        currentTab: content
      };
    }
    case ADD_VIEW: {
      const { content } = action.payload;
      return {
        ...state,
        views: [...state.views, content]
      };
    }
    case SAVE_VIEWS: {
      const { content } = action.payload;
      return {
        ...state,
        views: [...content]
      };
    }
    case FETCH_VIEWS: {
      const content = action.payload;
      return {
        ...state,
        compId: content.compId,
        views: content.views,
        theme: { ...content.theme },
        currentTab: { ...content.views[0]}
      };
    }
    case CHANGE_THEME: {
      const { content } = action.payload;
      return {
        ...state,
        theme: {
          ...state.theme,
          ...content
        }
      }
    }
    default:
      return state;
  }

}
