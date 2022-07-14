import {useState} from 'react'
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';
import Statistics from './Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacks = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = event => {
    switch (event) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return new Error(`State doesn't exist`);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return Number(total ? ((good / total) * 100).toFixed(0) : 0);
  }

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbacks}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage} />
            : <Notification message="There is no feedback"></Notification>}
        </Section>
      </>
    );
};