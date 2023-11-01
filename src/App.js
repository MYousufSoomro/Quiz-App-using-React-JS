import { useState } from "react";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  const questionData = [
    //QUESTIONS ARRAY
    {
      question: "What is the Full Form Of HTML",
      options: [
        "HyperText Makeup Language",
        "HyperText Markup Language",
        "HyperText Markup Lame",
        "HyperTate Markup Language",
      ],
      answer: "HyperText Markup Language",
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      answer: "a",
      options: ["link", "href", "a", "hyperlink"],
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      answer: "br",
      options: ["break", "lb", "newline", "br"],
    },
    {
      question:
        "Which attribute is used to specify an image's alternative text in HTML?",
      answer: "alt",
      options: ["title", "src", "alt", "description"],
    },
    {
      question: "What does CSS stand for in web development?",
      answer: "Cascading Style Sheets",
      options: [
        "Computer Style Sheets",
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Custom Style Sheets",
      ],
    },
    {
      question:
        "Which HTML element is used to define the structure of a web page?",
      answer: "DOCTYPE",
      options: ["html", "body", "header", "DOCTYPE"],
    },
    {
      question:
        "What is the purpose of the <head> element in an HTML document?",
      answer: "To provide metadata and link to external resources",
      options: [
        "To define the main content of the page",
        "To create a navigation menu",
        "To provide metadata and link to external resources",
        "To display the page footer",
      ],
    },
    {
      question: "Which HTML tag is used to create an ordered list?",
      answer: "ol",
      options: ["ul", "li", "orderlist", "ol"],
    },
    {
      question: "What is the correct HTML element for defining important text?",
      answer: "strong",
      options: ["bold", "important", "emphasis", "strong"],
    },
    {
      question: "In HTML, which tag is used to define a table row?",
      answer: "tr",
      options: ["table", "row", "td", "tr"],
    },
    {
      question: "What is the purpose of the HTML <meta> tag?",
      answer: "To provide metadata about the document",
      options: [
        "To create links to other web pages",
        "To define the page title",
        "To provide metadata about the document",
        "To style text and elements",
      ],
    },
    {
      question: "What does PHP stands for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      question: "What does SQL stands for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      question: "What year was JavaScript launched?",
      answer: "1995",
      options: ["1996", "1995", "1994", "None of the Above"],
    },
    {
      question: "Which tag is used for inserting the largest heading in HTML?",
      answer: "h1",
      options: ["h2", "h3", "h1", "h4"],
    },

    {
      question: "Which HTML element is used to create an unordered list?",
      answer: "ul",
      options: ["ol", "li", "ul", "dl"],
    },
    {
      question: "What does the <a> tag in HTML stand for?",
      answer: "Anchor",
      options: ["Access", "Attach", "Anchor", "Action"],
    },
    {
      question: "Which HTML tag is used to define an image?",
      answer: "img",
      options: ["img", "image", "picture", "src"],
    },
    {
      question: "What is the purpose of the HTML 'div'  element?",
      answer: "Grouping and styling content",
      options: [
        "Creating hyperlinks",
        "Defining headings",
        "Grouping and styling content",
        "Adding images",
      ],
    },
  ];

  const checkAnswer = (e) => {
    if (e === questionData[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questionData.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setIsStarted(false);
      setIsFinished(true);
    }
  };

  const restart = () => {
    setIsFinished(false);
    setIsStarted(false);
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <div>
      <h1 className="title">QUIZ APP using REACT JS</h1>
      {isStarted && !isFinished && (
        <div className="container">
          <h2 className="py-10">
            Question {currentQuestion + 1} / {questionData.length}
          </h2>
          <hr />
          <div className="py-10">
            <h2>{questionData[currentQuestion].question}</h2>
          </div>
          <div className="options-div">
            {questionData[currentQuestion].options.map((el, i) => {
              return (
                <button
                  className="options-btn"
                  key={i}
                  onClick={() => checkAnswer(el)}
                >
                  {el}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {!isStarted && !isFinished && (
        <div className="start-div">
          <button className="start-btn" onClick={() => setIsStarted(true)}>
            Start
          </button>
        </div>
      )}

      {isFinished && !isStarted && (
        <div>
          <h2 className="start-div">Your score: {score}</h2>
          <div className="start-div">
            <button className="start-btn" onClick={restart}>
              Retake
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
