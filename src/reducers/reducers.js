import { ADD_COMPONENT, UPDATE_COMPONENTS } from "./actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
  components: ['text', 'button', 'check', 'appbar', 'select'],
  componentsRender: [],
  views: [{ id: 0, title: "Primeira", components: []}]
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
        componentsRender: [...state.componentsRender, content]
      };
    };
    case UPDATE_COMPONENTS: {
      const { content } = action.payload;
      return {
        ...state,
        componentsRender: [...content]
      };
    }
    default:
      return state;
  }
}
