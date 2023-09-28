import DateRangePicker from "flowbite-datepicker/DateRangePicker";
import { useEffect } from "react";

function DatePicker({ register }) {
  useEffect(() => {
    const dateRangePickerEl = document.getElementById("dateRangePicker");

    if (dateRangePickerEl) {
      new DateRangePicker(dateRangePickerEl, {
        minDate: new Date(),
      });
    }
  }, []);
  return (
    <div id="dateRangePicker">
      <div
        datepicker-autohide="true"
        className="flex items-end justify-between"
      >
        <div className="relative">
          <div className="absolute left-0 flex items-center pl-3 pointer-events-none bottom-3.5">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <label
            htmlFor="start"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            시작일
          </label>
          <input
            name="start"
            {...register("start", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 outline-blue-500"
            placeholder="Select date start"
          />
        </div>
        <span className="mb-2.5">부터</span>
        <div className="relative">
          <div className="absolute bottom-3.5 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <label
            htmlFor="end"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            종료일
          </label>
          <input
            name="end"
            {...register("end", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 outline-blue-500"
            placeholder="Select date end"
          />
        </div>
        <span className="mb-2.5">까지</span>
      </div>
    </div>
  );
}
export default DatePicker;
