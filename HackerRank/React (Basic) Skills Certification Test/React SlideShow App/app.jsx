import React, { useState } from "react";

function Slides({ slides }) {
    const [index, setIndex] = useState(0);
    const onIncrease = () => {
        if (index < slides.length - 1) {
            setIndex((prevCount) => prevCount + 1);
        }
    };
    const onDecrease = () => {
        if (index >= 1) {
            setIndex((prevCount) => prevCount - 1);
        }
    };
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={() => setIndex(0)} disabled={index === 0 ? true : false}>
                    Restart
                </button>
                <button data-testid="button-prev" className="small" onClick={onDecrease} disabled={index === 0 ? true : false}>
                    Prev
                </button>
                <button data-testid="button-next" className="small" onClick={onIncrease} disabled={index === slides.length - 1 ? true : false}>
                    Next
                </button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[index].title}</h1>
                <p data-testid="text">{slides[index].text}</p>
            </div>
        </div>
    );
}

export default Slides;
