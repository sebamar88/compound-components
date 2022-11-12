import "./App.css";
import Card from "./components/Card";

function App() {
    const cards = [
        {
            title: "Card 1",
            text: "This is card 1",
            image: "https://picsum.photos/300/200",
            footerText: "Footer Text 1",
        },
        {
            title: "Card 2",
            text: "This is card 2",
            image: "https://picsum.photos/300/200",
            footerText: "Footer Text 2",
        },
        {
            title: "Card 3",
            text: "This is card 3",
            image: "https://picsum.photos/300/200",
            footerText: "Footer Text 3",
        },
    ];
    return (
        <div className="App">
            <div className="cardList">
                {cards.map((card) => (
                    <Card>
                        <Card.Header>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Image src={card.image} />
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>{card.text}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Text>{card.footerText}</Card.Text>
                        </Card.Footer>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default App;
