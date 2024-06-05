import React, { Component } from "react";
import { Table } from 'antd';


class Leavedetails extends Component {
	constructor(props){
		super(props);
		this.state = {
			showTable: null,
			data:[
         {id:1,Date:'05 May 2020', Total: '7', First: '6', Second: '7', wfh:'1', Absent: '0', Today: '1'},
         {id:2,Date:'10 Jun 2020',Total: '2', First: '2', Second: '6', wfh:'2', Absent: '1', Today: '8'},
         {id:3,Date:'20 Aug 2020', Total: '3', First: '4', Second: '3', wfh:'3', Absent: '3', Today: '7'},
        ],
	
        };
        
    }
        render(){

            const { data } = this.state
            const columns = [
                
                  {
                    title: 'Date',
                    dataIndex: 'Date',
                  },
                  {
                      title:"Total Employees",
                      dataIndex: 'Total'
                  },
                  {
                    title:"First Half",
                    dataIndex: 'First'
                  },
                  {
                    title:"Second Half",
                    dataIndex: 'Second'
                  },
                  {
                    title:"Working From Home",
                    dataIndex: 'wfh'
                  },
                  {
                    title:"Absent",
                    dataIndex: 'Absent'
                  },
                  {
                    title:"Today",
                    dataIndex: 'Today Aways'
                  },
                  
        
            ]
    
            return(
               
                                                  <Table className="table-striped"
														style = {{overflowX : 'auto'}}
														columns={columns}                 
														// bordered
														dataSource={data}
														rowKey={record => record.id}
														pagination={false} 
														/>
                                             
            )
        }

    }
    
  export default Leavedetails;