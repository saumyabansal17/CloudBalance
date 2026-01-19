import React from "react";

import { useState } from "react";
import { toast } from "react-toastify";

const CodeBlock = ({ code,className="" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Data copied");
  };

  return (
    <div className={`relative max-w-[90%] bg-[#f8f8f8] ml-11 rounded-sm border border-[#E6E6E6] ${className} mb-2`}>
      
      <button
        onClick={handleCopy}
        className="absolute top-2 right-6 text-xs px-2 py-1 border rounded bg-white hover:bg-gray-100"
      >
        {copied ? "Copied" : "Copy"}
      </button>

      <pre className="max-h-64 overflow-auto p-4 text-sm font-mono whitespace-pre">
        {code}
      </pre>
    </div>
  );
};

export default CodeBlock;
