
const workoutAPI = new WorkoutServices("http://localhost:3000/workouts");
const exerciseAPI = new ExerciseServices("http://localhost:3000/exercise_sets");
const workoutForm = document.getElementById('workout-form');


document.addEventListener('DOMContentLoaded', () => {
    workoutAPI.getWorkouts();
    exerciseAPI.getExercises();
});

workoutForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    workoutAPI.postWorkout();
});

