import React from "react";

export default function BarChart() {
    let myMap = new Map()


    const [list, setList] = React.useState([]);
    const [activityList, setActivityList] = React.useState();


    function fetchData() {
        fetch('https://customerrest.herokuapp.com/gettrainings')
            .then(response => response.json())
            .then(responseData => {
                setList(responseData);
            })
    }


    React.useEffect(() => {
        fetchData();

    }, []);

    calculateTimeOfActivitys();

    function calculateTimeOfActivitys() {
        console.log("CALCULATE")
        for (let i = 0; i < list.length; i++) {
            if (!myMap.has(list[i].activity)) {
                myMap.set(list[i].activity, list[i].duration)
            } else {
                myMap.set(list[i].activity, myMap.get(list[i].activity) + list[i].duration)
            }
        }
            console.log(Array.from(myMap))
        let array = Array.from(myMap);
        console.log(array)



        let objectArray = [{
            activity: '',
            duration:''
        }]


        console.log(objectArray)

    }


    return (
        <div>


        </div>
    )
}