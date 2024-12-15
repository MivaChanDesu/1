# 1stLabaWork
## Приложение
Приложение, созданное на React Native Expo, использующее библиотеку react-navigation, реализующее две функци: переход между страницами и передача параметров.
Для осуществления навигации используется библиотека react-navigation и ее компоненты NavigationContainer, createNativeStackNavigator, Stack.Navigator и Stack.Screen
``` JS
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Activity1">
        <Stack.Screen name="Activity1" component={HomeScreen} />
        <Stack.Screen name="Activity2" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```
###### Для передачи параметров в HomeScreen определяется переменная 
``` JS
const parameter = "Камила Гаджиева";
```
###### Чтобы в DetailsScreen принять через route
``` JS
const { parameter } = route.params;
```
###### И отобразить в тексте
``` JS
<Text>{parameter}</Text>
```
###### Проект собирается в apk файл с помощью команды
``` JS
eas build -p android --profile preview
```

