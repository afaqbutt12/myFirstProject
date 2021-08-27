import { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import  axios  from 'axios';

const Register = () => {
  // let userNameRef = useRef();
  // let passwordRef = useRef();
  // // let phoneRef = useRef();
  // let emailRef = useRef();
//   const saveUser = (evt) => {
//     evt.preventDefault();
// console.log(userNameRef.current.value);
//     let user = {
//       name: userNameRef.current.value,
//       password: passwordRef.current.value,
//       // phone: phoneRef.current.value,
//       email: emailRef.current.value,
//     };
//     // axios.post("/signup", user).then((res) => {
//     //   console.log(res.data);
//     //   //  console.log(res.evt)
//     // });
//     console.log(user);
//   };
let [AddsDAta, setData] = useState({});
 const saveForm =(evt)=>{
  evt.preventDefault();
   console.log(AddsDAta);
   axios.post('/register',AddsDAta).then((res)=>{
    console.log(res.data.success)})
 }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={saveForm}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                       onChange={(evt) => {
                        AddsDAta[evt.target.name] = evt.target.value;
                        setData({ ...AddsDAta });
                      }}
                      name="userName"
                      type="text"
                      placeholder="Username"
                      autoComplete="username"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                    onChange={(evt) => {
                      AddsDAta[evt.target.name] = evt.target.value;
                      setData({ ...AddsDAta });
                    }}
                    name="email"
                      type="email"
                      placeholder="Email"
                      autoComplete="email"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                    onChange={(evt) => {
                      AddsDAta[evt.target.name] = evt.target.value;
                      setData({ ...AddsDAta });
                    }}
                    name="password"
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                     onChange={(evt) => {
                      AddsDAta[evt.target.name] = evt.target.value;
                      setData({ ...AddsDAta });
                    }}
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  {/* onClick={(evt)=>{
              evt.preventDefault();
              axios.post('/register',AddsDAta).then((res)=>{
                console.log(res.data.success)
                    console.log(AddsDAta);})
                  }} type="submit" */}
                  <CButton type="submit" color="success" block>
                    Create Account
                  </CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block>
                      <span>facebook</span>
                    </CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block>
                      <span>twitter</span>
                    </CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
