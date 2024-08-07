# Using Mirador in Drupal with plugins support

Adapted from mirador-integratio-omeka and the fork at https://github.com/digitalutsc/mirador-integration-omeka by the Digital Text unit of University of Toronto Scarborough.

## Why not fork?

I'd like to have a way to keep up with releases of Mirador. As of version 2.x of Islandora, the Mirador module links to a CDN that serves a release candidate of Mirador 3.0.0 which is a few years old now.

Also I'd like to support Islandora site builders being able to configure Mirador plugins from within Drupal's Admin interface. As well, to potentially import their own plugins and potentially develop new ones without having to fork the Islandora module.

I'd like this to serve as a documentation of how the whole process of bringing the Mirador React app in to Drupal works so it can be repeated and maintained without having to reverse engineer the code.

## Import packages

Start with the standard Mirador Integration application hosted at https://github.com/ProjectMirador/mirador-integration

Then install the plugins you want, like:
```bash
npm install mirador-textoverlay
```

## Import the module into the application source 

In src/index.js, add the import statements for your plugins:

```javascript
import miradorTextOverlay from 'mirador-textoverlay';
```

Check each plugin's README for precise instructions.

Delete teh ```const config{}``` array declaration and the ```Mirador.viewer(config, [...])``` function call.

The config will live in your Drupal module's own Javascript file.

### Make ```Mirador``` identifier accessible to Drupal

The Mirador object needs to be attached to the window object so the Drupal-specific Javascript file can access it.  Add the following line to your now nearly empty src/index.js:

```javascript
window.Mirador = Mirador;
```

### Declare the plugins

Add the plugins you are importing to an array at the bottom of src/index.js:

```javascript
window.miradorPlugins = [
  {name: "image-tools", plugin: miradorImageToolsPlugin},
  {name: "textoverlay", plugin: miradorTextOverlay},
];
```
 
## Webpack configuration

The only thing you may wish to change in the webpack config is to specify the 'production' directive:

in webpack/webpack.config.js, just before the last closing brace of the config array:

```javascript
mode: 'production',
```

This will minify the compiled application and optimize it for download by the browser.

## Compile with Webpack

At this point you can resume following the instructions in mirador-integration.
```bash
$ npm run webpack
```

