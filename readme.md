
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

### By applying state change ask these questions to yourself:
- what piece of data is changing in our app
- what type of data is it
- what is the data's starting (default) value ?


### managing state
- pass a call back function to the child,then the child component extract the variable and make a change,which further make the parent component to rerender,further it rerenders all the child components .


### Reducers

- Function that manages changes to an object
- Function that gets called with two objects
- Argument #1 - object that has all our state in it
- Argument #2 - object that describe the update we want to make
- we look at argument #2 and use it to decide how to change argument #1
- (NOTE)
   - we never change argument #1 directly
   - we must always return a value to be used as argument #1
- so basically we have a object and another obj to change the 1st object
```js
const state = {
   red:0,green:0,blue:0
}

//2nd one
{colorToChange:'red',amount:15}

```