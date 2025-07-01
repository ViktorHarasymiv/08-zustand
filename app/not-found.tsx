import { Metadata } from "next";

import "./globals.css";
import NotFoundClient from "./not-found.client";

export const metadata: Metadata = {
  title: "Not found page",
  description: "Error 404",
};

const NotFound = () => {
  return (
    <div className="error">
      <NotFoundClient />
    </div>
  );
};

export default NotFound;
