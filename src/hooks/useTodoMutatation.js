import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todoApi } from "../api/todos";



export const useTodoMutation = () => {

  const queryClient = useQueryClient();

   const {mutate: likeMutation} = useMutation({
    mutationFn: async ({ id, currentLiked }) => {
      await todoApi.patch(`/todos/${id}`, {
        liked: !currentLiked,
      });
    },
    onMutate: async ({ id, currentLiked }) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const previousTodos = queryClient.getQueryData(["todos"]);
      queryClient.setQueryData(["todos"], (old) =>
        old.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              liked: !currentLiked,
            };
          }
          return todo;
        })
      );
      return { previousTodos };
    },
    onError: (err, _, context) => {
      console.error(err);
      queryClient.setQueryData(["todos"], context.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
   });
  
  
  const {mutate: addMutation} = useMutation({
    mutationFn: (newTodo) => todoApi.post("/todos", newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });


  return {likeMutation ,addMutation }
}