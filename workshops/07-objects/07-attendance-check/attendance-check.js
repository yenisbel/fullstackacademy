let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW

function attendanceCheck(dayWeek) {
        let nameStudentOnClass = [];

        for (let i = 0; i < classRoom.length; i++) {
                let objStudent = classRoom[i];
                let studentName = Object.keys(objStudent)[0];
                let attenDaysObj = objStudent[studentName];

                for (let j = 0; j < attenDaysObj.length; j++) {
                        let currentDayObj = attenDaysObj[j];
                        let dayName = Object.keys(currentDayObj)[0];
                        if (dayName === dayWeek && currentDayObj[dayName]){

                                // ...the student was present on that day!
                                nameStudentOnClass.push(studentName);
                        }
                        
                }
                
        }
        return nameStudentOnClass;
}