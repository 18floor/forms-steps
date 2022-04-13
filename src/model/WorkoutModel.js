class WorkoutModel {
    constructor(date, distance) {
        this.date = date;
        this.distance = distance;
    }

    get dateForSort() {
        const [day, month, year] = this.date.split('.');
        return `${year}-${month}-${day}`;
    }
}

export default WorkoutModel;

