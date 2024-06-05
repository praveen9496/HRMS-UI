import React, { Component } from "react";
import { Table } from 'antd';


import IMG01 from '../../../../assets/images/img-2.jpg';
import IMG02 from '../../../../assets/images/img-8.jpg';
import IMG04 from '../../../../assets/images/img-6.jpg';


class Personalreports extends Component {
	constructor(props){
		super(props);
		this.state = {
			showTable: null,
			data:[
         {id:1,image:IMG01,Name: 'Danny Ward', Gender: 'Male', Salary: '$3000', Date: '25 Jun 1984', Number: '9876543231', Address: '201 Lunetta Street,Plant City, Florida(FL), 33566', Bank: 'Life Essence Banks, Inc', Account: '112300987652'},
			   {id:2,image:IMG02,Name: 'Danny Ward', Gender: 'Male', Salary: '$3000', Date: '25 Jun 1984', Number: '9876543231', Address: '201 Lunetta Street,Plant City, Florida(FL), 33566', Bank: 'Life Essence Banks, Inc', Account: '112300987652'},
         {id:3,image:IMG04,Name: 'Danny Ward', Gender: 'Male', Salary: '$3000', Date: '25 Jun 1984', Number: '9876543231', Address: '201 Lunetta Street,Plant City, Florida(FL), 33566', Bank: 'Life Essence Banks, Inc', Account: '112300987652'},
        ],
	
        };
        
    }
        render(){

            const { data } = this.state
            const columns = [
                {
                    title: 'Name',
                    dataIndex: 'Name',
                    render: (text, record) => (            
                    
                        <>  <a href="#0" className="avatar avatar-sm mr-2"><img alt="" src={record.image} /></a>
                          <h2 className="table-avatar"><a href="#0">{text}</a></h2></>
                      ), 
                  },
                  {
                    title: 'Gender',
                    dataIndex: 'Gender',
                  },
                  {
                      title:"Salary Current",
                      dataIndex: 'Salary'
                  },
                  {
                    title:"Date Of Birth",
                    dataIndex: 'Date'
                  },
                  {
                    title:"Phone Number	",
                    dataIndex: 'Number'
                  },
                  {
                    title:"Address",
                    dataIndex: 'Address'
                  },
                  {
                    title:"Bank Name",
                    dataIndex: 'Bank'
                  },
                  {
                    title:"Account Number",
                    dataIndex: 'Account'
                  },
                  
        
            ]
    
            return(
              <div className="table-responsive"> <Table className="table-striped"
                style = {{overflowX : 'auto'}}
                columns={columns}                 
                // bordered
                dataSource={data}
                rowKey={record => record.id}
                pagination={false} 
                />
                <div className="text-center mt-3">
										<a href="#0" className="btn btn-theme button-1 ctm-border-radius text-white">Download Report</a>
									  </div>
                </div>
            )
        }

    }
    
  export default Personalreports;