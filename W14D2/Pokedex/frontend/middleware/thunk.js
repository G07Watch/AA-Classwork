
export const thunk = ({dispatch, getState}) => next => action => {
  debugger;
    if (typeof action === "function"){
        // debugger
        return action(dispatch, getState);
    } else {
        return next(action);
    };
};


