import React from 'react';
import QuestionEntry from './QuestionEntry.jsx';
import AnswerEntry from './AnswerEntry.jsx';
import sortQA from './sortQA.js'

const QAListEntry = ({ question, getProductQandA, productID }) => {
  let answerArray = Object.entries(question.answers)
  sortQA(answerArray)
  return (
    <li>
      <div id="question-entry">
        <QuestionEntry helpfulness={question.question_helpfulness} productID={productID} questionBody={question.question_body} questionID={question.question_id} getProductQandA={getProductQandA}/>
        <AnswerEntry answer={answerArray}/>
      </div>
  </li>
  )
};

export default QAListEntry;
