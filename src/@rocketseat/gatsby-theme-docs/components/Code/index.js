import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import rangeParser from 'parse-numeric-range';
import Prism from 'prism-react-renderer/prism'
import theme from 'prism-react-renderer/themes/dracula';
import { LiveProvider, LiveEditor } from 'react-live';

import { copyToClipboard } from '@rocketseat/gatsby-theme-docs/src/util/copy-to-clipboard';
import scope from './LiveCodeScope';
import {
  CopyCode,
  LineNo,
  Pre,
  PreHeader,
  LiveWrapper,
  LivePreview,
  LiveError,
  StyledEditor,
} from './styles';

Prism.languages.asm = {
    'comment': {
        pattern: /(^|[^\\]);.*/,
        lookbehind: true
      },

      'function': {
        // pattern: /((?:^|\s)[ \t]+)[a-zA-Z_]\w*(?=\s*\:)/g,
        pattern:   /\b(\s?)\.?\w+\:/g,
        lookbehind: true
      },
  
      'string': {
        pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
        greedy: true
      },

      'keyword': /\b(?:and|add|call|clc|cld|cmp|dec|do|done|div|imul|in|inc|int|ja|jb|jbe|jc|jcxz|je|jmp|jna|jnb|jz|lea|lodsb|lodsw|loop|loope|loopne|mov|movsb|mul|neg|nop|not|or|out|pop|popf|push|pushf|rep|ret|shr|shl|stc|std|stosb|stosw|org|xchg|xor)\b/
}



const calculateLinesToHighlight = (meta) => {
  const RE = /{([\d,-]+)}/;

  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)[1];
    const lineNumbers = rangeParser(strlineNumbers);
    return (index) => lineNumbers.includes(index + 1);
  }

  return () => false;
};

export default function CodeHighlight({
  codeString,
  className,
  live,
  highlight,
  title,
  lineNumbers,
}) {
  const [copied, setCopied] = useState(false);
  const language = className && className.replace(/language-/, '');

  const shouldHighlightLine = calculateLinesToHighlight(highlight);

  const handleClick = () => {
    setCopied(true);
    copyToClipboard(codeString);

    setTimeout(() => {
      setCopied(false);
    }, 4000);
  };

  if (live) {
    return (
      <LiveProvider
        code={codeString}
        noInline
        theme={theme}
        transformCode={(code) => `/** @jsx mdx */${code}`}
        scope={scope}
      >
        <LiveWrapper>
          <LivePreview />

          <StyledEditor>
            <CopyCode onClick={handleClick} disabled={copied} hasTitle>
              {copied ? 'Copied!' : 'Copy'}
            </CopyCode>

            <LiveEditor />
          </StyledEditor>

          <LiveError />
        </LiveWrapper>
      </LiveProvider>
    );
  }

  return (
    <>
      {title && <PreHeader>{title}</PreHeader>}
      <div className="gatsby-highlight">
        <Highlight
          {...defaultProps}
          Prism={Prism} 
          code={codeString}
          language={language}

          theme={theme}
        >
          {({
            className: blockClassName,
            style,
            tokens,
            getLineProps,
            getTokenProps,
          }) => (
            <Pre
              className={blockClassName}
              style={style}
              hasTitle={title}
              hasLanguage={!!language}
            >
              <CopyCode
                onClick={handleClick}
                disabled={copied}
                hasTitle={title}
              >
                {copied ? 'Copied!' : 'Copy'}
              </CopyCode>
              <code>
                {tokens.map((line, index) => {
                  const lineProps = getLineProps({ line, key: index });

                  if (shouldHighlightLine(index)) {
                    lineProps.className = `${lineProps.className} highlight-line`;
                  }

                  return (
                    <div {...lineProps}>
                      {lineNumbers && <LineNo>{index + 1}</LineNo>}
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  );
                })}
              </code>
            </Pre>
          )}
        </Highlight>
      </div>
    </>
  );
}

CodeHighlight.propTypes = {
  codeString: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  highlight: PropTypes.string,
  live: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.string,
  lineNumbers: PropTypes.string,
};

CodeHighlight.defaultProps = {
  live: false,
  title: null,
  lineNumbers: null,
  highlight: null,
};
