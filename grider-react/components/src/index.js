import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
// just for laughs
const hommies = [
  { author: "Jack Randall", time: "Yesterday 5:00pm", comment: "cool beans!" },
  {
    author: "James Fraser",
    time: "Yesterday 6:00pm",
    comment: "I disagree lad, give me a wee drum",
  },
  {
    author: "Phill",
    time: "Today 6:00pm",
    comment: "What happened last night?",
  },
];

const App = () => {
  return (
    <div className="ui container comments">
      <h3>Approval Pending:</h3>
      <ApprovalCard>
        <CommentDetail
          author="John Snow"
          time="Yesterday at 9:00am"
          comment="I know Nothing"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Pippin Took"
          time="Today at 10:00am"
          comment="How about Second Breakfast?"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Uhtred"
          time="Yesterday at 10:00pm"
          comment="Destiny is all"
        />
      </ApprovalCard>

      <h3>Approved:</h3>
      {hommies.map((hommie, i) => (
        <CommentDetail
          author={hommie.author}
          time={hommie.time}
          comment={hommie.comment}
          key={i}
        />
      ))}
      <ApprovalCard>
        <h4>Pregunta!</h4>
        <p>Voce está Maluco?</p>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
