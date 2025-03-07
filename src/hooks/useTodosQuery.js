import { useQuery } from "@tanstack/react-query"
import { fetchTodos } from "../api/todos"



export const useTodosQuery = () => {
 return useQuery({
  queryKey: ["todos"],
  queryFn: fetchTodos
}) 
}