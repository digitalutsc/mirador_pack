import Mirador from 'mirador/dist/es/src/index';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import textOverlayPlugin from 'mirador-textoverlay/es';
import annotationPlugin from 'mirador-annotations/es'; 
import SimpleAnnotationServerV2Adapter from 'mirador-annotations/es/SimpleAnnotationServerV2Adapter';
import LocalStorageAdapter from 'mirador-annotations/es/LocalStorageAdapter';
import AnnototAdapter from 'mirador-annotations/es/AnnototAdapter';

window.Mirador = Mirador;

window.createNewAdapter = function(canvasId, endpointUrl, type) { 
  switch (type) {
    case 'SimpleAnnotationAdapter':
      return new SimpleAnnotationServerV2Adapter(canvasId, endpointUrl);
    case 'LocalStorageAdapter':
      return new LocalStorageAdapter(`annotation-set=${canvasId}`);
    case 'AnnototAdapter':
      return new AnnototAdapter(canvasId, endpointUrl);
    default:
      return null;
  }
}

window.addAnnotationPlugin = function() {
  return window.miradorPlugins.push(...annotationPlugin);
}

window.miradorPlugins = [
  ...miradorImageToolsPlugin,...textOverlayPlugin,
];
