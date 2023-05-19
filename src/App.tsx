import "./App.css";
import { css } from "@emotion/react";

const linkContainer = css`
  display: flex;
  column-gap: 10px;
`;

const titleStyle = css`
  width: 300px;
  text-align: right;
`;

const linkStyle = css`
  width: 300px;
  text-align: left;
`;

const data = [
  {
    link: "http://ui.chenyuhao.site",
    label: "COMPONENT LIBRARY",
  },
  {
    link: "http://viz.chenyuhao.site",
    label: " D3 REACT VISUALIZATION",
  },
  {
    link: "http://blog.chenyuhao.site",
    label: "BLOG",
  },
  {
    link: "https://github.com/cyhfe",
    label: "GITHUB",
  },
];

function App() {
  return (
    <div>
      {data.map((d) => {
        return (
          <div css={linkContainer}>
            <div css={titleStyle}>{d.label}</div>
            <div css={linkStyle}>
              <a target="_blank" href={d.link}>
                {d.link}
              </a>
            </div>
          </div>
        );
      })}
      {/* <div css={linkContainer}>
        <div css={titleStyle}>component library</div>
        <div css={linkStyle}>
          <a href="http://ui.chenyuhao.site">http://ui.chenyuhao.site</a>
        </div>
      </div>
      <div css={linkContainer}>
        blog
        <a href="http://blog.chenyuhao.site">http://blog.chenyuhao.site</a>
      </div>
      <div css={linkContainer}>
        D3 React visualization
        <a href="http://viz.chenyuhao.site">http://viz.chenyuhao.site</a>
      </div> */}
    </div>
  );
}

export default App;
