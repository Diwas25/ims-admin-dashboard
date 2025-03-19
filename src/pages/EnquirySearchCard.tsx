import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ComponentCard from "../components/common/ComponentCard";
import Label from "../components/form/Label";
import Select from "../components/form/Select";
import Input from "../components/form/input/InputField";
import Button from "../components/ui/button/Button";

export default function EnquirySearchCard({
  title,
  dropdown,
  fields,
  buttons,
}: EnquirySearchCardProps) {
  const [dateFrom, setDateFrom] = useState<Date | null>(null);
  const [dateTo, setDateTo] = useState<Date | null>(null);

  return (
    <ComponentCard title={title}>
      <div className="grid grid-cols-6 gap-6">
        {dropdown && (
          <div key={`dropdown-${dropdown.label}`}>
            <Label>{dropdown.label}</Label>
            <Select
              options={dropdown.options}
              placeholder="Select an option"
              className="dark:bg-dark-900"
            />
          </div>
        )}

        {/* Date From */}
        <div>
          <Label>Date From</Label>
          <DatePicker
            selected={dateFrom}
            onChange={(date) => setDateFrom(date)}
            className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
            placeholderText="Select Date"
          />
        </div>

        {/* Date To */}
        <div>
          <Label>Date To</Label>
          <DatePicker
            selected={dateTo}
            onChange={(date) => setDateTo(date)}
            className=" h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
            placeholderText="Select Date"
          />
        </div>

        {fields.map((field) => (
          <div key={`field-${field.name}`}>
            <Label htmlFor={field.name}>{field.label}</Label>
            <Input
              type={field.type}
              id={field.name}
              placeholder={field.placeholder}
            />
          </div>
        ))}

        {buttons.map((button, index) => (
          <div
            className="flex items-end"
            key={`button-${button.label}-${index}`}
          >
            <Button
              size="sm"
              className="w-full"
              variant={button.variant || "primary"}
              onClick={button.onClick}
              startIcon={button.icon}
            >
              {button.label}
            </Button>
          </div>
        ))}
      </div>
    </ComponentCard>
  );
}
