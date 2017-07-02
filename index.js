//cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react.min.js
//cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.min.js
//cdnjs.cloudflare.com/ajax/libs/marked/0.3.5/marked.min.js
// + babel

// FCC: Build a Markdown Previewer using React and Sass
// User Story: I can type GitHub-flavored Markdown into a text area.
// User Story: I can see a preview of the output of my markdown that is updated as I type.

var Markdown = React.createClass({
  rawMarkup: function() {
  
    var rawMarkup = marked(this.props.children.toString(), {sanitize: false});
    return { __html: rawMarkup };
  },
  
  render: function() {
    return (
      <div>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});


var Markup = React.createClass({
  getInitialState: function() {
    return {
      text: 'Heading\n==\n\n<br />\n\nSub-heading\n--\n\n<br />\n\n### Smaller sub-heading\n\n<br />\n\nLine breaks are not generated\nby a simple return.\n\n<br />\n\nTo create a line break, add two spaces  \nand a return at the end of a line.\n\n<br />\n\nSome standard text styling: *italic*, **bold**, `monospace`, ~~strikethrough~~.\n\n<br />\n\nUnordered list:\n\n* apples\n\n* oranges\n\n* bananas\n\n<br />\n\nOrdered List:\n\n1. apples\n\n2. oranges\n\n3. bananas\n\n<br />\n\nThis is me! [timolawl.github.io](//timolawl.github.io)'
    }
  },
  
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  
  render: function() {  
    return (
      <div>
        <div className='title'>
          <h1>Markdown Previewer</h1>
        </div>
        <div className='input'>
          <div className='input__title'>
            <h2>Input</h2>
          </div>
          <textarea className='input__box' type='text' value={this.state.text} onChange={this.handleTextChange} />
          {/* 
          <div className='input__footnote'>There's no such thing as an empty line in Markdown, therefore &lt;br /&gt;'s must be added in the raw markup.</div>
          */}
        </div>
        
        <div className='output'>
          <div className='output__title'>
            <h2>Output</h2>
          </div>
          <div className='output__box'>
            <Markdown>{this.state.text}</Markdown>
          </div>
          {/* 
          <div className='output__footnote'>Minimal styling -- repositioned list items and set a better default font. Everything else is unstyled Markdown.</div>
          */}
        </div>        
      </div>
    );
  }
});


ReactDOM.render(<Markup />, document.body);
