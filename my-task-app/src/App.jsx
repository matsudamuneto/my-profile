import { useState, useEffect } from "react";

function App() {
  // 保存済みのタスクがあれば、それを初期値にする
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("tasks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [input, setInput] = useState("");

  // tasks が変わるたびに localStorage へ保存する
  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch {
      // localStorageが使えない環境では無視
    }
  }, [tasks]);

  // タスクを追加する
  const addTask = (event) => {
    event.preventDefault(); // フォーム送信によるページ再読み込みを止める
    const text = input.trim();
    if (text === "") return; // 空文字は追加しない
    setTasks([...tasks, { id: crypto.randomUUID(), text, done: false }]);
    setInput(""); // 入力欄を空に戻す
  };

  // 完了状態を切り替える
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  // タスクを削除する
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <main className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">タスク管理</h1>

      {/* 入力フォーム：ボタンでもEnterでも追加できる */}
      <form onSubmit={addTask} className="flex gap-2 mb-4">
        <input
          className="border rounded px-3 py-2 flex-1"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="新しいタスクを入力..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          追加
        </button>
      </form>

      {/* タスク一覧 */}
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center gap-2 bg-white rounded-lg shadow px-4 py-2"
          >
            {/* 完了チェック用のチェックボックス */}
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
              className="w-4 h-4 cursor-pointer"
            />

            <span
              className={`flex-1 ${task.done ? "line-through text-gray-400" : ""}`}
            >
              {task.text}
            </span>

            <button
              className="text-red-400 hover:text-red-600 text-sm"
              onClick={() => deleteTask(task.id)}
            >
              削除
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="text-center text-gray-400 mt-8">タスクがありません</p>
      )}
    </main>
  );
}

export default App;