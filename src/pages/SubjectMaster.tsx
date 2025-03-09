import React, { useState } from 'react';
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import ComponentCard from "../components/common/ComponentCard";
import Label from "../components/form/Label";
import Input from "../components/form/input/InputField";
import Select from "../components/form/Select"; // Assuming your Select.tsx is fixed
import Button from "../components/ui/button/Button";
import { BoxIcon } from "../icons";

interface Subject {
  serialNo: number;
  name: string;
  maxMarks: number;
  type: string;
}

export default function SubjectMaster() {
  const [serialNo, setSerialNo] = useState<number | undefined>(undefined);
  const [subjectName, setSubjectName] = useState<string>('');
  const [maxMarks, setMaxMarks] = useState<number | undefined>(undefined);
  const [subjectType, setSubjectType] = useState<string>('');
  const [subjects, setSubjects] = useState<Subject[]>([]);

  const options = [
    { value: "Theory", label: "Theory" },
    { value: "Practical", label: "Practical" },
    { value: "Both", label: "Both" },
  ];

  const handleSelectChange = (value: string) => {
    setSubjectType(value);
  };

  const handleAddSubject = () => {
    if (serialNo !== undefined && subjectName && maxMarks !== undefined && subjectType) {
      const newSubject: Subject = {
        serialNo: serialNo,
        name: subjectName,
        maxMarks: maxMarks,
        type: subjectType,
      };
      setSubjects([...subjects, newSubject]);
      setSerialNo(undefined);
      setSubjectName('');
      setMaxMarks(undefined);
      setSubjectType('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <>
      <PageMeta
        title="Subject Master | Your App"
        description="Add and manage subjects in your application."
      />
      <PageBreadcrumb pageTitle="Subject Master" />

      <ComponentCard className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6" title="Add Subject Form">
        <div className="space-y-6">
          <div>
            <Label htmlFor="serialNo">Serial No.</Label>
            <Input
              type="number"
              id="serialNo"
              placeholder="Enter Serial No."
              value={serialNo}
              onChange={(e) => setSerialNo(e.target.value ? parseInt(e.target.value) : undefined)}
            />
          </div>
          <div>
            <Label htmlFor="subjectName">Subject Name</Label>
            <Input
              type="text"
              id="subjectName"
              placeholder="Enter Subject Name"
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="maxMarks">Maximum Marks</Label>
            <Input
              type="number"
              id="maxMarks"
              placeholder="Enter Maximum Marks"
              value={maxMarks}
              onChange={(e) => setMaxMarks(e.target.value ? parseInt(e.target.value) : undefined)}
            />
          </div>
          <div>
            <Label>Subject Type</Label>
            <Select
              options={options}
              placeholder="Select Subject Type"
              onChange={handleSelectChange}
              className="dark:bg-dark-900"
              //value={subjectType} 
            />
          </div>
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="primary"
              startIcon={<BoxIcon className="size-5" />}
              onClick={handleAddSubject}
            >
              Add Subject
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

      <ComponentCard className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6" title="Subject List">
        <ul>
          {subjects.map((subject, index) => (
            <li key={index} className="py-2 border-b border-gray-200 dark:border-gray-700">
              {`Serial No: ${subject.serialNo}, Name: ${subject.name}, Max Marks: ${subject.maxMarks}, Type: ${subject.type}`}
            </li>
          ))}
        </ul>
      </ComponentCard>
    </>
  );
}