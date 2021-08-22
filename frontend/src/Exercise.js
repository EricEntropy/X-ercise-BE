class Exercise{ 
    constructor(id, name, weight, reps, muscle_group, workout_id){
        this.id = id;
        this.name = name;
        this.weight = weight; 
        this.reps = reps; 
        this.muscle_group = muscle_group;
        this.workout_id = workout_id;
    }

    renderExerciseName(){
        const p = document.createElement('p');
        const deleteButton = document.createElement('button'); 

        p.innerText = this.name;

        deleteButton.classList.add('delete-btn');
        deleteButton.innerText = 'X';

        deleteButton.addEventListener('click', () =>{
            console.log(this, "clicked");
        });

        p.appendChild(deleteButton);
        return p;
    };

    renderExerciseInfo(){
        const setData = document.createElement('div');
        setData.innerHTML = `
        <p>Weight: ${this.weight}</p>
        <p>Repetitions: ${this.reps}</p>
        <p>Muscle Group: ${this.muscle_group}</p>
        `;
        return setData;
    };

    renderNewExerciseForm(){
        const newForm = document.createElement('div');
        newForm.classList.add('edit-form');

        newForm.innerHTML = `
        <style>
        label {
            width: 120px;
            display: inline-block;
            text-align: right;
        }
        </style>
        <b>New Set</b>
        <br>
        <label for="name">Name:</label>
        <input type="text" name="name" id="name"/>
        <br>
        <label for="weight">Weight:</label>
        <input type="text" name="weight" id="weight"/>
        <br>
        <label for="reps">Reps:</label>
        <input type="text" name="reps" id="reps"/>
        <br>
        <label for="muscle_group">Muscle Group:</label>
        <input type="text" name="muscle_group" id="muscle_group"/>
        <p>
            <button type="submit" id="create-set">Create Set</button>
        </p>
        `;
        return newForm;
    };

    renderNewSet(newSet, containerCard){
        const newForm = newSet.renderNewExerciseForm();
        containerCard.appendChild(newForm);
        const createBtn = newForm.querySelector('button')

        createBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(this, "CREATE SET clicked");
            this.populateSetfromInput(newSet, containerCard)
            console.log(newSet);
            newForm.remove();
        });
    }

    populateSetfromInput(newSet, containerCard){
        const nameInput = containerCard.querySelector('#name');
        const weightInput = containerCard.querySelector('#weight');
        const repsInput = containerCard.querySelector('#reps');
        const muscle_groupInput = containerCard.querySelector('#muscle_group');

        if(nameInput.length != 0){
            newSet.name = nameInput.value;
            newSet.weight = weightInput.value;
            newSet.reps = repsInput.value;
            newSet.muscle_group = muscle_groupInput.value;
        }

        return newSet;
    }
}