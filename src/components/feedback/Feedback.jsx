export const Feedback = ({ totalFeedback, percentageFeedback, feedback: { good, neutral, bad } }) => {
    if (totalFeedback === 0) return 
    return (
        <div>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {totalFeedback}</li>
                <li>Positive: {percentageFeedback}%</li>
            </ul>
        </div>
    )
}