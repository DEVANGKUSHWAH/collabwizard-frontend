import FeedsCard from '../components/FeedsCard'
import React, { useEffect, } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../_redux/postsActions";

export default function Feeds() {
    
    const dispatch = useDispatch();
    const { actionsLoading, postForEdit,entities,listLoading } = useSelector(
      (state) => ({
        actionsLoading: state.posts.actionsLoading,
        listLoading: state.posts.listLoading,
        postForEdit: state.posts.postForEdit,
        entities : state.posts.entities
      }),
      shallowEqual
    );


    useEffect(() => {
      // server call for getting Customer by id
      dispatch(actions.fetchPosts());
    }, [dispatch]);

    return (
        <div style={{ width:"100%" }}>
            {
            !listLoading ?  entities != null ?
                entities.map((post,index) => (
                    <FeedsCard key={index} listLoading={listLoading} data={post}/>
                ))
            : <span>No Post</span> : <span>Loading...</span>
            }
        </div>
    )
}
