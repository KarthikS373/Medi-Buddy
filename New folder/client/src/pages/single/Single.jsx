

import SinglePost from "../../components/singlePost/SinglePost";

import Sidebar from "../../components/sidebar/Sidebar";
import "./single.css";

export default function Single() {
  return (
    <div className="BLOG__single">
      <SinglePost/>
      <Sidebar />
    </div>
  );
}
