"use client";
import {
  User,
  Calendar,
  MapPin,
  Image as ImageIcon,
  Link,
  DollarSign,
  Upload,
  X,
  ArrowRight,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { createEvent } from "../libs/server.actions";

const CreateForm = () => {
  // implment form handling logic here using react-hook-form
  const { register, handleSubmit, watch } = useForm();
  const formSubmit = async (data: any) => {
   await createEvent(data).then((res) => {
      console.log(res);
      alert("Event created successfully!");

    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 p-4 md:p-6">
      {/* Header */}
      <header className="max-w-4xl mx-auto mb-8 md:mb-10 pt-6">
        <h1 className="text-2xl md:text-3xl font-medium text-gray-900 tracking-tight mb-2">
          Create New Item
        </h1>
        <p className="text-gray-500 text-base font-light">
          Fill in the details below. All fields are required except URL.
        </p>
      </header>

      <form className="max-w-4xl mx-auto" onSubmit={handleSubmit(formSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column - Form Fields */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-medium text-gray-700 uppercase tracking-wide">
                  <User size={14} />
                  Item Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter item name"
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-transparent border-b border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    {...register("name", { required: true })}
                  />
                </div>
              </div>

              {/* Date Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-medium text-gray-700 uppercase tracking-wide">
                  <Calendar size={14} />
                  Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full px-4 py-3 text-gray-900 bg-transparent border-b border-gray-200 focus:border-blue-500 focus:outline-none transition-colors appearance-none"
                    {...register("date", { required: true })}
                  />
                </div>
              </div>

              {/* Location Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-medium text-gray-700 uppercase tracking-wide">
                  <MapPin size={14} />
                  Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter location"
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-transparent border-b border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    {...register("location", { required: true })}
                  />
                </div>
              </div>

              {/* URL Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-medium text-gray-700 uppercase tracking-wide">
                  <Link size={14} />
                  Website URL (Optional)
                </label>
                <div className="relative">
                  <input
                    type="url"
                    placeholder="https://example.com"
                    {...register("url")}
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-transparent border-b border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Price Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-medium text-gray-700 uppercase tracking-wide">
                  <DollarSign size={14} />
                  Price
                </label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-transparent border-b border-gray-200 focus:border-blue-500 focus:outline-none transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    {...register("price")}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-gray-400 text-sm">USD</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-medium text-gray-700 uppercase tracking-wide">
                  <DollarSign size={14} />
                  Description
                </label>
                <div className="relative">
                  <textarea
                    rows={4}
                    placeholder="Describe the event in detail"
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-transparent border-b border-gray-200 focus:border-blue-500 focus:outline-none transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    {...register("description", { required: true })}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-gray-400 text-sm"></span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
            </div>
          </div>

          {/* Right Column - Image Upload */}
          {/*           
          <div className="lg:col-span-4">
            <div className="sticky top-6">
              
              <div className="space-y-2 mb-6 max-md:flex flex-col items-center">
                <label className="flex items-center gap-2 text-xs font-medium text-gray-700 uppercase tracking-wide">
                  <ImageIcon size={14} />
                  Upload Image
                </label>

                <div className="relative rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 bg-gray-50/50 hover:bg-gray-50 transition-all duration-200 cursor-pointer overflow-hidden h-100 aspect-square">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <div className="mb-3 p-2 bg-gray-100 rounded-full">
                      <Upload size={20} className="text-gray-400" />
                    </div>
                    <p className="text-gray-700 text-sm font-medium mb-1">
                      Click to upload
                    </p>
                    <p className="text-gray-400 text-xs">
                      JPG, PNG, WEBP up to 5MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-6">
            </div>
            </div> */}
        </div>
        <input
          type="submit"
          className="group my-10 inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1"
        />
      </form>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-10 pt-6 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>All fields are stored securely</p>
          <p>© {new Date().getFullYear()} Minimalist Forms</p>
        </div>
      </footer>
    </div>
  );
};

export default CreateForm;
