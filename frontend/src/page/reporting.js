import React from "react";
import {
    Checkbox,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
} from "@material-tailwind/react";


const ContactForm = ({ onClose }) => {
    

    return (
        <div className="flex flex-col justify-center items-center font-poppins">
            <div
                className={`p-3 rounded-2xl border-4 border-gray-300 report-form common`}
            >
                <h1
                    className={`text-center text-lg sm:text-lg  text-white 
                        `}
                >
                   Export Product Reports
                </h1>
                <div className="w-full ">
                    <div className="mx-auto w-full">
                        <Card>
                            <List>
                                <ListItem className="p-0">
                                    <label
                                        htmlFor="vertical-list-react"
                                        className="flex w-full cursor-pointer items-center px-3"
                                    >
                                        <ListItemPrefix className="mr-2">
                                            <Checkbox
                                                id="vertical-list-react"
                                                ripple={false}
                                                className="hover:before:opacity-0 border-black"
                                                containerProps={{
                                                    className: "p-0",
                                                }}
                                            />
                                        </ListItemPrefix>
                                        <Typography color="blue-gray" className="font-medium">
                                            Export shipping Reporting
                                        </Typography>
                                    </label>
                                </ListItem>
                                <ListItem className="p-0">
                                    <label
                                        htmlFor="vertical-list-vue"
                                        className="flex w-full cursor-pointer items-center px-3 "
                                    >
                                        <ListItemPrefix className="mr-3">
                                            <Checkbox
                                                id="vertical-list-vue"
                                                ripple={false}
                                                className="hover:before:opacity-0 border-black"
                                                containerProps={{
                                                    className: "p-0",
                                                }}
                                            />
                                        </ListItemPrefix>
                                        <Typography color="blue-gray" className="font-medium">
                                           Export Tracking Status Report
                                        </Typography>
                                    </label>
                                </ListItem>
                                <ListItem className="p-0">
                                    <label
                                        htmlFor="vertical-list-svelte"
                                        className="flex w-full cursor-pointer items-center px-3 "
                                    >
                                        <ListItemPrefix className="mr-3">
                                            <Checkbox
                                                id="vertical-list-svelte"
                                                ripple={false}
                                                className="hover:before:opacity-0 border-black"
                                                containerProps={{
                                                    className: "p-0",
                                                }}
                                            />
                                        </ListItemPrefix>
                                        <Typography color="blue-gray" className="font-medium">
                                            Export Sales Report
                                        </Typography>
                                    </label>
                                </ListItem>
                                <ListItem className="p-0">
                                    <label
                                        htmlFor="vertical-list-svelte"
                                        className="flex w-full cursor-pointer items-center px-3"
                                    >
                                        <ListItemPrefix className="mr-3">
                                            <Checkbox
                                                id="vertical-list-svelte"
                                                ripple={false}
                                                className="hover:before:opacity-1 border-black"
                                                containerProps={{
                                                    className: "p-0",
                                                }}
                                            />
                                        </ListItemPrefix>
                                        <Typography color="blue-gray" className="font-medium">
                                            Export Agent Commission Report
                                        </Typography>
                                    </label>
                                </ListItem>
                            </List>
                        </Card>
                        <div className="flex flex-col sm:flex-row space-x-2 py-2 justify-center">

                            <a href className="w-[40%] border-2 text-[16px] font-medium text-white py-2.5 my-1 rounded-xl bg-[#184bdf] text-center
                              cursor-pointer no-underline focus:shadow-outline focus:outline-none"
                                onClick={onClose}
                            >
                                Download
                            </a>

                            <a href
                                className=" w-[40%] border-2 text-[16px] font-medium text-white py-2.5 my-1 rounded-xl bg-[#184bdf] text-center
                               cursor-pointer no-underline focus:shadow-outline focus:outline-none"
                                onClick={onClose}
                            >
                                Cancel
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContactForm;

