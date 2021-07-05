import { Inertia } from "@inertiajs/inertia";
import React from "react";
import Layout from "../../../components/commen/layouts";


interface Props {
  bookmarks:any;
}

const bookmarkViewPage:React.FC<Props> = ({ bookmarks }) => {
    const handelSave = (event: React.MouseEvent) => {
      event.preventDefault();
      Inertia.post('/bookmark/make-active', { id: bookmarks.id })
    }

    return <Layout>
      <div className="row">
        <div className="col-md-6">
          { bookmarks.title && (
            <div className="card">
              <div className="card-header">{bookmarks.title}</div>
              <div className="card-body">
                <p>{bookmarks.description}</p>
                <div className="mt-3 mb-3">
                  <img src={bookmarks.image_url} alt={bookmarks.title} className="img-fluid"/>
                </div>
                <button className="btn btn-small btn-primary mt-2" onClick={ handelSave }>save</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
}

export default bookmarkViewPage;
