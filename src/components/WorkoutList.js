import React from "react";
import PropTypes from "prop-types";
import WorkoutModel from "../model/WorkoutModel";

const WorkoutList = ({workout, onEdit, onDelete}) => {

    const handleEdit = (evt, date) => {
        evt.preventDefault();
        onEdit(date);
    };

    const handleDelete = (evt, date) => {
        evt.preventDefault();
        onDelete(date);
    };

    return (
        <div className="workout-list">
            <div className="header">
                <div className="header-date">Дата (ДД.ММ.ГГГГ)</div>
                <div className="header-distance">Пройдено км</div>
                <div className="header-actions">Действия</div>
            </div>
            <div className="list">
                {workout.map((item) => (
                    <div className="workout" key={item.date}>
                        <div className="workout-date">{item.date}</div>
                        <div className="workout-distance">{item.distance}</div>
                        <div className="workout-actions">
                            <a href="#/" onClick={(evt) => handleEdit(evt, item.date)}>
                                <span className="material-icons">edit</span>
                            </a>
                            <a href="#/" onClick={(evt) => handleDelete(evt, item.date)}>
                                <span className="material-icons">delete</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

WorkoutList.propTypes = {
    workout: PropTypes.arrayOf(PropTypes.instanceOf(WorkoutModel)).isRequired,
    onDelete: PropTypes.func.isRequired
};

export default WorkoutList;