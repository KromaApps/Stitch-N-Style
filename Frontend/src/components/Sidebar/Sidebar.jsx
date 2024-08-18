import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import { CategorySidebar } from "./SidebarCategoryOption";
import { TopDesignerSidebar } from "./SidebarTopDesigner";

export function Sidebar({ open, setOpen }) {
  const [option, setOption] = useState("category");

  return (
    <header className="z-50">
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                  </div>
                </TransitionChild>
                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                      Show top offer Advertisement Here if no advertisement
                      available hide this
                    </DialogTitle>
                  </div>
                  <hr />
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    <div className="flex gap-3 text-black mb-4">
                      <button
                        onClick={() => setOption("category")}
                        className={`border p-2 rounded-lg ${
                          option === "category"
                            ? "font-medium border-1 border-black/40 brightness-200 drop-shadow-2xl "
                            : "hover:bg-black hover:text-white"
                        }`}
                      >
                        Categories
                      </button>
                      <button
                        onClick={() => setOption("topDesigner")}
                        className={`border p-2 rounded-lg ${
                          option === "topDesigner"
                            ? "font-medium border-1 border-black/40 brightness-200 drop-shadow-2xl"
                            : "hover:bg-black hover:text-white"
                        }`}
                      >
                        Top Designer
                      </button>
                    </div>
                    <div>
                      {option === "category" ? (
                        <CategorySidebar setOpen={setOpen} />
                      ) : (
                        <TopDesignerSidebar setOpen={setOpen} />
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="mt-4 ml-5 md:hidden">
                    <ul>
                      <li>
                        <Link
                          to="/"
                          className="text-black hover:font-medium focus:font-medium block py-2"
                          onClick={() => setOpen(false)}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="text-black hover:font-medium focus:font-medium block py-2"
                          onClick={() => setOpen(false)}
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </header>
  );
}
