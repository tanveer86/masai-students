import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectStudent} from '../actions/AllActions';

function StudentList(props){
        
        let showStudents = props.allStudents.map(eachStudent => {
            return(
                <li key={eachStudent.sp} onClick={()=> props.selectStudent(eachStudent)}>{eachStudent.name}</li>
            )
        })

        return(
            <React.Fragment>
                <ol>
                    {showStudents}
                </ol>
            </React.Fragment>
        )
    
}

function mapStateToProps(state){
    return{
        allStudents: state.students
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        selectStudent: selectStudent
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList)