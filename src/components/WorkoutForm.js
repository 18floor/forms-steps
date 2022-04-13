import React from "react";
import PropTypes from "prop-types";
import WorkoutModel from "../model/WorkoutModel";

const WorkoutForm = ({form, onSave, onChange}) => {

    const handleSave = (evt) => {
        evt.preventDefault();
        const workout = new WorkoutModel(form.date, parseFloat(form.distance));
        onSave(workout);
    };
    const handleChange = ({target}) => {
        const {name, value} = target;
        onChange(name, value);
    };

    return (
        <form onSubmit={handleSave}>
            <div className="workout-form">
                <div className="workout-form-item">
                    <label className="workout-form-label">Дата (ДД.ММ.ГГГГ)</label>
                    <input className="workout-form-input" type="text" name="date" value={form.date}
                           onChange={handleChange}/>
                </div>
                <div className="workout-form-item">
                    <label className="workout-form-label">Пройдено км</label>
                    <input className="workout-form-input" type="text" name="distance" value={form.distance}
                           onChange={handleChange}/>
                </div>
                <div className="workout-form-item">
                    <button className="workout-form-button" type="submit">OK</button>
                </div>
            </div>
        </form>
    );
};

WorkoutForm.typeProps = {
    form: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default WorkoutForm;