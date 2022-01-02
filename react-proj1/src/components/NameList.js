import React from "react";
import Person from "./Person";

export default function NameList() {
  const personArr = [
    { id: 1, name: "Vishal", age: 31 },
    { id: 2, name: "Sunil", age: 32 },
    { id: 3, name: "Jignesh", age: 33 },
  ];
  const personList = personArr.map((person) => (
    <Person key={person.id} person={Person}></Person>
  ));

  const nameArr = ["Vishal", "Sunil", "Jignesh"];
  const nameList = nameArr.map((name, index) => (
    <h2 key={index}>
      {index + 1} {name}
    </h2>
  ));

  return (
    <div>
      <div>{personList}</div>
      <div>{nameList}</div>
    </div>
  );
}
