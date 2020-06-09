# Our Application State

The application state is a single javascript object in memory in our application.

Create a folder in the root of your application called "reducers", in there create an index.ts.

In the index.ts create an interface to describe your application state, then export an object literal of that interface called *reducers*
```
{

}
```

## For each component or feature, you create a *branch* in the application state to hold its data.

```
{
  counter: {}
}

```
## That branch holds the data we need for that component.

```
{
  counter: {
    current: 0
  }
}
```
