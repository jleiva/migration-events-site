import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const API_URL =
  "https://knassbani2.execute-api.us-east-2.amazonaws.com/events/";

const useEventListWithSWR = (categoryId) => {
  const { data, error, isLoading } = useSWR(`${API_URL}${categoryId}`, fetcher);

  return {
    data,
    error,
    isLoading,
  };
};

export default useEventListWithSWR;
