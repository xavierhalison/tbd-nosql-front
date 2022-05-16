import { useQuery } from "react-query";
import { getSystemInformation } from "../services/system";

const useSystemQuery = (field) =>
  useQuery(["system", field], () => getSystemInformation(field), {
    refetchInterval: 10000,
  });

export default useSystemQuery;
