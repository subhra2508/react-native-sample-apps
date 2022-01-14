
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





# Layout system in React :

- Box Object Model : The height/width of an  element + the space around it => use this to affect the positioning of a 
single element . ex- margin,padding,height,width,border

- Flex Box : How some number of sibling elements get laid out inside a parent => use this to position multiple elements with a common parent . 

- Position : how a single element gets laid out inside of a parent => use this to override Box Object Model + Flex Box

- some basic style rules :

 borderWidth:1,
 borderColor:'black',
 alignItems:'flex-start',
 flexDirection:'row',
 height:200,
 alignItems:'center'
parents : (alignItems,justifyContent,flexDirection)
child : (flex,alignSelf)

### some more basic styles :

- height => To decide the height of the element 

- margin , marginHorizontal,marginVertical
-borderWidth
- padding

flex box model :
- alignItems -(apply on parents to manage children)
   - by default - alignItems:'stretch' stretch horizontal as much as possible

- alignItems:'flex-start' => horizontal align but as much as the text content

- alignItems:'center'
- alignItems : 'flex-end'

- flexDirection:'column' =>(by default it's column) applied on parents ,it is used to decide whether the children are align horizontally or vertically 

- flexDirection:'row' 

- justifyContent : 'flex-start' => (by default it's 'flex-start') if the flexDirection:'column' then justifyContent works vertically , if flexDirection:'row' then justifyContent works horizontally .

- justifyContent:'flex-end'
- justifyContent:'center'
- justifyContent:'space-between'
- justifyContent:'space-around'

- properties that we use in parent component to manipulate the child component :

   - alignItems,justifyContent,flexDirection

- properties that we use in child component:
   - flex,alignSelf

- flex : 1 =>(let apply on child #2) then child #12can take as much as vertical space possibly can .

- we can override the alignItems(parent elements) properties by placing alignSelf property or anyway we can use alignSelf to manipulate a particular element :
   - alignSelf:'center'
   - alignSelf:'flex-start'
   - alignSelf:'flex-end'


### position property

- By default the position property is relative

- position : 'relative' 
- position : 'absolute' (let's say applied on child #2) so it's property ignored by the siblings.still obeys some flex box rules set by parents .

### top,bottom,left,right : properties

- It behave like margin but little bit differently , firstly react-native place everyElement and then comeback to the particular element to do some spacing
and during this process no other siblings is going to affected .

### absolute fill up :
- If we make top:0 , bottom:0 , left:0 , right:0 ,we will fill up the child component all the space around the parent component .

- we can achieve this by another way also by 
```js
 textTwoStyle:{
        borderWidth:1,
        borderColor:'red',
        ...StyleSheet.absoluteFillObject 
    },
```
Here are some rule how to apply all the property:

- Apply box object model rules :
   - is position 'absolute'?
      - YES -
         - Apply some flex box rules,ignore all siblings
            - Apply top,left,right,bottom

      - NO -
         - Apply all flex box rules, considering siblings
            - place element inside parent
            - Apply top,left,right,bottom


