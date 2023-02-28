import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function getTestsListSWR() {
  const { data, error } = useSWR(
    "http://197.45.107.206/api2/integration/tests",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

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
