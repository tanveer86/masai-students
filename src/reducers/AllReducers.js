import {combineReducers} from 'redux';
import StudentReducers from './StudentsReducers';
import SelectedStudentReducers from './SelectStudentReducers';

const AllReducers = combineReducers({
    students: StudentReducers,
    selectedStudent: SelectedStudentReducers
})

export default AllReducers;