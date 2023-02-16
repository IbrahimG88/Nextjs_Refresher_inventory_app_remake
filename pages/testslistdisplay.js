import getTestsListSWR from "./getTestsListSWR";
import { useEffect, useState } from "react";

import TestsListContext from "@/components/testsListContext";
import { useContext } from "react";

export default function TestsListDisplay() {
  const context = useContext(TestsListContext);

  return <h1>{console.log(context.data)}</h1>;
  /*return (
    <div>
      <ul>
        {context.data.map((test) => (
          <li key={test.profile_id}>
            id: {test.profile_id}; test Name: {test.report_name}{" "}
          </li>
        ))}
      </ul>
    </div>
  );*/
}

/*
export default function Avatar() {
  const { data, error } = getTestsListSWR();

  if (!data) return "Loading";
  if (error) return "Error";

  return (
    <div>
      <ul>
        {context.data.map((test) => (
          <li key={test.profile_id}>
            id: {test.profile_id}; test Name: {test.report_name}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

//not working

// current question: how to store data locally after downloading it or fetching data
*/
