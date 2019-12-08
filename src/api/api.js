import axios from 'axios';

let base = '';

export const queryUser = params => { return axios.post(`${base}/queryUsers`, params).then(res => res.data); };

export const deleteUser = params => { return axios.post(`${base}/deleteUser`, params).then(res => res.data); };

export const editUser = params => { return axios.post(`${base}/editUser`, params).then(res => res.data); };