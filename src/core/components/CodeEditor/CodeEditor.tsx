import React from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = (props: any) => {
    return (
            <div style={{display: 'flex'}}>
                <div style={{width: '50%'}}>
                    Hello
                </div>
                <div style={{width: '50%', height: '100vh'}}>
                    <h4>Code Editor</h4>
                    <Editor
                        height="50vh"
                        theme="vs-dark"
                        defaultLanguage="python"
                        defaultValue="// some comment"
                    />
                </div>
            </div>
    );
};

export default CodeEditor;
