import {Button, StyleSheet, View, FlatList} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {id: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  }

  return (
    <View style={styles.screen}>
      <Button title='Add new goal' onPress={() => setIsAddMode(true)}/>
      <GoalInput
        addGoalHandler={addGoalHandler}
        visible={isAddMode}
        onCancel={() => setIsAddMode(false)}
      />
      {courseGoals.length !== 0 ?
        <Button title='clear goals' color='#ccc' onPress={() => setCourseGoals([])}/>
        : null
      }
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem
          title={itemData.item.value}
          id={itemData.item.id}
          onDelete={removeGoalHandler}
        />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: '#7c7c7c',
    height: '100%',
  },
});
