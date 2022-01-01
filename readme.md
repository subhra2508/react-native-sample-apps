
### FLATList Element :

- Turns an array into a list of elements
- we are required to pass in a 'prop' of 'data' - the array of data that we are going
to create bunch of element out of it

- also required to pass in a 'renderItem' prop - function that will turn each individual item into an
element

- If you are coming from from react on the web , you might be used to 'mapping an array of data to build a list -
FlatList is better with RN (react native)


### Buttons in react native
There are 2 different ways to show a button to a user
Button -> very simple component for showing a button and detecting a press

TouchableOpacity -> Highly customizable component that can detect a press  on just
about any kind of element

### React Navigation Stack Navigator
```js
  <Button
      onPress={()=>props.navigation.navigate('List')}
      title='Go to List Demo'/>

<TouchableOpacity onPress={()=>props.navigation.navigate('List')}>
   <Text>Go to List Demo</Text>
</TouchableOpacity> 
```