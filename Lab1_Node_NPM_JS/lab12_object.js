/**
 * JS的物件
 */

var user1 = {
    name: 'Mark',
    location: 'Taipei',
    role: 'R&D'
}
console.log(user1)

var user2 = {}
console.log(user2) // {}
console.log(user2.name) // undefined
user2['name'] = 'James'
user2.location = 'Taichung'
console.log(user2, user2.name, user2.location, user2.role) // { name: 'James', location: 'Taichung' } James Taichung undefined
user2.role = 'FAE'
console.log("user2.role=", user2.role) // user2.role= FAE
// 物件屬性也可以被刪除？！
delete user2.name
console.log("user2.name=", user2.name) // undefined
console.log(Object.keys(user2)) // 查看物件中的 key array: [ 'location', 'role' ]
console.log(Object.keys(user2).length) // 2