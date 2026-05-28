"use client";

import React, { useState, useEffect } from "react";

export default function InitialLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the user has already visited in this session
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    if (hasVisited) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 0);
      return () => clearTimeout(timer);
    } else {
      sessionStorage.setItem("hasVisited", "true");
      // Add a delay to let the animation play through 
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2500); 
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isLoading) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] overflow-hidden text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-fuchsia-500/5" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes blinkCursor {
              50% {
                border-right-color: transparent;
              }
            }

            @keyframes typeAndDelete {
              0%,
              10% {
                width: 0;
              }
              45%,
              55% {
                width: 6.2em;
              }
              90%,
              100% {
                width: 0;
              }
            }

            .terminal-loader {
              border: 0.1em solid #333;
              background-color: #1a1a1a;
              color: #0f0;
              font-family: "Courier New", Courier, monospace;
              font-size: 1.2rem;
              padding: 1.5em 1em;
              width: 12em;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              border-radius: 4px;
              position: relative;
              overflow: hidden;
              box-sizing: border-box;
            }

            .terminal-header {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 1.5em;
              background-color: #333;
              border-top-left-radius: 4px;
              border-top-right-radius: 4px;
              padding: 0 0.4em;
              box-sizing: border-box;
            }

            .terminal-controls {
              float: right;
            }

            .control {
              display: inline-block;
              width: 0.6em;
              height: 0.6em;
              margin-left: 0.4em;
              border-radius: 50%;
              background-color: #777;
            }

            .control.close {
              background-color: #e33;
            }

            .control.minimize {
              background-color: #ee0;
            }

            .control.maximize {
              background-color: #0b0;
            }

            .terminal-title {
              float: left;
              line-height: 1.5em;
              color: #eee;
            }

            .text {
              display: inline-block;
              white-space: nowrap;
              overflow: hidden;
              border-right: 0.2em solid green; /* Cursor */
              animation:
                typeAndDelete 4s steps(11) infinite,
                blinkCursor 0.5s step-end infinite alternate;
              margin-top: 1.5em;
            }
          `,
        }}
      />
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Status</div>
          <div className="terminal-controls">
            <div className="control close" />
            <div className="control minimize" />
            <div className="control maximize" />
          </div>
        </div>
        <div className="text">Hello, World!</div>
      </div>
    </div>
  );
}
