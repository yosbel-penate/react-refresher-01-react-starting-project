import React, {useState} from 'react';
import './App.css';
import NewGoal from './components/NewGoal/NewGoal';
import GoalsList from './components/GoalList/GoalList';

const App = () => {
  const [courseGoals, setCourseGoals] = useState(
    [
      {id: 'cg1', text: 'Finish the course 1'},
      {id: 'cg2', text: 'Finish the course 2'},
      {id: 'cg3', text: 'Finish the course 3'}
    ]
  );
  
  const addNewGoalHandler = (newGoal) => {
    //setCourseGoals(courseGoals.concat(newGoal))
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
    console.log(courseGoals);
  }

  return <div >
    <h2>Course Goals</h2>
    <NewGoal onAddGoal = {addNewGoalHandler}/>
    <GoalsList goals = {courseGoals} />
    </div>; 
};

export default App;
