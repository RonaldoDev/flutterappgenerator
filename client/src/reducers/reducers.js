import { ADD_COMPONENT, UPDATE_COMPONENTS, SELECT_COMPONENT, EDIT_COMPONENT, SELECT_TAB, ADD_VIEW, SAVE_VIEWS } from "./actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
  components: ['textField', 'button', 'checkBox', 'appbar', 'select'],
  componentsRender: [],
  views: [{ id: 0, title: "view0", components: [], selectedComponent: {}}],
  currentTab: { id: 0, title: "view0", components: [], selectedComponent: {}}
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
        componentsRender: [...state.componentsRender, content], 
        currentTab: { ...state.currentTab, components: [...state.componentsRender, content]}
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
    default:
      return state;
  }

}
