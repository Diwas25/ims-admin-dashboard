import React, { useState } from 'react';
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import ComponentCard from "../components/common/ComponentCard";
import Label from "../components/form/Label";
import Input from "../components/form/input/InputField";
import Button from "../components/ui/button/Button";
import { BoxIcon } from "../icons";

interface Course {
  serialNo: number;
  name: string;
  fees: number;
  duration: string;
}

export default function CourseMaster() {
  const [serialNo, setSerialNo] = useState<number | undefined>(undefined);
  const [courseName, setCourseName] = useState<string>('');
  const [fees, setFees] = useState<number | undefined>(undefined);
  const [duration, setDuration] = useState<string>('');
  const [courses, setCourses] = useState<Course[]>([]);

  const handleAddCourse = () => {
    if (serialNo !== undefined && courseName && fees !== undefined && duration) {
      const newCourse: Course = {
        serialNo: serialNo,
        name: courseName,
        fees: fees,
        duration: duration,
      };
      setCourses([...courses, newCourse]);
      setSerialNo(undefined);
      setCourseName('');
      setFees(undefined);
      setDuration('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <>
      <PageMeta
        title="Course Master | Your App"
        description="Add and manage courses in your application."
      />
      <PageBreadcrumb pageTitle="Course Master" />

      <ComponentCard className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6" title="Add Course Form">
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
            <Label htmlFor="courseName">Course Name</Label>
            <Input
              type="text"
              id="courseName"
              placeholder="Enter Course Name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="fees">Fees</Label>
            <Input
              type="number"
              id="fees"
              placeholder="Enter Fees"
              value={fees}
              onChange={(e) => setFees(e.target.value ? parseInt(e.target.value) : undefined)}
            />
          </div>
          <div>
            <Label htmlFor="duration">Duration</Label>
            <Input
              type="text"
              id="duration"
              placeholder="Enter Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="primary"
              startIcon={<BoxIcon className="size-5" />}
              onClick={handleAddCourse}
            >
              Add Course
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

      <ComponentCard className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6" title="Course List">
        <ul>
          {courses.map((course, index) => (
            <li key={index} className="py-2 border-b border-gray-200 dark:border-gray-700">
              {`Serial No: ${course.serialNo}, Name: ${course.name}, Fees: ${course.fees}, Duration: ${course.duration}`}
            </li>
          ))}
        </ul>
      </ComponentCard>
    </>
  );
}