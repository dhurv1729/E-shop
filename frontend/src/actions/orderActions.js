import { useDispatch } from "react-redux"
import axios from "axios";

export const createOrder = (user) => async(dispatch, getState) => {

  try {
    dispatch({
        type: 'CREATE_ORDER_REQUEST'
      })
    
      const { userLogin : { userInfo }} = getState()

      const config = {
        headers: { 
          "content-type": 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
    }

    const { data } = await axios.post(`/api/orders`, user, config);

    dispatch({
      type: 'CREATE_ORDER_SUCCESS',
      payload: data
    })

  } 
  catch (error) {

    const message = error.response && error.response.data.message
          ? error.response.data.message
          : error.message

    dispatch({
      type: 'CREATE_ORDER_FAIL',
      payload: message
    })

  }
}

export const getOrderDetails = (id) => async(dispatch, getState) => {

  try {
    dispatch({
        type: 'ORDER_DETAIL_REQUEST'
      })
    
      const { userLogin : { userInfo }} = getState()

      const config = {
        headers: { 
          "content-type": 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }

    const { data } = await axios.get(`/api/orders/${id}`, config);

    dispatch({
      type: 'ORDER_DETAIL_SUCCESS',
      payload: data
    })

  } 
  catch (error) {

    const message = error.response && error.response.data.message
          ? error.response.data.message
          : error.message

    dispatch({
      type: 'ORDER_DETAIL_FAIL',
      payload: message
    })

  }
}

export const payOrder = (id) => async(dispatch, getState) => {

  try {
    dispatch({
        type: 'ORDER_PAY_REQUEST'
      })
    
      const { userLogin : { userInfo }} = getState()

      const config = {
        headers: { 
          "content-type": 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }
    const { data } = await axios.put(`/api/orders/${id}/pay`, {},  config);
      
    dispatch({
      type: 'ORDER_PAY_SUCCESS',
      payload: data
    })

  } 
  catch (error) {

    const message = error.response && error.response.data.message
          ? error.response.data.message
          : error.message

    dispatch({
      type: 'ORDER_PAY_FAIL',
      payload: message
    })

  }
}

export const deliverOrder = (id) => async(dispatch, getState) => {

  try {
    dispatch({
        type: 'ORDER_DELIVER_REQUEST'
      })
    
      const { userLogin : { userInfo }} = getState()

      const config = {
        headers: { 
          "content-type": 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }
    const { data } = await axios.put(`/api/orders/${id}/deliver`, {},  config);
      
    dispatch({
      type: 'ORDER_DELIVER_SUCCESS',
      payload: data
    })

  } 
  catch (error) {

    const message = error.response && error.response.data.message
          ? error.response.data.message
          : error.message

    dispatch({
      type: 'ORDER_DELIVER_FAIL',
      payload: message
    })

  }
}

export const listMyOrders = (id, paymentResult) => async(dispatch, getState) => {

  try {
    dispatch({
        type: 'ORDER_LIST_MY_REQUEST'
      })
    
      const { userLogin : { userInfo }} = getState()

      const config = {
        headers: { 
          "content-type": 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }
    const { data } = await axios.get(`/api/orders/myorders`, config);
      
    dispatch({
      type: 'ORDER_LIST_MY_SUCCESS',
      payload: data
    })

  } 
  catch (error) {

    const message = error.response && error.response.data.message
          ? error.response.data.message
          : error.message

    dispatch({
      type: 'ORDER_LIST_MY_FAIL',
      payload: message
    })

  }
}

export const listOrders = () => async(dispatch, getState) => {

  try {
    dispatch({
        type: 'ORDER_LIST_REQUEST'
      })
    
      const { userLogin : { userInfo }} = getState()

      const config = {
        headers: { 
          "content-type": 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }
    const { data } = await axios.get('/api/orders/', config);
      
    dispatch({
      type: 'ORDER_LIST_SUCCESS',
      payload: data
    })

  } 
  catch (error) {

    const message = error.response && error.response.data.message
          ? error.response.data.message
          : error.message

    dispatch({
      type: 'ORDER_LIST_FAIL',
      payload: message
    })

  }
}

