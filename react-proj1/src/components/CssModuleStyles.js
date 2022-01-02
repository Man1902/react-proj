import React from "react";
import "../css/appStyles.css";
import styles from "../css/appStyles.module.css";

export default function CssModuleStyles() {
  return (
    <div>
      <h1 className={styles.success}>Success</h1>
      <h1 className="error">Error</h1>
    </div>
  );
}
