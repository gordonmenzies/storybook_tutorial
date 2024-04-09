# Storybook https://storybook.js.org/

Storybook is a frontend workshop for building UI components and pages in isolation.
It is used for;
UI development,
testing, and
documentation.

Benefits of using storybook
Storybook is an interactive directory of your UI components and their stories. Instead of having to navigate to a page, and contort the UI into the right state it allows you to save time by jumping straight to working on a UI component in a specific state.

You can render a specific variation in isolation by passing in props, mocking data, or faking events. It helps you develop hard-to-reach states and edge cases without needing to run the whole app.

Documentation for every component is automatically generated and customisable
Storybook has the benefit of being a single source of truth for your UI. It uses stories to index all your components and their various states, making it easy for your team to find and reuse existing UI patterns. It is great for creating a component library for consistency and ease when working in teams.

Stories show how UIs actually work, not just a picture of how they're supposed to work.

That keeps everyone aligned on what's currently in production.

Stories
Storybook allows you to document the usage guidelines and expected behaviour of a set of React components by writing comprehensive stories in Storybook.
Stories are representations of your component, they represent the key states of each of your components. They use a declarative syntax for supplying props and mock data to simulate component variations. Each component can have multiple stories. Each story allows you to demonstrate a specific variation of that component to verify appearance and behaviour. Stories are displayed in storybook, they are interactive and can then be used in development, testing, and documentation.

Whenever code or stories are modified, Storybook automatically updates how it previews your components.

Look out for Outdated code. A fair chunk of the information and guidance on the web is outdated. For example ‘template’ and importing ‘story’ is no longer used.

Installing. You may need to adjust your Appdata/ Roaming folder to ensure it includes an
npm folder.

To install
In the root of your existing react-typescript project run  
npx storybook@latest init

More info : https://storybook.js.org/docs/get-started/install
Storybook will look into your project's dependencies during its install process and provide you with the best configuration available.

The command above will make the following changes to your local environment:
📦 Install the required dependencies.
📦 Setup the necessary scripts to run and build Storybook.
📦 Add the default Storybook configuration.
📦 Add some boilerplate stories to get you started.
📦 Set up telemetry to help
adds a new script to the package.json file “storybook”: start-storybook -p 6006 -s public

After installation you will see 2 new folders
“.storybook” which contains Main.js and preview.js (essentially a bunch of config files) “stories” containing example components and useful support documentation. This folder will contain all the stories for each of your chosen components. Whatever is inside the stories folder can be mapped to storybook and the web browser.

Opening storybook
Storybook should open automatically on instillation but can be reopened in your web browser to interact with your components and see the auto generated documentation by using npm run storybook

Getting Started
https://storybook.js.org/docs/get-started
Write a story
Create a story in the story folder. Name convention is “YourComponent.stories.tx”

- Import
  oMeta and StoryObj for type safety and autocompletion, in TypeScript stories
  and Meta, enable you to share your component with storybook.
  import type { Meta, StoryObj } from '@storybook/react';
  oA component. import { yourcomponent } from './yourcomponentfolder';
- Default export
  The default export, Meta, contains metadata about this component's stories.
  export default meta;
  type Story = StoryObj<typeof meta>;
- Create a title;
  The title field (optional) controls where stories appear in the sidebar menu in
  storybook
  let storybook know the component type eg Button
  const meta: Meta = {
  title: 'Example/componentname',
  component: componenttype,
  };
  export default meta;
- Named exports
  Each named export is a story. Its contents specify how the story is rendered in
  addition to other configuration options.
  Args are inputs that are passed to the component, which Storybook uses to render
  the component in different states. In React, args = props. They also specify the initial
  control values for the story.
- Declare the type, name your story and give it props / args.
  type Story = StoryObj<Button>;
  export const Primary: Story = {
  args: {
  label: ‘click’
  ’background: ‘red’
  }
  };
  Useful links
  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-
  export
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Using `fn` to spy on the event arguments, and generate documentation in the actions
  panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // Generating autodocs for you component :
  https://storybook.js.org/docs/writing-docs/autodocs
  // Optional parameters to display your the component in the storybook Canvas. More info:
  https://storybook.js.org/docs/configure/story-layout
  Video tutorials
  https://www.youtube.com/watch?v=CuGZgYo6-XY
