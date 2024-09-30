import React, { useState, useEffect } from 'react';
import './index.css';
import Spinner from './components/Spinner';

function App() {
  const [jokes, setJokes] = useState([]);
  const [newJoke, setNewJoke] = useState('');
  const [newResponse, setNewResponse] = useState('');
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false); // Novo estado para controlar o estado de deleção
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const fetchData = async () => {
      await delay(10000); // Delay de 10 segundos
      const response = await fetch('http://localhost:3100/Jokes');
      const data = await response.json();
      setJokes(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const addJoke = async () => {
    if (jokes.length < 10) {
      const newJokeObj = { joke: newJoke, response: newResponse };
      setLoading(true); // Indica que está carregando
      await delay(2000); // Delay de 2 segundos
      const response = await fetch('http://localhost:3100/Jokes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJokeObj),
      });
      const addedJoke = await response.json();
      setJokes([...jokes, addedJoke]);
      setNewJoke('');
      setNewResponse('');
      setLoading(false); // Finaliza o carregamento
    } else {
      alert('Delete uma piada para adicionar outra!');
    }
  };

  const deleteJoke = async (id) => {
    setDeleting(true); // Indica que está deletando
    await delay(2000); // Delay de 2 segundos
    await fetch(`http://localhost:3100/Jokes/${id}`, {
      method: 'DELETE',
    });
    setJokes(jokes.filter((joke) => joke.id !== id));
    setDeleting(false); // Finaliza a deleção
  };

  const toggleResponse = (id) => {
    setJokes((prevJokes) =>
      prevJokes.map((joke) =>
        joke.id === id ? { ...joke, showResponse: !joke.showResponse } : joke,
      ),
    );
  };

  if (loading || deleting) {
    return <Spinner />;
  }

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
          disabled={loading || deleting} // Desabilita o input durante as requisições
        />
        <input
          type="text"
          value={newResponse}
          onChange={(e) => setNewResponse(e.target.value)}
          placeholder="Digite a resposta"
          className="border py-2 px-10 rounded mr-2"
          disabled={loading || deleting} // Desabilita o input durante as requisições
        />
        <button
          onClick={addJoke}
          className="bg-green-500 text-white p-2 rounded"
          disabled={loading || deleting} // Desabilita o botão durante as requisições
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
                    item.showResponse ? 'bg-blue-500' : 'bg-blue-400'
                  } text-white p-2 rounded`}
                  disabled={loading || deleting}
                >
                  {item.showResponse ? 'Esconder resposta' : 'Ver resposta'}
                </button>
                <button
                  onClick={() => deleteJoke(item.id)}
                  className="btn-delete bg-red-500 text-white p-2 rounded"
                  disabled={loading || deleting}
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
