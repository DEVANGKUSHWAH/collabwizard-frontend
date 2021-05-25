import { Form } from 'antd'
import SuggestionCard from '../components/SuggestionCard'
import React, { useState, useEffect, } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../_redux/networkActions";
import { useRouteMatch } from 'react-router-dom';

export default function SuggestionPage() {

    const match = useRouteMatch()
    const [form] = Form.useForm();
    const [visible,setVisible] = useState(false);

    const dispatch = useDispatch();
    const { actionsLoading, networkForEdit,teachers,listLoading } = useSelector(
      (state) => ({
        actionsLoading: state.networks.actionsLoading,
        listLoading: state.networks.listLoading,
        networkForEdit: state.networks.networkForEdit,
        teachers : state.networks.teachers
      }),
      shallowEqual
    );


    useEffect(() => {
      // server call for getting Customer by id
      dispatch(actions.fetchTeachers(match.params));
    }, [dispatch]);

    return (
        <>
            <h1 style={{marginLeft:"1rem",fontSize:"1.4rem",fontWeight:"bold"}}>Suggestions</h1>
            <div style={{display:"flex",flexWrap:"wrap"}}>
                {
                    !listLoading ? teachers != null ?
                    teachers.map((teacher,index) => (
                        <SuggestionCard key={index} listLoading={listLoading} data={teacher}/>
                    ))
                    : <span>No Suggestion</span> : <span>Loading...</span>
                }
            </div>
        </>
    )
}
