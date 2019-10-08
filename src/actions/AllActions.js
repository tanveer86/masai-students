export const selectStudent = students => {
    console.log(students.name)
    return {
        type: 'STUDENT_SELECTED',
        students
    }
}