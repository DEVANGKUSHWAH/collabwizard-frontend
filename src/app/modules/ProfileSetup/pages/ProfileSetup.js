import React from 'react'
import { Steps, Button, message } from 'antd';
import AboutPage from './AboutPage';

const { Step } = Steps;



const ProfileSetup = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinishFirst = (values) => {
      console.log(values);
  }

  const steps = [
    {
      title: 'First',
      content: 'First-content',
      form : <AboutPage onFinishFirst={onFinishFirst}/>
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ];

  return (
    <div style={{margin:"5rem"}}>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
        <div className="steps-content">
          {steps[current].form}
        </div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => 
            {
                onFinishFirst();
                next() }    }>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProfileSetup;