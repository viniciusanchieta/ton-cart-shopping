import {
  NavigationContainer,
  createNativeStackNavigator
} from '~/infra/navigation';
import type { BaseNavigationProps } from './interfaces';

function BaseNavigationComponent({ screens }: BaseNavigationProps) {
  const Stack = createNativeStackNavigator();

  function handleStackScreen(): JSX.Element[] {
    return screens.map(screen => (
      <Stack.Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
      />
    ));
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {handleStackScreen()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default BaseNavigationComponent;
