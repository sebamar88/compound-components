/**
 * @jest-environment jsdom
 */

import Card from "../index";
import { render } from "@testing-library/react";

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

describe("Card Testing", () => {
    it("should render Card", () => {
        const wrapper = render(
            <div>
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
        );
        expect(wrapper).toMatchSnapshot();
    });
});
