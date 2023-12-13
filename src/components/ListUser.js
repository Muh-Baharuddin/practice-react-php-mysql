import { useState } from "react";

export default function ListUser() {

  const [input, setInput] = useState({})
  
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(input)
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({
      ...values, 
      [name]: value}))
  }

  return (
    <div>
      <h1>List Users</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing={"10"}>
          <tbody>
            <tr>
              <th>
                <label>Name: </label>
              </th>
              <td>
                <input type="text" name="name" onChange={handleChange}/>
              </td>
            </tr>
            <tr>
              <th>
                <label label>Email: </label>
              </th>
              <td>
                <input type="email" name="email" onChange={handleChange}/>
              </td>
            </tr>

            <tr>
              <th>
                <label>Mobile: </label>
              </th>
              <td>
                <input type="number" name="mobile" onChange={handleChange}/>
              </td>
            </tr>

            <tr>
              <td colSpan={2} align="right">
                <button>Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}