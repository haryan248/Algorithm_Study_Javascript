import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
    const [filterArticles, setFilterArticles] = useState(articles);

    const onFilterUpvoted = () => {
        let newArticles = [];
        Object.assign(newArticles, filterArticles);
        newArticles.sort((a, b) => {
            return b.upvotes - a.upvotes;
        });
        setFilterArticles(newArticles);
    };

    const onFilterDate = () => {
        let newArticles = [];
        Object.assign(newArticles, filterArticles);
        newArticles.sort((a, b) => {
            const aDate = new Date(a.date);
            const bDate = new Date(b.date);
            if (aDate > bDate) {
                return -1;
            }
            if (aDate < bDate) {
                return 1;
            }
            return 0;
        });
        setFilterArticles(newArticles);
    };

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={() => onFilterUpvoted()}>
                    Most Upvoted
                </button>
                <button data-testid="most-recent-link" className="small" onClick={() => onFilterDate()}>
                    Most Recent
                </button>
            </div>
            <Articles articles={filterArticles} />
        </div>
    );
}

export default App;
