import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../api/todos";



export const useTodoMutation = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryclient.invalidateQueries("[todos]");
    },
  });
}