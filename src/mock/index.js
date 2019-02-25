import Mock from 'mockjs'
// const Random = Mock.Random


var MockData = Mock.mock({

  "baseList|1-20": [
    {
      id: "@natural(1000, 10000000)",
      name: "@ctitle(3, 8)",
      type: "@ctitle(5, 15)",
      area: "@natural(0, 100)",
      imgUrl: "@image('200x100', '@color', '#fff', 'png', 'mockjs')",
      principal: {
        name: "@cname()",
        tel: "@natural(10000000000, 99999999999)",
      }
    }
  ],

  "usersList|5-20": [
    {
      key: "@natural(1, 10000000)",
      name: "@cname()",
      age: "@natural(18, 60)",
      address: "@county(true)",
      avatarColor: "@color",
      birthday:"@date",
      'gender|1': ["男","女"]
    }
  ],

  "notificationList|3-10": [
    {
      title: '@name',
      avatarColor: "@color",
      description: "@sentence(5)",
    }
  ],

})

export default MockData;