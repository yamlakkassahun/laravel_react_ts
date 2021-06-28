import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import Layout from "../../../components/commen/layouts";


interface Props {}

const bookmarkListPage:React.FC<Props> = () => {

  const [state, setState] = useState({
    link:"",
    title:"some hard coded text",
  });

  const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Inertia.post('/bookmark/preview', state);
  }

  return <Layout>
    <div className="row">
        <div className="col-md-8">
          <form onSubmit={handelSubmit}>
            <div className="form-group">
              <label htmlFor="link">Link</label>
              <input type="text" className="form-control" name="link" onChange={ handelChange }/>
            </div>
          </form>
        </div>
    </div>
  </Layout>
}

export default bookmarkListPage;
