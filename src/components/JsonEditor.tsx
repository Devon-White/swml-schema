import React, { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';
import '../App.css';

const MonacoEditor: React.FC = () => {
    const editorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (editorRef.current) {
            const editor = monaco.editor.create(editorRef.current, {
                value: JSON.stringify(
                    {
                        version: '1.0.0',
                        sections: {
                            main: []
                        },
                    }, null, 2),
                language: 'json',
                theme: 'vs-dark'
            });

            monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
                validate: true,
                schemas: [
                    {
                        uri: '/swml.schema.json', // relative path to your schema
                        fileMatch: ['*'],
                        schema: require('../../public/swml.schema.json'),


                    },
                ],
            });

            return () => {
                editor.dispose();
            };
        }
    }, []);

    return <div ref={editorRef} className="editor-container" />;
};

export default MonacoEditor;
