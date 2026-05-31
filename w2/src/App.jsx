import React, { useState } from "react";

const App = () => {
  const [form, setForm] = useState({ name: "", age: "" });

  const runner = (f,v) => {
    setForm({ ...form, [f] : v});

  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    alert("Your name is: " + form.name + " and age is: " + form.age);
    setForm({name:"" , age:""}) // after submit clear the values from the input field  
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={form.name} onChange={(e)=>runner("name",e.target.value)} />
        <input type="text" name="age" value={form.age} onChange={(e)=>runner("age" , e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;