import React from 'react';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div>
            {options.map((elem) => (
                <button type="button" key={elem} onClick={onLeaveFeedback}>{elem}</button>
            ))}
        </div>
    )
}

export default FeedbackOptions;