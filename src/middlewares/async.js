export default function ({ dispatch }) {
    return next => action => {
        // If not a promise send to next middleware or reducer
        if (!action.payload || !action.payload.then) {
            return next(action);
        }

        action.payload
            .then(response => {
                // Replace payload promise with response
                const newAction = { ...action, payload: response};
                dispatch(newAction);
            });
    }
}