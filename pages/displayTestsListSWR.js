import getTestsListSWR from "./getTestsListSWR";
import { useEffect, useState } from "react";

export default function Avatar() {
  const { data, error } = getTestsListSWR();

  if (!data) return "Loading";
  if (error) return "Error";

  return (
    <div>
      <ul>
        {data.map((test) => (
          <li key={test.profile_id}>
            id: {test.profile_id}; test Name: {test.report_name}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
