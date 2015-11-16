# First Time

> For all those times you want some code to only run once...

![Build Status](https://api.travis-ci.org/pbojinov/first-time.svg?branch=master)

## Install

```bsh
bower install first-time --save
```

Then add it to your app:

```html
<script src="bower_components/first-time/FirstTime.js"/>
```

## API

``` javascript
// Ask if this event has already happened
FirstTime.hasItHappened('a_revolution') // => false
```

``` javascript
// Tell `FirstTime` that the event has already happened
FirstTime.itHappened('a_revolution')    // => undefined
```

## Examples

``` javascript
if (!FirstTime.hasItHappened('a_revolution')) {
	// bear arms, then...
	FirstTime.itHappened('a_revolution');
	console.log('bear arms');
} else {
	// go home
	console.log('go home, no revolution yet');
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
