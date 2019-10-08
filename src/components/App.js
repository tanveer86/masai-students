import React from 'react';
import StudentList from '../containers/StudentList';
import StudentProfile from '../containers/StudentProfile';

function App(){
    return(
        <React.Fragment>
            <StudentList />
            <StudentProfile />
        </React.Fragment>
    )
}

export default App;