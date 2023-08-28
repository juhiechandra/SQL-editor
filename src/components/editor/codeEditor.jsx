import React, { memo, useCallback, useMemo } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-tomorrow_night";

const CodeEditor = ({ setQuery, query, SearchOutputTerminal }) => {
  const onChange = useCallback(
    (value) => {
      setQuery(value);
    },
    [setQuery]
  );

  const Home = useMemo(() => {
    return (
      <div className="w-[100%]">
        <AceEditor
          mode="sql"
          theme="tomorrow_night"
          onChange={onChange}
          value={query}
          fontSize={20}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          height={SearchOutputTerminal ? "400px" : "630px"}
          width="100%"
          name="myUniqueEditor"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
      </div>
    );
  }, [onChange, query, SearchOutputTerminal]);

  return Home;
};

export default memo(CodeEditor);
