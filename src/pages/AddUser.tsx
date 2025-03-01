import PageBreadcrumb from "../components/common/PageBreadCrumb";
import UserMetaCard from "../components/UserProfile/UserMetaCard";
import UserInfoCard from "../components/UserProfile/UserInfoCard";
import UserAddressCard from "../components/UserProfile/UserAddressCard";
import PageMeta from "../components/common/PageMeta";
import ComponentCard from "../components/common/ComponentCard";
import Label from "../components/form/Label";
import Input from "../components/form/input/InputField";
import Select from "../components/form/Select";
import Button from "../components/ui/button/Button";
import { BoxIcon } from "../icons";

export default function AddUser() {
  const options = [
    { value: "admin", label: "Admin" },
    { value: "staff", label: "Staff" },
  ];
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };
  return (
    <>
      <PageMeta
        title="React.js Profile Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Profile Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Add User" />
      
        {/* <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Add User
        </h3> */}
       
          <ComponentCard className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6" title="Add User Form">
            <div className="space-y-6">
              <div>
                <Label htmlFor="inputOne">First Name</Label>
                <Input
                  type="text"
                  id="inputOne"
                  placeholder="Enter First Name"
                />
              </div>
              <div>
                <Label htmlFor="inputTwo">Last Name</Label>
                <Input
                  type="text"
                  id="inputTwo"
                  placeholder="Enter Last Name"
                />
              </div>
              <div>
                <Label htmlFor="inputThree">Email</Label>
                <Input type="text" id="inputThree" placeholder="Enter Email" />
              </div>
              <div>
                <Label>Select Role</Label>
                <Select
                  options={options}
                  placeholder="Select an option"
                  onChange={handleSelectChange}
                  className="dark:bg-dark-900"
                />
              </div>
              <div>
                <Label htmlFor="inputFour">Phone Number</Label>
                <Input
                  type="text"
                  id="inputFour"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="flex items-center gap-5">
              <Button
                  size="sm"
                  variant="primary"
                  startIcon={<BoxIcon className="size-5" />}
                >
                  Add
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  startIcon={<BoxIcon className="size-5" />}
                >
                  Back
                </Button>
                
              </div>
            </div>
          </ComponentCard>
    </>
  );
}
