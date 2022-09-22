import * as t from "../types";
const main = (
  state = {
    userinfo: {
      name: "guest",
    },
  },
  action
) => {
  switch (action.type) {
    case t.SET_NAME:
      return {
        ...state,
        userinfo: {
          name: action.payload,
        },
      };
    default:
      return { ...state };
  }
};

export default main;
