import React from "react";
import Layout from "../../../components/commen/layouts";


interface Props {
  bookmarks: Array<any>;
}

const bookmarkListPage:React.FC<Props> = ({ bookmarks }) => {
    return <Layout>
      <div className="row">
        <div className="col-md-8">
          <ul className="list-group">
            { bookmarks.length > 0 && bookmarks.map((bookmark, index) =>{
              return <li className="list-group-item" key={index}>
                <p>Title: {bookmark.title}</p>
              </li>
            })}
          </ul>
        </div>
    </div>
    </Layout>
}

export default bookmarkListPage;
