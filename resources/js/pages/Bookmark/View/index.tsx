import React from "react";
import Layout from "../../../components/commen/layouts";


interface Props {
  bookmarks:any;
}

const bookmarkViewPage:React.FC<Props> = ({ bookmarks }) => {
    return <Layout>
      <div className="row">
        <div className="col-md-8">
          { bookmarks.title && (
            <div className="card">
              <div className="card-header">{bookmarks.title}</div>
              <div className="card-body">
                <p>{bookmarks.description}</p>
                <img src={bookmarks.image_url} alt={bookmarks.title} className="img-fluid"/>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
}

export default bookmarkViewPage;
