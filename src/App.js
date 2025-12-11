import { useState } from "react";

const App = () => {
  const [data, setData] = useState({ name: "", age: "", grade: "" });
  const [formData, setFormdata] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.name || !data.age || !data.grade) return;

    setFormdata([...formData, data]);
    setData({ name: "", age: "", grade: "" });
  };

  const handleClear = () => {
    setData({ name: "", age: "", grade: "" });
  };

  const handleRemove = (index) => {
    const updated = formData.filter((_, i) => i !== index);
    setFormdata(updated);
  };

  return (
    <div>
      <h1>Student Entry Form</h1>
      <p>Add students and review the list below.</p>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          type="text"
          placeholder="e.g. MS Dhoni"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <label>Age</label>
        <input
          name="age"
          type="number"
          placeholder="e.g. 14"
          value={data.age}
          onChange={(e) => setData({ ...data, age: e.target.value })}
        />

        <label>Grade</label>
        <select
          name="grade"
          value={data.grade}
          onChange={(e) => setData({ ...data, grade: e.target.value })}
        >
          <option value="">Select grade</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>

        <button type="submit">Add Student</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>

      {formData.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {formData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{`Class ${item.grade}`}</td>
                <td>
                  <button onClick={() => handleRemove(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
