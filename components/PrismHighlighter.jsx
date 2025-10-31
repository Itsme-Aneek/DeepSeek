"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";

export default function PrismHighlighter() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return null;
}
