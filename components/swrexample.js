import useSWR from "swr";

export function useFetchData() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
