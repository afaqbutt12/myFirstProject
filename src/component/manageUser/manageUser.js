import React, { useEffect, useState, createRef } from 'react'
import {
  CBadge,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CDataTable
} from '@coreui/react'
import usersData from '../../views/users/UsersData'
const getBadge = status => {
    switch (status) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
  }
  const fields = ['name','registered', 'role', 'status']
const ManageUser = () => {
  return (
    <>
         <CCol>
          <CCard>
            <CCardHeader>
             <h1>Manage User</h1>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
        <CCardBody>
        </CCardBody>
      
    </>
  )
}

export default ManageUser
