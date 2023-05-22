import React from "react";
import Table from "react-bootstrap/Table";
import "./Table_data.css";
export default function Table_data() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 ">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th className="table_headder">#</th>
                  <th className="table_headder">Gross</th>
                  <th className="table_headder">Fuel</th>
                  <th className="table_headder">insurance</th>
                  <th className="table_headder">installment</th>
                  <th className="table_headder">Truck repair</th>
                  <th className="table_headder">Tax</th>
                  <th className="table_headder">Dispatch</th>
                  <th className="table_headder">other</th>
                  <th className="table_headder">total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>10</td>
                  <td>20</td>
                  <td>30</td>
                  <td>40</td>
                  <td>50</td>
                  <td>60</td>
                  <td>70</td>
                  <td>80</td>
                  <td>360</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>10</td>
                  <td>20</td>
                  <td>30</td>
                  <td>40</td>
                  <td>50</td>
                  <td>60</td>
                  <td>70</td>
                  <td>80</td>
                  <td>360</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
