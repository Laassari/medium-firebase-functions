const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)
const db = admin.firestore()
firestore.settings({ timestampsInSnapshots: true })

/* 
  claps is the number of keys in a doc for a specific
  post. eg:
  /likes/postId/{object if IDs}
  the number of ids is the number of claps
  update the claps whenever a key is added/removed
*/

exports.updatePostClaps = functions.firestore
  .document('likes/{postId}')
  .onWrite((change, context) => {
    const { postId } = context.params

    const data = change.after.data()
    const claps = Object.keys(data).length

    const postRef = db.collection('posts').doc(postId)

    return postRef.update({ claps })
  })
