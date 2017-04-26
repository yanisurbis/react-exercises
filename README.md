# react-exercises

## 0L - Hello World
![hello world](https://i.gyazo.com/1e3b9e31784c7849f18c8b8f6279da04.png)

## 1L - Counter
![counter](http://i.imgur.com/JIWeDJo.gif)

## 1L - Current Time
![current time](http://i.imgur.com/bWF8acX.gif)

## 2L - Simple Todo List
You should be able to:
+ add item from input to the list of todos
+ delete item from that list
+ mark items as "done"

## 2L - Counters
You should be able to:
+ see several counters at once
+ add counter with 0 value by default
+ remove specific counter

Steps:
+ create state & check if your render function renders counters properly (should work with several counters)
+ add + button for every counter & add handler (check through logging || react dev-tools that state changes)
+ add - button
+ add "Add Counter" button
+ add "Remove Counter" button

Tips:
+ If Counter has state
```
<button value="Add Counter" onClick={this.addCounter}>

<button value="Rem Counter" onClick={() => removeCounter(ind)} />

<button value="+" onClick={this.increment} />
```
+ If you store Counter value in parent's state
```
<button value="Add Counter" onClick={this.addCounter}>

<button value="Rem Counter" onClick={() => removeCounter(ind)} />

<button value="+" onClick={() => incrementCounter(ind)} />
```

## 3L - Todo List with timers
You should be able to:
+ look at __Simple Todo List__
+ every item has it's own timer
+ activate this timer with _start_ button
+ deactivate this timer with _stop_ button

## 4L - Use Gif API
+ look at ``src/level4``
+ app should fetch some data on user's action
+ data is fetched based on some input's value
+ use flexbox



