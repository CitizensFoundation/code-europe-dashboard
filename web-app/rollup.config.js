import { createDefaultConfig } from '@open-wc/building-rollup';
import copy from 'rollup-plugin-copy';;
import merge from 'deepmerge';

// if you need to support IE11 use "modern-and-legacy-config" instead.
// import { createCompatibilityConfig } from '@open-wc/building-rollup';
// export default createCompatibilityConfig({ input: './index.html' });

const baseConfig = createDefaultConfig({

  input: './index.html',


});

export default merge(baseConfig, {
  // if you use createSpaConfig, you can use your index.html as entrypoint,
  // any <script type="module"> inside will be bundled by rollup
  input: './index.html',

  plugins: [
    copy({
      targets: [
        { src: 'distanceGraphs/*', dest: 'dist/' },
        { src: 'images/**/*', dest: 'dist/images' }
      ]
    })
  ]
  // alternatively, you can use your JS as entrypoint for rollup and
  // optionally set a HTML template manually
  // input: './app.js',
});

