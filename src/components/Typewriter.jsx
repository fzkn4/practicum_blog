import React, { useState, useEffect, useMemo, useRef } from "react";

/**
 * Typewriter component that renders children (including nested elements)
 * character by character with a looping "back and forth" effect.
 */
const Typewriter = ({ 
  children, 
  typingSpeed = 50, 
  deletingSpeed = 30, 
  pauseDuration = 2000,
  delay = 0, 
  startTrigger = true,
  loop = true 
}) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [phase, setPhase] = useState("WAITING"); // WAITING, TYPING, PAUSING_END, DELETING, PAUSING_START
  const timerRef = useRef(null);

  // Flatten children to extract all text content
  const fullTextContent = useMemo(() => {
    const getText = (node) => {
      if (typeof node === "string") return node;
      if (typeof node === "number") return node.toString();
      if (Array.isArray(node)) return node.map(getText).join("");
      if (React.isValidElement(node)) return getText(node.props.children);
      return "";
    };
    return getText(children);
  }, [children]);

  const totalLength = fullTextContent.length;

  // Handle Initial Delay
  useEffect(() => {
    if (startTrigger && phase === "WAITING") {
      timerRef.current = setTimeout(() => {
        setPhase("TYPING");
      }, delay);
      return () => clearTimeout(timerRef.current);
    }
  }, [startTrigger, delay, phase]);

  // Main Animation Loop
  useEffect(() => {
    if (phase === "TYPING") {
      if (visibleCount < totalLength) {
        timerRef.current = setTimeout(() => {
          setVisibleCount((prev) => prev + 1);
        }, typingSpeed);
      } else {
        if (loop) {
          timerRef.current = setTimeout(() => {
            setPhase("PAUSING_END");
          }, 100); // small buffer
        }
      }
    } else if (phase === "PAUSING_END") {
      timerRef.current = setTimeout(() => {
        setPhase("DELETING");
      }, pauseDuration);
    } else if (phase === "DELETING") {
      if (visibleCount > 0) {
        timerRef.current = setTimeout(() => {
          setVisibleCount((prev) => prev - 1);
        }, deletingSpeed);
      } else {
        setPhase("PAUSING_START");
      }
    } else if (phase === "PAUSING_START") {
      timerRef.current = setTimeout(() => {
        setPhase("TYPING");
      }, 500); // short pause before re-typing
    }

    return () => clearTimeout(timerRef.current);
  }, [phase, visibleCount, totalLength, typingSpeed, deletingSpeed, pauseDuration, loop]);

  // Recursively render children but cap the text content at visibleCount
  const renderChildren = (node, state) => {
    if (state.count >= visibleCount) return null;

    if (typeof node === "string" || typeof node === "number") {
      const text = node.toString();
      const remaining = visibleCount - state.count;
      const toShow = text.slice(0, remaining);
      state.count += toShow.length;
      return toShow;
    }

    if (Array.isArray(node)) {
      return node.map((child, index) => (
        <React.Fragment key={index}>
          {renderChildren(child, state)}
        </React.Fragment>
      ));
    }

    if (React.isValidElement(node)) {
      const prunedChildren = renderChildren(node.props.children, state);
      // We keep the element structure to maintain styles during the typing effect
      return React.cloneElement(node, {}, prunedChildren);
    }

    return null;
  };

  const state = { count: 0 };

  return (
    <span className="typewriter-wrapper">
      {renderChildren(children, state)}
      <span 
        className="typewriter-cursor"
        aria-hidden="true"
      >
        _
      </span>
    </span>
  );
};

export default Typewriter;
