import React from "react";
import style from "./PageLayout.module.scss";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../ducks/theme.duck";

export function PageLayout({
  renderHeader = () => null,
  renderContent = () => null,
  renderFooter = () => null,
}) {
  const { container, header, content, footer } = style;
  const theme = useSelector(selectTheme);

  return (
    <div className={`${theme} ${container}`}>
      <header className={header}>{renderHeader()}</header>
      <main className={content}>{renderContent()}</main>
      <footer className={footer}>{renderFooter()}</footer>
    </div>
  );
}
