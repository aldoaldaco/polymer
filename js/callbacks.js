'use strict';
console.log('***********************************************CALLBACKS START');
function requestHandler(req, resp) {
  User.findById(req.userId, function(error, user) {
    if(error) {
        res.send(error);
    } else {
      Tasks.findById(user.id, function(error, tasks) {
          if(error) {
            res.send(error);
          } else {
            tasks.complete = true;
            tasks.save(function(error) {
              if(error) {
                res.send(error);
              } else {
                res.send('Tasks saved');
                console.log('Save success');
              }
            });
          }
      })
    }
  })
}
console.log('***********************************************CALLBACKS END');
console.log('***********************************************PROMISES START');
function requestHandler(req, resp) {
  User.findById(req.userId)
      .then((user) => {
        return Tasks.findById(user.id);
      })
      .then((task) => {
        task.complete = true;
        return task.save();
      })
      .then(() => {
        res.send('Tasks completed');
      })
      .catch((error) => {
        res.send(error);
      });
}
console.log('***********************************************PROMISES END');
console.log('***********************************************ASYNC START');
async function requestHandler(request, response) {
  try {
    const user = await User.findById(req.userId);
    const tasks = await Task.findById(user.id);
    tasks.complete = true;
    await tasks.save();
    response.send('Tasks completed');
  } catch (error) {
    if(error.response.status === '404') {
      throw new Error('User not found');
    } else if(error.response.status === '500'){
      throw new Error('Body is not correct');
    }
  }
}
console.log('***********************************************ASYCN END');
