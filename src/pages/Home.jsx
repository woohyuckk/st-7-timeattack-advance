import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos} from "../api/todos";

export default function Home() {
  // TODO: 필수: useQuery 로 리팩터링 하세요.
  // TODO: 선택: useQuery 로 리팩터링 후, 커스텀훅 useTodosQuery 로 정리해 보세요.


  const {data, isLoading, error} = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos
  })
  
  console.log(data)
  if(isLoading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <>
      <h2>서버통신 투두리스트 by useState</h2>
      <TodoForm fetchData={data} />
      <TodoList todos={data} />
    </>
  );
}
