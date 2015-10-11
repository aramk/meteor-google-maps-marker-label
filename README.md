# MarkerWithLabel for Meteor

## Installation

```
meteor add aramk:google-maps-marker-label
```

## Usage

Relies on [meteor-googlemaps](https://github.com/drewjw81/meteor-googlemaps/).

```
GoogleMaps.init {}, ->
  map = new google.maps.Map(mapNode, mapOptions)
  # Initialize library: this must be called before use.
  MarkerWithLabel.init()
```

## References

* [Examples](http://google-maps-utility-library-v3.googlecode.com/svn/tags/markerwithlabel/1.1.9/docs/examples.html)
* [Reference](http://google-maps-utility-library-v3.googlecode.com/svn/tags/markerwithlabel/1.1.9/docs/reference.html)
* [printercu/google-maps-utility-library-v3-read-only](https://github.com/printercu/google-maps-utility-library-v3-read-only)
