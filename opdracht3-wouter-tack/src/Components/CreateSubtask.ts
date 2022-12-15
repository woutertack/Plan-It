addDoc(collectionRef, {
  title: titleTask,
  deadline: deadlineTask,
  createdAt: serverTimestamp(),
  createdBy: email,
  invited_members: result,
  joined_members: '',
  questions: '',
  checklist: false,
  timer: 0,
  points: pointsTask,
})
  .then((docRef) => {
    // add subtasks to firebase
    console.log('Document written with ID: ', docRef.id);
    const collectionRefSubtask = collection(database, 'projects', docRef.id, 'subtasks');
    addDoc(collectionRefSubtask, {
      title: subTask,

    })
      .then(() => {
        window.location.replace('/dashboard');
      })
      .catch((err) => {
        alert(err.message);
      });
    window.location.replace('/dashboard');
  })
  .catch((err) => {
    alert(err.message);
  });
}