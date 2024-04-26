import { useState } from 'react';

function CreateExercise() {
  const [formData, setFormData] = useState({
    username: '',
    description: '',
    duration: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation code here

    try {
      //create an exercise
      const response = await fetch('http://localhost:5000/exercises/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Exercise added successfully');

        // Reset the form input fields
        e.target.reset();
        
        // Redirect the user to a new page
        window.location.href = '/';
      } else {
        const data = await response.json();
        console.error('Error:', data);
      }



    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4" style={{ backgroundColor: 'black', padding: '20px', borderRadius: '10px', width:'50%'}}>
      <br/>
      <h1>Create an Exercise</h1>

      <div className="mb-3">
        <label htmlFor="username" className="form-label" style={{color: 'white'}} >Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="form-control"
          style={{ backgroundColor: 'transparent', color: 'white', borderRadius: '5px' }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label" style={{color: 'white'}} >Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="form-control"
          style={{ backgroundColor: 'transparent', color: 'white', borderRadius: '5px' }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="duration" className="form-label" style={{color: 'white'}} >Duration (in minutes):</label>
        <input
          type="number"
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="form-control"
          style={{ backgroundColor: 'transparent', color: 'white', borderRadius: '5px' }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="date" className="form-label"style={{color: 'white'}} >Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="form-control"
          style={{ backgroundColor: 'transparent', color: 'white', borderRadius: '5px' }}
        />
      </div>

      <button type="submit" className="btn btn-success" style={{marginLeft:'38%', width:'120px'}}>Submit</button>
    </form>

  );
}

export default CreateExercise;
