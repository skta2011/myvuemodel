import Mock from 'mockjs';

const mockUsers = []

for(let i = 0; i < 36; i ++){
    mockUsers.push(Mock.mock({
        id : Mock.Random.guid(),
        name : Mock.Random.cname(),
        addr : Mock.mock('@county(true)'),
        birthday : Mock.Random.date(),
        'age|18-28' : 1,
        'sex|1' : ['male','female']
    }));
}

export {mockUsers};