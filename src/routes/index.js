import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./tab.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
