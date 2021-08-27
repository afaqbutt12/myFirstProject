import React, { useState } from "react";
import axios from "axios";
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CProgress,
  cilArrowCircleTop,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const UploadFile = () => {
  const [visible, setVisible] = React.useState(5)

  // const save = () => {
  //   let abc =
  //     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  // };
  const [selectedFile, setSelectedFile] = useState({});
  // console.log(selectedFile);
  const [isFilePicked, setIsFilePicked] = useState({});

  const changeHandler = (event) => {
    const file = event.target.files[0];
    setSelectedFile({ file });
    //    if (
      //   file.type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      // ) {     setSelectedFile({ file });
    // }
    // else{
    //   console.log("error");
    // }
  };

  const save =(evt)=>{
    evt.preventDefault();
        let formData= new FormData();
        formData.append('file', selectedFile.file);
        // formData.append('file', "merifile");
console.log(formData);
 
      //   for (var pair of formData.entries()) {
      //     console.log(pair[0]+ ', ' + pair[1]); 
      // }
      const options = {
        headers: {
          "Content-Type":"multipart/form-data",
        },
      };
      if(formData.type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ){
      axios.post("/myFile", formData, options).then((res) => {
                              console.log(res.data);
                              if(res.data=true){
                                setSelectedFile({})
                              }
                            }); 
                          }
                          else{
                            <CAlert
                color="warning"
                show={visible}
                closeButton
                onShowChange={setVisible}
              >
                I will be closed in {visible} seconds!
                <CProgress
                  striped
                  color="warning"
                  value={Number(visible) * 5}
                  size="xs"
                  className="mb-3"
                />
              </CAlert>
                          }     
  }
  return (
    <>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm >
                    <h1>Upload your file</h1>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon className="cil-arrow-circle-top" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        name="file"
                        type="file"
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                        onChange={changeHandler}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton
                        onClick={save}
                          // onClick={(evt) => {
                          //   evt.preventDefault();
                          //     let formData= new FormData();
                          //     formData.append('/file',setData({ ...selectedFile}))
                          //     fileData[evt.target.name] = URL.createObjectURL(
                          //       evt.target.files[0],
                          //       { oneTimeOnly: true }
                          //     );
                            // axios.post("/file", fileData).then((res) => {
                            //   console.log(res.data.success);
                            // });
                          // }}
                          color="primary"
                          className="px-4"
                        >
                          Upload
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default UploadFile;
