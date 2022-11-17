import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {

   const [searchParams,setSearchParams]= useSearchParams()
   const showActiveUSer = searchParams.get('filter')==='active'


  return (
    <div>
      <li>user 1</li>

      <li>user 2</li>
      <li>user 3</li>
      <Outlet/>
      <div>
        <button type="button" onClick={()=>setSearchParams({filter:'active'})} class="btn btn-primary">Active</button>
        <button type="button"  onClick={()=>setSearchParams({})} class="btn btn-warning">RESET</button>
      </div>
      {
        showActiveUSer?<span>Showing Active USer</span>:<span>Showing All USers</span>
      }
    </div>
  );
};

export default Users;
