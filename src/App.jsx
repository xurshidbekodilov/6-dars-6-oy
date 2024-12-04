import React, { useState } from "react";
import "./App.css";

export default function App() {
  // State holatlari
  const [shape, setShape] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedFruits, setSelectedFruits] = useState([]);
  const [color, setColor] = useState("");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(null);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Funksiyalar
  const handleShape = (e) => {
    const value = parseInt(e.target.value);
    if (value === 3) setShape("Uchburchak");
    else if (value === 4) setShape("To'rtburchak");
    else if (value === 5) setShape("Beshburchak");
    else setShape("Bunday shakl mavjud emas");
  };

  const handleCheckbox = (fruit) => {
    setSelectedFruits((prev) =>
      prev.includes(fruit)
        ? prev.filter((item) => item !== fruit)
        : [...prev, fruit]
    );
  };

  const handleEmailValidation = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(value.includes("@") && value.includes(".com"));
  };

  const swapInputs = () => {
    const temp = input1;
    setInput1(input2);
    setInput2(temp);
  };

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="form-section">
        {/* 1. Shaklni aniqlash */}
        <div>
          <h3>Shaklni aniqlash</h3>
          <input
            type="number"
            placeholder="Raqam kiriting"
            onChange={handleShape}
          />
          <p>{shape}</p>
        </div>

        {/* 2. Parol tekshirish */}
        <div>
          <h3>Parol tekshirish</h3>
          <input
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Parolni tasdiqlash"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p>
            {password && confirmPassword
              ? password === confirmPassword
                ? "Parol mos keldi"
                : "Parol mos kelmadi"
              : ""}
          </p>
        </div>

        {/* 3. Checkbox ro'yxat */}
        <div>
          <h3>Checkbox bilan ro'yxat</h3>
          {["Olma", "Banan", "Apelsin"].map((fruit) => (
            <label key={fruit}>
              <input
                type="checkbox"
                onChange={() => handleCheckbox(fruit)}
                checked={selectedFruits.includes(fruit)}
              />
              {fruit}
            </label>
          ))}
          <p>Tanlangan: {selectedFruits.join(", ")}</p>
        </div>

        {/* 4. Rangni o'zgartirish */}
        <div>
          <h3>Rangni o'zgartirish</h3>
          {[
            { name: "Qizil", value: "red" },
            { name: "Yashil", value: "green" },
            { name: "Ko'k", value: "blue" },
          ].map((clr) => (
            <label key={clr.value}>
              <input
                type="radio"
                name="color"
                value={clr.value}
                onChange={(e) => setColor(e.target.value)}
              />
              {clr.name}
            </label>
          ))}
          <div
            className="color-box"
            style={{ backgroundColor: color || "white" }}
          ></div>
        </div>

        {/* 5. Email tekshirish */}
        <div>
          <h3>Email tekshirish</h3>
          <input
            type="email"
            placeholder="Email kiriting"
            value={email}
            onChange={handleEmailValidation}
          />
          <p>
            {emailValid === null
              ? ""
              : emailValid
              ? "Email to'g'ri"
              : "Email noto'g'ri formatda"}
          </p>
        </div>

        {/* 6. Qiymatlarni almashtirish */}
        <div>
          <h3>Qiymatlarni almashtirish</h3>
          <input
            type="text"
            placeholder="Birinchi input"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
          <input
            type="text"
            placeholder="Ikkinchi input"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
          <button onClick={swapInputs}>Qiymatlarni almashtirish</button>
        </div>

        {/* 7. To-do ro'yxat */}
        <div>
          <h3>To-do ro'yxat</h3>
          <input
            type="text"
            placeholder="Vazifa kiriting"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>Qo'shish</button>
          <ul>
            {tasks.map((t, index) => (
              <li key={index}>
                {t}{" "}
                <button onClick={() => deleteTask(index)}>O'chirish</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
