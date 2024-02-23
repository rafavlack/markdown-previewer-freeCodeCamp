import { useState } from 'react';
import { marked } from 'marked';

function App() {
    const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

| Wild Header | Crazy Header | Another Header? |
| ----------- | ------------ | --------------- |
| Your content can | be here, and it | can be here.... |
| And here. | Okay. | I think we get it. |


- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`);

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    const createMarkup = () => {
        let html = marked(markdown);
        // Encierra la función en un div con la clase 'highlighted'
        html = html.replace(/<pre><code>function anotherExample\([^<]*<\/code><\/pre>/g, '<div class="highlighted">$&</div>');
        return { __html: html };
    };

    return (

        <div className="app">
            <div className="editor-container">
                <h2>Editor</h2>
                <textarea
                    id="editor"
                    value={markdown}
                    onChange={handleChange}
                    className="textarea"
                    rows={54}
                />
            </div>
            <div className="preview-container">
                <h2>Preview</h2>
                <div
                    id="preview"
                    dangerouslySetInnerHTML={createMarkup()}
                    className="preview"
                />
            </div>
        </div>
    );
}

export default App;