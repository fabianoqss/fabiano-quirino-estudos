import React, { useState } from "react";
import "./index.css";
import data from "./data";

function App() {
  const [jokes, setJokes] = useState(data);
  const [newJoke, setNewJoke] = useState("");
  const [newResponse, setNewResponse] = useState("");

  const addJoke = () => {
    if (jokes.length < 10) {
      setJokes([
        { id: `${jokes.length + 1}`, joke: newJoke, response: newResponse },
        ...jokes,
      ]);
      setNewJoke("");
      setNewResponse("");
    } else {
      alert("Delete uma piada para adicionar outra!");
    }
  };

  const deleteJoke = (id) => {
    setJokes(jokes.filter((joke) => joke.id !== id));
  };

  const toggleResponse = (id) => {
    setJokes((prevJokes) =>
      prevJokes.map((joke) =>
        joke.id === id ? { ...joke, showResponse: !joke.showResponse } : joke
      )
    );
  };

  return (
    <div className="bg-custom-light-blue min-h-screen m-0 p-20">
      <h1 className="text-gray-800 text-5xl text-center shadow-text pb-20">
        Compass Piadas
      </h1>

      <div className="mb-4">
        <input
          type="text"
          value={newJoke}
          onChange={(e) => setNewJoke(e.target.value)}
          placeholder="Digite sua piada"
          className="border py-2 px-10 rounded mr-2"
        />
        <input
          type="text"
          value={newResponse}
          onChange={(e) => setNewResponse(e.target.value)}
          placeholder="Digite a resposta"
          className="border py-2 px-10 rounded mr-2"
        />
        <button
          onClick={addJoke}
          className="bg-green-500 text-white p-2 rounded"
        >
          Adicionar nova piada
        </button>
      </div>

      <ul>
        {jokes.map((item) => (
          <li key={item.id} className="bg-white rounded-lg mt-2 shadow-md p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span>{item.joke}</span>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => toggleResponse(item.id)}
                  className={`btn-view-response ${
                    item.showResponse ? "bg-blue-500" : "bg-blue-400"
                  } text-white p-2 rounded`}
                >
                  {item.showResponse ? "Esconder resposta" : "Ver resposta"}
                </button>
                <button
                  onClick={() => deleteJoke(item.id)}
                  className="btn-delete bg-red-500 text-white p-2 rounded"
                >
                  Deletar
                </button>
              </div>
            </div>
            {item.showResponse && (
              <p className="mt-2 text-gray-600">{item.response}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
