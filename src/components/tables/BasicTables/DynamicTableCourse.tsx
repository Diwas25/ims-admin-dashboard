import React from "react";

interface DynamicTableCourseProps {
  columns: string[];
  tableData: { [key: string]: unknown }[];
}

const DynamicTableCourse: React.FC<DynamicTableCourseProps> = ({ columns, tableData }) => {
  // Function to map column headers to their corresponding keys in the data
  const formatColumnKey = (col: string) =>
    col
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, "") // Remove spaces
      .replace(/[^a-zA-Z0-9]/g, ""); // Remove special characters

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[800px]">
          <table className="w-full border-collapse">
            {/* Table Header */}
            <thead className="border-b border-gray-100 dark:border-white/[0.05]">
              <tr>
                {columns.map((col, index) => (
                  <th
                    key={index}
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((col, colIndex) => {
                    const key = formatColumnKey(col); // Convert column name to object key
                    return (
                      <td
                        key={colIndex}
                        className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400"
                      >
                        {row[key] !== undefined ? row[key] : "-"} {/* Handle missing values */}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DynamicTableCourse;
