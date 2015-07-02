# First Time

> For all those times you want some code to only run once...

![Build Status](https://api.travis-ci.org/pbojinov/first-time.svg?branch=master)

## API

*Ask if this event has already happened*

``` javascript
hasItHappened('a_revolution') // => false
```

*Tell `FirstTime` that the event has already happened*

``` javascript
itHappened('a_revolution')    // => undefined
```

## Examples

``` javascript
if (!FirstTime.hasItHappened('a_revolution')) {
	// bear arms, then...
	FirstTime.itHappened('a_revolution')
} else {
	// go home
}
```

## Coming Soon

A promised based approach

``` javascript
FirstTime.makeItHappen('a_revolution').then(function() {
	// run some code only the first time
	// it will automatically handle calling `itHappened` for you
});
```

## License

The MIT License (MIT)