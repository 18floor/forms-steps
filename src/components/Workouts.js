import React, {useState} from "react";
import WorkoutForm from "./WorkoutForm";
import WorkoutList from "./WorkoutList";
import WorkoutModel from "../model/WorkoutModel";

const Workouts = () => {

    const [workouts, setWorkouts] = useState([
        new WorkoutModel('10.04.2022', 9.9),
        new WorkoutModel('11.04.2022', 8.8),
        new WorkoutModel('12.04.2022', 7.9),
        new WorkoutModel('13.04.2022', 10.1),
        new WorkoutModel('14.04.2022', 9.0),
    ]);

    const [form, setForm] = useState({
        date: '',
        distance: '',
    });

    const [editeDate, setEditeDate] = useState('');

    const handleChange = (name, value) => {
        setForm((prevForm) => ({...prevForm, [name]: value}));
    };

    const handleDelete = (date) => {
        setWorkouts((prevWorkouts) =>
            prevWorkouts.filter((item) => item.date !== date)
        )
    };

    const handleEdit = (date) => {
        const workout = workouts.find((item) => item.date === date);
        if (workout) {
            setForm({
                date: workout.date,
                distance: workout.distance
            });
            setEditeDate(date);
        }
    };

    const handleSave = (workout) => {
        setWorkouts((prevWorkouts) => {
            if (editeDate) {
                const editeIndex = prevWorkouts.findIndex((item) => item.date === editeDate);
                const index = prevWorkouts.findIndex((item) => item.date === workout.date);
                const newWorkouts = [...prevWorkouts];

                if (editeIndex === index) {
                    newWorkouts[index] = workout;
                } else {
                    newWorkouts[index] = workout;
                    newWorkouts.splice(editeIndex, 1);
                }
                return newWorkouts;
            } else {
                const index = prevWorkouts.findIndex((item) => item.date === workout.date);

                if (index === -1) {
                    return [...prevWorkouts, workout];
                } else {
                    const newDistance = prevWorkouts[index].distance + workout.distance;
                    const newWorkouts = [...prevWorkouts];
                    newWorkouts[index] = new WorkoutModel(workout.date, newDistance);
                    return newWorkouts;
                }
            }
        })

        setForm({
            date: '',
            distance: '',
        })

        setEditeDate('');
    };

    const sorted = workouts.sort((a, b) =>
        b.dateForSort.localeCompare(a.dateForSort)
    );

    return (
        <div className="workouts">
            <WorkoutForm form={form} onChange={handleChange} onSave={handleSave}/>
            <WorkoutList onDelete={handleDelete} workout={sorted} onEdit={handleEdit}/>
        </div>
    )
};

export default Workouts;