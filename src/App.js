import { useState } from "react";

const App = () => {
  const [data, setData] = useState({ name: "", age: "", grade: "" });
  const [formData, setFormdata] = useState([]);  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata([...formData, data]);   
    setData({ name: "", age: "", grade: "" });  
  };

  const handleRemove = (index) => {
    const updated = formData.filter((_, i) => i !== index);
    setFormdata(updated);
  };

  return (
    <div>
      <h1>Student Entry Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <input
          type="number"
          placeholder="age"
          value={data.age}
          onChange={(e) => setData({ ...data, age: e.target.value })}
        />

        <select
          value={data.grade}
          onChange={(e) => setData({ ...data, grade: e.target.value })}
        >
          <option value="">Select Grade</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>

        <button type="submit">Add</button>
      </form>

      <div>
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
                <td>{item.grade}</td>
                <td>
                  <button onClick={() => handleRemove(index)}>remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
