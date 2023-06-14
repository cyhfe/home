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
    link: "http://ui.icyh.me",
    label: "COMPONENT LIBRARY",
  },
  {
    link: "http://ui.icyh.me",
    label: " D3 REACT VISUALIZATION",
  },
  {
    link: "http://ui.icyh.me",
    label: "BLOG",
  },
  {
    link: "http://ui.icyh.me",
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
    </div>
  );
}

export default App;
