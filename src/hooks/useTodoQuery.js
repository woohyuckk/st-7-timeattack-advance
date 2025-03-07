import { useQuery } from "@tanstack/react-query"
import { fetchDetailTodo } from "../api/todos"
import { useParams } from "react-router-dom"



//  한꺼번에 묶어서 객체로 반환 or 따로따로 useQuery로 반환 어느것이 좋을까요
export const useTodoQuery = () => {
  const { id } = useParams();
  
  return useQuery({
    queryKey: ["todos", id],
    queryFn: ()=> fetchDetailTodo(id)
  }) 
}