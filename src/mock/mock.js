import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mockUsers } from './data/userdata';

let _users = mockUsers;

export default {
    init() {
        let mock = new MockAdapter(axios);

        console.log('初始化mock代码');
        // 查询用户
        mock.onPost('/queryUsers').reply(config => {
            let {page, pageSize, name, querysex, birthdayStart ,birthdayEnd} = JSON.parse(config.data);
            let mockUsers = _users.filter(user => {
                if (name && user.name.indexOf(name) == -1) 
                    return false;
                if (querysex ){
                    if(((user.sex ==='男' && querysex === 'male') 
                        || (user.sex ==='女' && querysex === 'female') )){
                        return true;
                    }else{
                        return false;
                    }
                }
                let birthdayFlag = true;
                if(birthdayStart){
                    if(user.birthday >= birthdayStart){
                        birthdayFlag = true;
                    }else{
                        birthdayFlag = false;
                    }
                }
                if(birthdayFlag && birthdayEnd){
                    if(birthdayEnd >= user.birthday){
                        birthdayFlag = true;
                    }else{
                        birthdayFlag = false;
                    }
                }
                if(!birthdayFlag){
                    return false;
                }
                return true;
            });
            let total = mockUsers.length;
            mockUsers = mockUsers.filter((u, index) => index < pageSize * page && index >= pageSize * (page - 1));
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                    total: total,
                    users: mockUsers
                    }]);
                }, 1000);
            });
        });

        // 删除
        mock.onPost('/deleteUser').reply(config => {
            let {id} = JSON.parse(config.data);
            _users = _users.filter(u => u.id !== id);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                resolve([200, {
                    code: 200,
                    msg: '删除成功'
                }]);
                }, 500);
            });
        });
    }
}