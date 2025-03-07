import axios from "axios";

export const todoApi = axios.create({
  baseURL: "http://localhost:4000",
});




export const fetchTodos = async ( id = "") => {
  try {
    const res = await todoApi.get("/todos",`/${id}`);
    return res.data
  } catch (error) {
    console.error(error)
  }

}

export const fetchDetailTodo = async (id) => {
  try {
    const res = await todoApi.get(`/todos/${id}`)
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export const addTodo = async(todo) => {
  try {
    const res = await todoApi.post('/todos', todo)
    return res.data
  } catch (error) {
    console.error(error)
  }

}

