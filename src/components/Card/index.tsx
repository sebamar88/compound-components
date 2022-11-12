import { Props } from "../types";
import { createContext, useContext } from "react";
import styles from "./Card.module.scss";

const CardContext = createContext({ card: false });
const HeaderContext = createContext({ header: false });
const BodyContext = createContext({ body: false });
const FooterContext = createContext({ footer: false });

function useCardContext() {
    const context = useContext(CardContext);

    if (!context.card) {
        return null;
    }
    return context;
}

function useHeaderContext() {
    const context = useContext(HeaderContext);

    if (!context.header) {
        return null;
    }

    return context;
}

function useTextContext() {
    const bodyContext = useContext(BodyContext);
    const footerContext = useContext(FooterContext);

    if (!bodyContext.body && !footerContext.footer) {
        return null;
    }

    return bodyContext || footerContext;
}

const Card = ({ children }: Props) => {
    return (
        <CardContext.Provider
            value={{
                card: true,
            }}
        >
            <div className={styles.card}>{children}</div>
        </CardContext.Provider>
    );
};

const Header = ({ children }: Props) => {
    const context = useCardContext();
    if (!context) return null;
    return (
        <HeaderContext.Provider
            value={{
                header: true,
            }}
        >
            <div className={styles.cardHeader}>{children}</div>
        </HeaderContext.Provider>
    );
};

const Title = ({ children }: Props) => {
    const context = useHeaderContext();
    if (!context) return null;
    return <h2 className={styles.cardTitle}>{children}</h2>;
};

type ImageProps = {
    src: string;
};

const Image = ({ src }: ImageProps) => {
    const context = useHeaderContext();
    if (!context) return null;
    return <img className={styles.cardImage} src={src} alt="Card image" />;
};

const Text = ({ children }: Props) => {
    const context = useTextContext();
    if (!context) return null;
    return <p className={styles.cardText}>{children}</p>;
};

const Body = ({ children }: Props) => {
    return (
        <BodyContext.Provider
            value={{
                body: true,
            }}
        >
            <div className={styles.cardBody}>{children}</div>
        </BodyContext.Provider>
    );
};

const Footer = ({ children }: Props) => {
    return (
        <FooterContext.Provider
            value={{
                footer: true,
            }}
        >
            <div className={styles.cardFooter}>{children}</div>
        </FooterContext.Provider>
    );
};

Card.Title = Title;
Card.Image = Image;
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
Card.Text = Text;

export default Card;
