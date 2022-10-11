import Table from "react-bootstrap/Table";
import { IFrontdata } from "../pages/Home";
import { GoTriangleUp } from "react-icons/go";
import moment from "moment";



interface ITabledata {
  data: IFrontdata[];
}
function NewTable({ data }: ITabledata) {
  return (
    <div className="stylePage">
      <Table  striped bordered hover>
    <thead>
      <tr className="tableDecor">
        <th>Comments</th>
        <th>Vote Count</th>
        <th>UpVote</th>
        <th>NewsDetails</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item: IFrontdata, index) => {
        return (
          <tr key={index}>
            <td>{item?.num_comments}</td>
            <td>{item?.points}</td>
            <td>
              {item?.upvote}
              <GoTriangleUp />
            </td>
            <td>
               <b>{item?.title}</b>({item?.url}) by
               <b>({item?.author})</b>
               {moment().startOf("day").fromNow()}</td>

          </tr>
        );
      })}
    </tbody>
  </Table>
</div>

  );
}

export default NewTable;
