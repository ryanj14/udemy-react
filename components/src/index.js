import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
      <div>
        <h4>Warning!</h4>
        Are you sure you want to do this?
      </div>
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail author="Sam" timeAgo="Today ay 3:24pm" content="Nice blog post" avatar={faker.image.avatar()}/>
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail author="Jane" timeAgo="Today at 2:00am" content="I like this subject" avatar={faker.image.avatar()}/>
    </ApprovalCard>
    <ApprovalCard>
    <CommentDetail author="Alex" timeAgo="Yesterday at 5:00pm" content="I like the writing" avatar={faker.image.avatar()}/>
    </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('#root'));