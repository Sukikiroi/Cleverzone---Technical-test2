import React,  { useState, useEffect }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { forwardRef } from "react";
import axios from 'axios';
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Editable() {
  const classes = useStyles();
  const { useState } = React;
  const [datame, setdatame] = useState([]);
  const [ErrorMessage, setErrorMessages] = useState([]);
  const [Iserror, setIserror] = useState(false);
  const user='Azizovic';
  useEffect(() => {
    // Update the document title using the browser API
    
    axios.get(`http://localhost:2000/Agencies`)
      .then(res => {
        
        setdatame( res.data );
       
      })
      .catch(error=>{
        setErrorMessages(["Cannot load user data"])
        setIserror(true)
      })


      
  }, []);
  


 
  const [columns, setColumns] = useState([
    
    { title: "NameAgence", field: "NameAgence",searchable :true },
    { title: " Address", field: "Address" ,searchable :false},
    { title: " Wilaya", field: "Wilaya",searchable :false },
    { title: " Commune", field: "Commune",searchable :false },
    { title: " Phone", field: "Phone",searchable :false },
    { title: " Created_At", field: "Created At",searchable :false },
    
  ]);

  const [data, setData] = useState([{"id":1,"Name":"A"}]);

  return (
    <div>
      <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <MaterialTable
        icons={tableIcons}
        cellEditable={{
          onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
            return new Promise((resolve, reject) => {
           
              setTimeout(resolve, 1000);
            });
          }
        }}
        options={{
          selection: true,
          search: true,
          
          searchFieldStyle: {
            borderStyle: "solid",
            borderColor: "Highlight",
            position: "relative",
            right: "100px",
            color: "blue",
          },
        }}
        
        title="Agencies"
        columns={columns}
        data={datame}
        
        editable={{
          
          onRowAdd:(newData) => 
            axios.post("http://localhost:2000/creatagence", newData)
            .then(res => {
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                      setdatame([...datame, newData]);
                      
                      resolve();
                    }, 1000);
                  })
           
           
           })

          



         
         
            
            ,

          onRowUpdate: (newData, oldData,rowData) =>
          axios.put("http://localhost:2000/BedlUser/"+newData.NameAgence, newData)
          .then(res => {
            new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...datame];
                  
                  const index = oldData.tableData.id;
           
                  dataUpdate[index] = newData;
                  
                  setdatame([...dataUpdate]);
                  
                  resolve();
                }, 1000);
              })
         
         
         })

          
            // new Promise((resolve, reject) => {
            //   setTimeout(() => {
            //     const dataUpdate = [...datame];
                
            //     const index = oldData.tableData.id;
          
            //     dataUpdate[index] = newData;
                
            //     setdatame([...dataUpdate]);
                
            //     resolve();
            //   }, 1000);
            // })
            
            
            
            ,





          onRowDelete: (oldData,rowData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...datame];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setdatame([...dataDelete]);
            
                resolve();
              }, 1000);
            }),
        }}
        actions={[
         
          {
            icon: 'save',
            tooltip: 'Save User',
            onClick: (event, rowData) => {
              // Do save operation
            }
          }
        ]}
      
      />
    </div>
  );
}
