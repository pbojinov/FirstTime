# First Time

> For all those times you want some code to only run once...

[![Build Status](https://secure.travis-ci.org/petarbojinov/FirstTime.png?branch=master)](http://travis-ci.org/petarbojinov/FirstTime)

## API

* Ask if this event has already happened *
hasItHappened('a_revolution') // => false

* Tell `FirstTime` that the event has already happened
itHappened('a_revolution')    // => undefined

## Examples

```
if (!FirstTime.hasItHappened('a_revolution')) {
	// bear arms, then...
	FirstTime.itHappened('a_revolution')
} else {
	// go home
}
```

## Coming Soon

A promised based approach

```
FirstTime.makeItHappen('a_revolution').then(function() {
	// run some code only the first time
	// it will automatically handle calling `itHappened` for you
});
```