import React from "react";

function FAQItem({ question, answer }) {
    return (
        <div style={{
            borderBottom: "1px solid #ccc",
            padding: "12px"
        }}>
            <h3>{question}</h3>
            <p>{answer}</p>
        </div>
    );
}

function App() {
    const questions = [
        {
            id: 1,
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces."
        },
        {
            id: 2,
            question: "What is JSX?",
            answer: "JSX allows us to write HTML-like syntax inside JavaScript."
        },
        {
            id: 3,
            question: "What are Props?",
            answer: "Props are used to pass data from one component to another."
        },
        {
            id: 4,
            question: "What is a Component?",
            answer: "A component is a reusable piece of a React user interface."
        }
    ];

    return (
        <div>
            <h1>Frequently Asked Questions</h1>

            {questions.map(item => (
                <FAQItem
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                />
            ))}
        </div>
    );
}

export default App;