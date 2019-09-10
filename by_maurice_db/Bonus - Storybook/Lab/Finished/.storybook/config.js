import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  require('../src/stories/MovieListPresentation');
  require('../src/stories/MovieRow');
  require('../src/stories/InputText');
  require('../src/stories/MovieEditPresentation');
}

configure(loadStories, module);
