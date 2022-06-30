import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import List from "../screens/List";
import Film from "../screens/Film";
import TabNavigation from "./tab.routes";

const { Screen, Navigator } = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShow: false,
      }}
      initialRouteName="Home"
    >
      <Screen name="Home" component={Home} />
      <Screen name="Film" component={TabNavigation} />
      <Screen name="List" component={List} />
    </Navigator>
  );
}
