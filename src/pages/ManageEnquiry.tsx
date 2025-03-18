import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import DynamicTable from "../components/tables/BasicTables/DynamicTable";
import { BoxIcon } from "../icons";
import EnquirySearchCard from "./EnquirySearchCard";

export default function ManageEnquiry() {
  const columns = ["Student Name", "Course", "Mobile", "Enquiry Date", "Followup Date", "Notes", "Option"];

const tableData = [
  { "Student Name": "Alice Johnson", Course: "Math", Mobile: "9876543210", "Enquiry Date": "2024-01-01", "Followup Date": "2024-01-05", Notes: "Interested", Option: "Call" },
  { "Student Name": "Bob Smith", Course: "Science", Mobile: "8765432109", "Enquiry Date": "2024-01-02", "Followup Date": "2024-01-06", Notes: "Pending", Option: "Email" },
  { "Student Name": "Charlie Brown", Course: "English", Mobile: "7654321098", "Enquiry Date": "2024-01-03", "Followup Date": "2024-01-07", Notes: "Needs more info", Option: "Call" },
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
    label: "Add Enquiry",
    variant: "primary",
    onClick: () => (window.location.href = "/enquiry-form"),
    icon: <BoxIcon className="size-5" />,
  },
];

  return (
    <>
      <PageMeta
        title="React.js Profile Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Profile Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Manage Enquiry" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        
        <div className="space-y-6">
        <EnquirySearchCard title="Search Enquiry" dropdown={dropdown} fields={fields} buttons={buttons} />
          
          <DynamicTable columns={columns} tableData={tableData} />
        </div>
      </div>
    </>
  );
}
