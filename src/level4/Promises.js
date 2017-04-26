function myRand() {
  return Math.random() > 0.5
}

var MySonPromiseMeToDoHomework = new Promise(function(resolve, reject) {
  const rand = myRand()
  if (rand)
    resolve()
  else
    reject()
})

MySonPromiseMeToDoHomework
  .then(
    () => console.log("I love you, son"),
    () => console.log("Mackdonalds is waiting for your skillset!")
  )