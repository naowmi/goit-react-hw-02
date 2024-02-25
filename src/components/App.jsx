import './App.css'
import { DescriptionMarkup } from "./description/Description";
import { Option } from "./options/Options";
import { Feedback } from "./feedback/Feedback";
import { Notification } from "./notification/Notification";
import options from "./options.json"
import { useEffect, useState } from 'react';
export default function App() {
  const [feedback, setFeedback] = useState(() => {
        const savedValues = localStorage.getItem("saved-feedback");
        if (savedValues !== null) {
            return JSON.parse(savedValues);
        }
        return options
  });
  useEffect(() => {
    localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback])
  const updateFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
 }
  const resetFeedback = () => {
    setFeedback(() => ({
	good: 0,
	neutral: 0,
	bad: 0
   })) 
  }   
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad; 
 const percentageFeedback =  Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)
    return (
      <>
        <DescriptionMarkup />
        <Option updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback}  />
        <Feedback feedback={feedback} totalFeedback={totalFeedback} percentageFeedback={percentageFeedback} />
        {totalFeedback === 0 && <Notification />}
      </>
    );
  }



