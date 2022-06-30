import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import List from "../screens/List";
import Film from "../screens/Film";

const { Screen, Navigator } = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Film" component={Film} />
      <Screen name="List" component={List} />
    </Navigator>
  );
}
