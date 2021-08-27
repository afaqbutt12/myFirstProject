import React,{useState} from 'react';
import { Link } from "react-router-dom";

import {
  CCard,
  CCardBody,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CButton,
  CModalTitle,
  CModalBody,
  CModal,
  CModalFooter,
  CModalHeader,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheHeaderDropdown = () => {
  const [modal, setModal] = useState(false)
  


  return (
  <>

<CModal 
              show={modal} 
              onClose={setModal}
            >
              {/* <CModalHeader closeButton> */}
                
              <CModalHeader closeButton>
                <CModalTitle>Invite</CModalTitle>
              </CModalHeader>
              <CCard className="p-4" style={{marginBottom:"0px"}}>
                {/* <CCardBody> */}
              <CForm>
                    
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="email" placeholder="Email" autoComplete="xyz@xyz.com" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-comment-square" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="messege" autoComplete="messege" />
                    </CInputGroup>
                    <CRow>
                      {/* <CCol xs="6">
                        <CButton color="primary" className="px-4">Send</CButton>
                        
                      </CCol> */}
                      
                    </CRow>
                  </CForm>
                {/* </CCardBody> */}
                  </CCard>
              {/* </CModalBody> */}
              <CModalFooter>
                <CButton color="success" onClick={() => setModal(false)}>Send</CButton>{' '}
                <CButton color="secondary" onClick={() => setModal(false)}>Cancel</CButton>
              </CModalFooter>
            </CModal>


            
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/6.jpg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />
           <CButton>Profile Setting</CButton>
          {/* <CBadge color="info" className="mfs-auto">42</CBadge> */}
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user-follow" className="mfe-2" />
          {/* <Link to="/invite">Invite User</Link> */}
          <CButton onClick={()=>{setModal(true)}}>Invite User</CButton>
          {/* <CBadge color="success" className="mfs-auto">42</CBadge> */}
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-task" className="mfe-2" />
         <CButton > Logout </CButton>
          {/* <CBadge color="danger" className="mfs-auto">42</CBadge> */}
        </CDropdownItem>
        {/* <CDropdownItem>
          <CIcon name="cil-comment-square" className="mfe-2" />
          Comments
          <CBadge color="warning" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Settings</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-credit-card" className="mfe-2" />
          Payments
          <CBadge color="secondary" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-file" className="mfe-2" />
          Projects
          <CBadge color="primary" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Lock Account
        </CDropdownItem> */}
      </CDropdownMenu>
    </CDropdown>
    </>
  )
}

export default TheHeaderDropdown
