import { useState } from "react";

// 1. TextUpdater Component
function TextUpdater() {
    const [text, setText] = useState("");
    return (
        <div className="p-4">
            <input
                type="text"
                className="border p-2 rounded w-full"
                placeholder="Type something..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p className="mt-2">You typed: {text}</p>
        </div>
    );
}

// 2. Form Component
function InputForm() {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted value:", inputValue);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <input
                type="text"
                className="border p-2 rounded w-full mb-2"
                placeholder="Enter text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    );
}

// 3. UserCard Component
function UserCard({ name, email }) {
    return (
        <div className="border p-4 rounded-lg shadow-lg bg-white w-80">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-600">{email}</p>
        </div>
    );
}

// 4. Button Component
function CustomButton() {
    const handleClick = () => {
        console.log("Button clicked!");
    };
    return (
        <button
            onClick={handleClick}
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
            Click Me
        </button>
    );
}

// 5. LoginForm Component
function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email}\nPassword: ${password}`);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="p-4 w-80 mx-auto border rounded-lg shadow-lg"
        >
            <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded w-full mb-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="border p-2 rounded w-full mb-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
            >
                Login
            </button>
        </form>
    );
}

export default function App() {
    return (
        <div className="flex flex-col items-center space-y-4 p-4">
            <TextUpdater />
            <InputForm />
            <UserCard name="John Doe" email="john.doe@example.com" />
            <CustomButton />
            <LoginForm />
        </div>
    );
}
