import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";

 function notify() {

    // const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
    // toast.promise(
    //     resolveAfter3Sec,
    //     {
    //       pending: 'Promise is pending',
    //       success: 'Promise resolved 👌',
    //       error: 'Promise rejected 🤯'
    //     }
    // )
    
    // const functionThatReturnPromise = () => new Promise(resolve => setTimeout(resolve, 3000));
    // toast.promise(
    //     functionThatReturnPromise,
    //     {
    //       pending: 'Promise is pending',
    //       success: 'Promise resolved 👌',
    //       error: 'Promise rejected 🤯'
    //     }
    // )
    // const response =  toast.promise(
    //     fetch("A_URL"),
    //     {
    //       pending: 'Promise is pending',
    //       success: 'Promise resolved 👌',
    //       error: 'Promise rejected 🤯'
    //     }
    // );
    // console.log(response)
    const resolveWithSomeData = new Promise(resolve => setTimeout(() => resolve("world"), 3000));
toast.promise(
    resolveWithSomeData,
    {
      pending: {
        render(){
          return "I'm loading"
        },
        icon: false,
      },
      success: {
        render({data}){
          return `Hello ${data}`
        },
        // other options
        icon: "🟢",
      },
      error: {
        render({data}){
          // When the promise reject, data will contains the error
          return <ToastContainer message={data.message} />
        }
      }
    }
)

    const notif= () => {
        toast("Default Notification !");
  
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_CENTER
        });
  
        toast.error("Error Notification !", {
          position: toast.POSITION.TOP_LEFT
        });
  
        toast.warn("Warning Notification !", {
          position: toast.POSITION.BOTTOM_LEFT
        });
  
        toast.info("Info Notification !", {
          position: toast.POSITION.BOTTOM_CENTER
        });
  
        toast("Custom Style Notification with css class!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: 'foo-bar'
        });
        const id = toast.loading("Please wait...")
//do something else
toast.update(id, { render: "All is good", type: "success", isLoading: false });
      };
  return (
    <div>
        <>
          <button onClick={notif}>Notify</button>;
          <ToastContainer />
        </>
    </div>
  )
}

export default notify