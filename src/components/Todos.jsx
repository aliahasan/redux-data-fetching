import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todosAction";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Todos Data</h1>
      {isLoading && (
        <h3 className="text-center text-lg text-gray-500">Loading...</h3>
      )}
      {error && (
        <h3 className="text-center text-lg text-red-500">{error.message}</h3>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {todos &&
          todos.map((todo) => (
            <article key={todo.id}>
              <div className="bg-[#01010C] shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
                <p className="text-xl font-medium">{todo.id}</p>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {todo.title}
                </h2>
                <p className="text-gray-600">{todo.body}</p>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
};

export default Todos;
