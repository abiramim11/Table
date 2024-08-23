import React from 'react';

const Student = () => {
  const data = [
    { name: 'Murugan', age: 50, isMarried: true },
    { name: 'Abirami', age: 20, isMarried: false },
    { name: 'Muneeswari', age: 44, isMarried: true },
  ];

  return (
    <div>
      <h2>Basic Details Table</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Married</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.isMarried ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
