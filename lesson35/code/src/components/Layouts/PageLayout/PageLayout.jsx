import React, { useContext } from "react";
import { themeContext } from "../../../Context";
import style from "./PageLayout.module.scss";

export function PageLayout({
  renderHeader = () => null,
  renderContent = () => null,
  renderFooter = () => null,
}) {
  const { container, header, content, footer } = style;
  const { theme } = useContext(themeContext);
  return (
    <div className={`${theme} ${container}`}>
      <header className={header}>{renderHeader()}</header>
      <main className={content}>{renderContent()}</main>
      <footer className={footer}>{renderFooter()}</footer>
    </div>
  );
}
