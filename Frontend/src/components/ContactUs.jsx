import React from 'react'
import { useForm } from "react-hook-form";


function ContactUs() {
  

const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
    return (
        <>
            <div className="flex h-screen items-center justify-center">
                 <div className="w-[600px]">
  <div className="">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      
    
                        <h3 className="font-bold text-3xl ">Contact Us</h3>
                        <div className="mt-4 space-y-2 font-bold">
                      <span>Name</span>
                      <br/>
                  <input type="text" placeholder="Enter your name" className="w-80 px-3 py-1 border rounded-md outline-0"
                    {...register("name", { required: true })} />
                    <br />
            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
            
                  </div>



                     <div className="mt-4 space-y-2">
                      <span>Email</span>
                      <br/>
                  <input type="email" placeholder="Enter your Email" className="w-80 px-3 py-1 border rounded-md outline-none"
                
                    {...register("email", { required: true })} />
                  <br />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            
                  </div>
                  
                               <div className="mt-4 space-y-2">
                      <span>Message</span>
                      <br/>
                  <textarea placeholder="Type your message" className=" w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}/>
                    <br />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            
                  </div>
                  
                  <div className="flex justify-around mt-4">
                      <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Submit</button>
                            
                </div>
                </form>
  </div>
</div>
            </div>
        </>
    )
    






}

export default ContactUs

