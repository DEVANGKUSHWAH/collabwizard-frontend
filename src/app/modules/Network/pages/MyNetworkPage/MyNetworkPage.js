import { Card,Form } from 'antd'
import MyNetworkCard from '../components/MyNetworkCard'
import React, { useState, useEffect, } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../_redux/networkActions";
import { useRouteMatch } from 'react-router-dom';

export default function MyNetworkPage() {

    const match = useRouteMatch()
    const [form] = Form.useForm();
    const [visible,setVisible] = useState(false);

    const dispatch = useDispatch();
    const { actionsLoading, networkForEdit,entities,listLoading } = useSelector(
      (state) => ({
        actionsLoading: state.networks.actionsLoading,
        listLoading: state.networks.listLoading,
        networkForEdit: state.networks.networkForEdit,
        entities : state.networks.entities
      }),
      shallowEqual
    );


    useEffect(() => {
      // server call for getting Customer by id
      dispatch(actions.fetchNetworks(match.params));
    }, [dispatch]);

    return (
        <div>
            <Card className="box-shadow" style={{margin:"1rem",borderRadius:".3rem"}}>
            <h1 style={{marginLeft:"1rem",fontSize:"1.4rem",fontWeight:"bold"}}>My Network</h1>
            {
                !listLoading ? entities != null ?
                entities.map((teacher,index) => (
                    <MyNetworkCard key={index} listLoading={listLoading} data={teacher}/>
                ))
                : <span>No Network</span> : <span>Loading...</span>
            }
            </Card>
        </div>
    )
}
