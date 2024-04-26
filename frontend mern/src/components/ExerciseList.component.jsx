import { useState, useEffect } from 'react';

function ExerciseList() {
  // State to manage the list of exercises
  const [exerciseList, setExerciseList] = useState([]);

  useEffect(() => {
    // Fetch the list of exercises when the component mounts
    onDisplayList();
  }, []); // Empty dependency array ensures the effect runs only once when mounted

  const onDisplayList = async () => {
    try {
      // Get list of exercises
      const response = await fetch('http://localhost:5000/exercises/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const text = await response.text();
      console.log('Response Text:', text);

      if (response.ok) {
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
          const fetchedExerciseList = await response.json();
          console.log('Exercise List:', fetchedExerciseList);

          // Set the fetched exercises into the state
          setExerciseList(fetchedExerciseList);
        } else {
          console.error('Unexpected response format:', text);
        }
      } else {
        console.error('Error:', text);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h1>A List of Exercises in the application</h1>
      <ul>
        {exerciseList.map((exercise) => (
          <li key={exercise._id}>{exercise.name}</li>
          // Assuming your exercise objects have a unique identifier (e.g., _id) and a 'name' property
        ))}
      </ul>
    </div>
  );
}

export default ExerciseList;
/*In this example:

I added the useState hook to manage the state of the exercise list in the ExerciseList component.
The useEffect hook is used to call the onDisplayList function when the component mounts ([] as the dependency array makes it run once when mounted).
The fetched exercise list is stored in the state using setExerciseList.
The component renders an unordered list (ul) with list items (li) for each exercise in the list. Adjust the rendering based on the structure of your exercise objects.*/




