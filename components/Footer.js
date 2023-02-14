import React from "react";
import { footerMenu } from "../db";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-menu">
        {footerMenu.map((menuItem, i) => (
          <li key={i}>
            <Link href={menuItem.path}>{menuItem.name}</Link>
          </li>
        ))}
      </ul>
      <p>All rights reserved © Copyright 2023, Love Languages Test. </p>
    </footer>
  );
}
