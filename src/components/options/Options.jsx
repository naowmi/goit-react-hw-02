// import {useEffect } from "react"
export const Option = ({ updateFeedback, resetFeedback, totalFeedback }) => {
    const handleClick = (type) => {
        updateFeedback(type)
    }
    const handleReset = () => {
        resetFeedback()
    }

    return (
        <div>
            <button onClick={() => handleClick("good")}>Good</button>
            <button onClick={() => handleClick("neutral")}>Neutral</button>
            <button onClick={() => handleClick("bad")}>Bad</button>
           {totalFeedback !== 0 &&  <button onClick={() => handleReset()}>Reset</button> }
        </div>
    )
    
}
