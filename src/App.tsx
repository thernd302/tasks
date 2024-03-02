import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Thern Diallo
            </header>
            <h1>Welcome to my site</h1>
            <body>Hello World</body>
            <img src="../images/Kyrie.jpeg" alt="The Goat" />
            <ol>
                <li>Lebron James</li>
                <li>Michael Jordan</li>
                <li>Kobe Bryant</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div className="rectangle"></div>
                    </Col>
                    <Col>
                        <div>Pretend there is a red rectangle</div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
