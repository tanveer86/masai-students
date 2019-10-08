export default (state = null, action) => {
    // console.log(action)
    switch(action.type) {
        case "STUDENT_SELECTED":
            return action.students;
            break;
    }
    return state;
}