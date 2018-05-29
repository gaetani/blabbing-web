import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './EditorComponent.css';


export default class EditorComponent extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
          editorState: EditorState.createEmpty(),
          collapse: true,
        };
      }
    

      onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
        });
      };

      myFocusCallback= () => {
            console.log('okay');
            this.setState({
                collapse: false
            });
      }

      myBlurCallback= () => {
        console.log('mokay');
        this.setState({
            collapse: true
        });
      }

    
      render() {
        const { editorState } = this.state;
        const { collapse } = this.state;
        return (
            <div className="editor" onBlur={this.myBlurCallback} onClick={this.myFocusCallback}>
                <Editor 
                    toolbarOnFocus
                    toolbarClassName={collapse? "toolbar-class-hidden": "toolbar-class-show"} 
                    editorState={editorState}
                    toolbarHidden={collapse}
                    wrapperClassName="demo-wrapper"
                    editorClassName={!collapse? "editor-class-expanded": "editor-class-lower"} 
                    placeholder="Enter some text..."
                    onEditorStateChange={this.onEditorStateChange}
                />
          </div>
        )
      }
  }