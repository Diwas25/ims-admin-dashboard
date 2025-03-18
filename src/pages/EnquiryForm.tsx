// import React from "react";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
//import DefaultInputs from "../../components/form/form-elements/DefaultInputs";
import PageMeta from "../components/common/PageMeta";
// import { useState } from "react";
import ComponentCard from "../components/common/ComponentCard";
import Label from "../components/form/Label";
import Input from "../components/form/input/InputField";
import Button from "../components/ui/button/Button";
import { BoxIcon } from "../icons";

export default function EnquiryFormPage() {
//   const [enqNo, setEnqNo] = useState("");
//   const [date, setDate] = useState("");
//   const [course, setCourse] = useState("");
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [preferredTimings, setTimings] = useState("");
//   const [totalFee, setTotalFee] = useState("");
//   const [discount, setDiscount] = useState("");
//   const [netFee, setNetFee] = useState("");

//   const handleTotalFeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setTotalFee(value);
//     calculateNetFee(value, discount);
//   };

//   const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setDiscount(value);
//     calculateNetFee(totalFee, value);
//   };

//   const calculateNetFee = (total: string, discountAmount: string) => {
//     const totalNum = parseFloat(total) || 0;
//     const discountNum = parseFloat(discountAmount) || 0;
//     const calculatedNetFee = totalNum - discountNum;
//     setNetFee(calculatedNetFee.toFixed(2));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const formData = {
//       enqNo,
//       date,
//       course,
//       name,
//       phone,
//       mobile,
//       preferredTimings,
//       totalFee,
//       discount,
//       netFee,
//     };
//     console.log(formData);
//     setEnqNo("");
//     setDate("");
//     setCourse("");
//     setName("");
//     setPhone("");
//     setMobile("");
//     setTimings("");
//     setTotalFee("");
//     setDiscount("");
//     setNetFee("");
//   };

  return (
    <div>
      <PageMeta
        title="Enquiry Form | Institute Dashboard"
        description="Inquiry Form for Institute Dashboard"
      />
      <PageBreadcrumb pageTitle="Add Enquiry" />
      <div className="grid grid-cols-4 gap-6 xl:grid-cols-4">
        <div className="col-span-2 space-y-6">
          <ComponentCard title="Add Inquiry">
            <div className="space-y-6">
              <div>
                <Label htmlFor="enquiry">Enquiry No.</Label>
                <Input disabled type="text" id="enquiry" placeholder="12527" />
              </div>
              <div>
                <Label htmlFor="inputOne">Date</Label>
                <Input type="text" id="inputOne" placeholder="Enter Date" />
              </div>
              <div>
                <Label htmlFor="inputOne">Course</Label>
                <Input type="text" id="inputOne" placeholder="Enter Course" />
              </div>
              <div>
                <Label htmlFor="inputOne">Name</Label>
                <Input type="text" id="inputOne" placeholder="Enter Name" />
              </div>
              <div>
                <Label htmlFor="inputOne">Phone</Label>
                <Input
                  type="text"
                  id="inputOne"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div>
                <Label htmlFor="inputOne">Mobile</Label>
                <Input
                  type="text"
                  id="inputOne"
                  placeholder="Enter Mobile Number"
                />
              </div>
              <div>
                <Label htmlFor="inputOne">Preferred Timings</Label>
                <Input
                  type="text"
                  id="inputOne"
                  placeholder="Enter First Name"
                />
              </div>
              <div>
                <Label htmlFor="inputOne">Total Fee</Label>
                <Input
                  type="text"
                  id="inputOne"
                  placeholder="Enter First Name"
                />
              </div>
              <div>
                <Label htmlFor="inputOne">Discount</Label>
                <Input
                  type="text"
                  id="inputOne"
                  placeholder="Enter First Name"
                />
              </div>
              <div>
                <Label htmlFor="inputOne">Net Fee</Label>
                <Input
                  type="text"
                  id="inputOne"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="flex items-center gap-5">
                <Button
                  size="sm"
                  variant="primary"
                  startIcon={<BoxIcon className="size-5" />}
                >
                  Submit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  startIcon={<BoxIcon className="size-5" />}
                >
                  Back
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  startIcon={<BoxIcon className="size-5" />}
                >
                  View Inquiry Form
                </Button>
              </div>
            </div>
          </ComponentCard>
        </div>
        <div className="col-span-2 space-y-6">
          <ComponentCard title="Basic Details">
            <div>
              <Label htmlFor="inputOne">Name</Label>
              <Input type="text" id="inputOne" placeholder="Enter First Name" />
            </div>
            <div>
              <Label htmlFor="inputTwo">S/D/W of</Label>
              <Input type="text" id="inputTwo" placeholder="Enter Last Name" />
            </div>
          </ComponentCard>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> c195bef (doing ui beg fix)
