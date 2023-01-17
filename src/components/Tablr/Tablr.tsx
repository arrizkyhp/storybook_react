import styles from "./tablr.module.css";

type TablrProps = {
  rows: any;
  headers: any;
  borderWidth?: "thin" | "medium" | "thick";
  cellPadding?: "small" | "medium" | "large";
  cellTextColor?: string;
  headerTextColor?: string;
  cellBorderColor?: string;
  headerBorderColor?: string;
  backgroundColor?: string;
  headerBackgroundColor?: string;
};

const Tablr = ({
  rows,
  headers,
  borderWidth = "medium",
  cellPadding = "medium",
  cellTextColor = "black",
  headerTextColor = "white",
  cellBorderColor = "#747381",
  headerBorderColor = "#494866",
  backgroundColor = "#a6a5b8",
  headerBackgroundColor = "#65647a",
}: TablrProps) => {
  const cellPaddingMap = {
    small: "3px",
    medium: "8px",
    large: "15px",
  };
  const borderWidthMap = {
    thin: "1px",
    medium: "2px",
    thick: "3px",
  };

  return (
    <div className={styles.main}>
      {headers.map((h: any, columnIndex: number) => (
        <div key={columnIndex} className={styles.column}>
          <div
            className={styles.header}
            style={{
              color: headerTextColor,
              padding: cellPaddingMap[cellPadding],
              backgroundColor: headerBackgroundColor,
              border: `${borderWidthMap[borderWidth]} solid ${headerBorderColor}`,
            }}
          >
            {h}
          </div>

          <div className={styles.rows}>
            {rows.map((r: any, rowIndex: number) => (
              <div
                key={rowIndex}
                className={styles.cell}
                style={{
                  color: cellTextColor,
                  backgroundColor: backgroundColor,
                  padding: cellPaddingMap[cellPadding],
                  border: `${borderWidthMap[borderWidth]} solid ${cellBorderColor}`,
                }}
              >
                {r[columnIndex]}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tablr;
