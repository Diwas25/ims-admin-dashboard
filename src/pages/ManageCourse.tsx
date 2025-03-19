import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import DynamicTableCourse from "../components/tables/BasicTables/DynamicTableCourse";
import { BoxIcon } from "../icons";
import EnquirySearchCard from "../pages/EnquirySearchCard";

export default function ManageCourse() {
  const columns = ["Course ID", "Course Name", "Fee", "Duration", "Batch", "Status", "Option"];
  const tableData = [
    {
      id: 1,
      courseid: "C101",
      coursename: "Full Stack Development",
      fee: "$1200",
      duration: "6 Months",
      batch: "Morning",
      status: "Active",
      option: "Edit | Delete",
    },
    {
      id: 2,
      courseid: "C102",
      coursename: "Data Science",
      fee: "$1500",
      duration: "8 Months",
      batch: "Evening",
      status: "Active",
      option: "Edit | Delete",
    },
    {
      id: 3,
      courseid: "C103",
      coursename: "Digital Marketing",
      fee: "$800",
      duration: "3 Months",
      batch: "Weekend",
      status: "Inactive",
      option: "Edit | Delete",
    },
    {
      id: 4,
      courseid: "C104",
      coursename: "Cyber Security",
      fee: "$1400",
      duration: "7 Months",
      batch: "Morning",
      status: "Active",
      option: "Edit | Delete",
    },
    {
      id: 5,
      courseid: "C105",
      coursename: "UI/UX Design",
      fee: "$900",
      duration: "4 Months",
      batch: "Evening",
      status: "Inactive",
      option: "Edit | Delete",
    },
  ];
  


const dropdown = {
  label: "Select Course",
  options: [
    { value: "english", label: "English" },
    { value: "computer", label: "Computer" },
  ],
};

const fields = [
  { label: "Search By", type: "text", placeholder: "Student Name, Phone, Email", name: "searchBy" },
];

const buttons = [
  {
    label: "Apply Filter",
    variant: "primary",
    onClick: () => console.log("Filter Applied"),
    icon: <BoxIcon className="size-5" />,
  },
  {
    label: "Add Course",
    variant: "primary",
    onClick: () => (window.location.href = "/course-master"),
    icon: <BoxIcon className="size-5" />,
  },
];

  return (
    <>
      <PageMeta
        title="React.js Profile Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Profile Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Manage Course" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        
        <div className="space-y-6">
        <EnquirySearchCard title="Search Course" dropdown={dropdown} fields={fields} buttons={buttons} />
          
          <DynamicTableCourse columns={columns} tableData={tableData} />
        </div>
      </div>
    </>
  );
}
