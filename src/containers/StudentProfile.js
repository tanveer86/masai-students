import React from 'react';
import {connect} from 'react-redux';

function StudentProfile(props){

    if(!props.student) {
        return(
            <h1>Select the student above</h1>
        )
    }

    return(
        <React.Fragment>
            <img src={props.student.image} width="200"/>
            <h2>Name: {props.student.name}</h2>
            <p>Masai Id: {props.student.sp}</p>
            <a href={props.student.gitURL}>Git Profile Link</a>
        </React.Fragment>

    )
}

function mapStateToProps(state) {
    return{
        student: state.selectedStudent
    }
}

export default connect(mapStateToProps)(StudentProfile)