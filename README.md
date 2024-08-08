## Islandora Additions

This is a fork of the demonstration project at https://github.com/ProjectMirador/mirador-integration. This project adapts the
code to work within [Drupal](https://drupal.org/) for the [Islandora](https://github.com/islandora/documentation) project.

The main differences are

1. Adding a few more plugins, and
2. Invoking Mirador is done in the islandora_mirador Drupal module.

## Integrating Mirador

This repository is designed to show integrating Mirador 3 with modern frontend build systems.

### Dependencies

The dependencies are listed in package.json.

TO install them, run:

```sh
npm install
``````
### Webpack

Webpack is used to build the app for use by Islandora

See `./webpack` for a basic webpack setup for Mirador 3 + a plugin.

```sh
npm run webpack
```

The output folder webpack/dist should now contain a file main.js which you can place in your drupal installation under [webroot]/libraries/mirador/dist.

You can then go to /admin/config/media/mirador and set it to use the local version after clearing your site's cache.

## Digital UTSC Additions

This fork has an additional mirador plugin added namely: `mirador-annotation`

To install new plugins, follow the steps above and install plugins that are compatible with the current version of mirador.

Using node to install the plugins then modify `src/index.js` to actually add the plugin to mirador (i.e add it to `window.miradorPlugins` object in the code)

Lastly, the adapter setting has to be controlled by a patch to the `islandora_mirador` module in Drupal. The Patch is [here](https://github.com/digitalutsc/hocr_annotation_converter/blob/master/Patch/annotation_mirador.patch)