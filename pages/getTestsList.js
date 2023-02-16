import { useRouter } from "next/router";
import { useState, createContext } from "react";

// This gets called on every request
export async function getServerSideProps() {
  const transformedTestsList = [];

  // Fetch data from external API
  await fetch("http://197.45.107.206/api2/integration/tests")
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
      // to transform an object into an array
      for (const key in data) {
        transformedTestsList.push({
          id: data[key].profile_id,
          testName: data[key].report_name,
        });
      }
    });

  // Pass data to the page via props
  return {
    props: {
      data: transformedTestsList,
    },
  };
}

export default function GetTestsList(props) {
  // const router = useRouter();
  const { data } = props;
  console.log(data);
  // Render data...

  return (
    <div>
      <ul>
        {data.map((test) => (
          <li key={test.id}>
            id: {test.id}; test Name: {test.testName}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
