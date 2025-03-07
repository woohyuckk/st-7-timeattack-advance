import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useTodosQuery } from "../hooks/useTodosQuery";

export default function Home() {
  // TODO: 필수: useQuery 로 리팩터링 하세요.
  // TODO: 선택: useQuery 로 리팩터링 후, 커스텀훅 useTodosQuery 로 정리해 보세요.


  const { data, isLoading, error } = useTodosQuery();
  
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
